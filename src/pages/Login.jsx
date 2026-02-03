import { Link } from "react-router-dom";
import styles from "../components/ui/login_form.module.css"
import { useRef, useState } from "react";

export default function Login(){
    const homepageIdRef = useRef(null);
    const passwordRef = useRef(null);
    const [accessToken , setAccessToken] = useState("");

    const login = () => {
        fetch("http://localhost:9991/api/auth/login", {
            method: "POST",
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

    // header에 액세스토큰 넣기
    const me = () => {
        fetch("http://localhost:9991/api/auth/me", {
            method: "GET",
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
            setAccessToken(data.accessToken);
        })
        .catch(err => console.log(err));
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
                    <button type="button" className={styles.loginBtn} onClick={me}>나의정보 조회</button>
                    <button type="button" className={styles.snsBtn}>Google</button>
                    <button type="button" className={styles.snsBtn}>Naver</button>
                    <button type="button" className={styles.snsBtn}>Kakao</button>
                </form>

                <div className={styles.loginFooter}>
                    Don’t have an account? 
                    <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </section>
    );
}