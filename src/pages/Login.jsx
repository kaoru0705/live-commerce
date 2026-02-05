import { Link } from "react-router-dom";
import styles from "../components/ui/login_form.module.css"
import { useRef, useState } from "react";

export default function Login(){
    const API_BASE = "http://localhost:9993"
    const homepageIdRef = useRef(null);
    const passwordRef = useRef(null);
    const [accessToken , setAccessToken] = useState("");

    const login = () => {
        fetch(API_BASE + "/api/auth/login", {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                homepageId: homepageIdRef.current.value,
                password: passwordRef.current.value
            })
        })
        .then(res => {
            if(!res.ok) throw new Error("로그인 실패");
            return res.json();
        })
        .then(data => {
            console.log("로그인 결과 ", data);
            setAccessToken(data.accessToken);
        })
        .catch(err => console.log(err));
    }

    /*
        여기서 개발자는 Authorization 헤더만 신경 썼지, 어디에도 refreshToken을 넣는 코드를 작성하지 않았습니다. 하지만 브라우저는 다음과 같이 행동합니다.
        URL 확인: 요청 주소가 http://localhost:9991/api/auth/logout이네?
        쿠키 확인: "내 금고에 /api/auth 경로로 저장된 쿠키가 있나?" -> 있음! (refreshToken)
        자동 동봉: 브라우저가 네트워크 요청을 보내기 직전에, 헤더에 **Cookie: refreshToken=xxxx;**를 몰래 자동으로 끼워 넣습니다. 
    */
    const logout = () => {
        fetch(API_BASE + "/api/auth/logout", {
            method: "POST",
            credentials: "include",
            headers: {
                "Authorization": "Bearer " + accessToken,
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            if(!res.ok) throw new Error("로그아웃 실패");
            return res.json();
        })
        .then(data => {
            console.log("요청 결과 ", data);
            setAccessToken(data.accessToken);
        })
        .catch(err => console.log(err));
    }

    // header에 액세스토큰 넣기
    const me = () => {
        fetch(API_BASE + "/api/auth/me", {
            method: "GET",
            credentials: "include", // 쿠키를 사용한 데이터 전송 yes
            headers: {
                "Authorization": "Bearer " + accessToken,
                "Content-Type": "application/json"
            }
        })
        .then(res => {
            if(!res.ok) throw new Error("정보 조회 실패");
            return res.json();
        })
        .then(data => {
            console.log("정보 조회 결과 ", data);
        })
        .catch(err => console.log(err));
    }

    const snsLogin = (provider) => {
        // 동기 vs 비동기?
        // 동기 방식으로 요청해야 한다.. 주의) 우리 서버로 요청을하는 이유는 단지 provider의 로그인 인증 요청 주소가 우리 서버측에
        // 있기 때문이었음... 만일 이 방법이 싫다면? 직접 여기서 적어도 됨!!
        location.href = `${API_BASE}/oauth2/authorization/${provider}`;
    }

    return (
        <section className={styles.loginWrapper}>
            <div className={styles.loginCard}>
                <h2>Member Login</h2>
                <p>Welcome back! Please login to your account</p>

                <form>
                    <div className={styles.formGroup}>
                        <input
                            type="text"
                            placeholder="홈페이지 ID"
                            required
                            ref = {homepageIdRef}
                        />
                    </div>

                    <div className={styles.formGroup}>
                        <input
                            type="password"
                            placeholder="비밀번호"
                            required
                            ref = {passwordRef}
                        />
                    </div>

                    <button type="button" className={styles.loginBtn} onClick={login}>Login</button>
                    <button type="button" className={styles.loginBtn} onClick={logout}>Logout</button>
                    <button type="button" className={styles.loginBtn} onClick={me}>나의정보 조회</button>
                    <button type="button" className={styles.snsBtn} onClick={() => snsLogin("google")}>Google</button>
                    <button type="button" className={styles.snsBtn} onClick={() => snsLogin("naver")}>Naver</button>
                    <button type="button" className={styles.snsBtn} onClick={() => snsLogin("kakao")}>Kakao</button>
                </form>

                <div className={styles.loginFooter}>
                    Don’t have an account? 
                    <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </section>
    );
}