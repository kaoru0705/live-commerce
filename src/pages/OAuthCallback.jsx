// 서버로 리다이렉트 명령을 받은 웹 브라우저는, 리액트 서버에 진입할 때 이 화면을 보게 만들 것임

import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

// 이 페이지에서 서버와의 비동기통신을 통해 accessToken 가져와서 변수에 담자 (노출되지 않기 위함)
export default function OAuthCallback() {
    

    /*----------------------------------
    비동기 방식으로, accessToken 요청하자
    ----------------------------------*/
    const [params] = useSearchParams(); // 리액트로 들어오는 파라미터 받기
    const [msg, setMsg] = useState("SNS 로그인 처리중 ...");

    useEffect(() => {
        // 임시 코드 보관
        const code = params.get("code");    // 브라우저가 전송한 임시코드 받기
        
        if(!code) {
            setMsg("임시코드가 없네요, 다시 로그인 해주세요 ");
        }

        // encodeURIComponent 코드 안 깨지게 하기 Encodes a text string as a valid component of a Uniform Resource Identifier (URI)
        fetch(`http://localhost:9993/api/auth/oauth2/exchange?code=${encodeURIComponent(code)}`, {
            method: "POST",
            credentials: "include",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            }
        })
        .then(res => {
            if(!res.ok) throw new Error("코드 교환 실패");
            return res.json();
        })
        .then(data => {
            console.log("서버로부터 받은 정보는 ", data);
            setMsg(data.accessToken);
        })
        .catch(err => {
            console.log(err);
            setMsg("SNS 로그인에 실패했습니다.");
        });

    }, [params]);

    return (
        <div>
            <h3>{msg}</h3>
        </div>
    );
}