// App.jsx
import { Outlet, useLocation } from "react-router-dom";


// 라우트 경로별로 헤더 텍스트 매핑
const headerMeta = {
  "/": { title: "Main", homeText: "Home" },
  "/courses/instructor": { title: "강사 관리", homeText: "Courses" },
  "/courses/categories": { title: "카테고리 관리", homeText: "Courses" },
  "/courses/course": { title: "강좌 관리", homeText: "Courses" },
  "/courses/paths": { title: "코스 관리", homeText: "Courses" },

  "/community/resources": { title: "자료실 관리", homeText: "Community" },
  "/community/reviews": { title: "리뷰 관리", homeText: "Community" },
  "/community/qna": { title: "QnA 관리", homeText: "Community" },
  "/community/chat": { title: "채팅 관리", homeText: "Community" },

  "/members/list": { title: "회원 목록", homeText: "Members" },
  "/members/mail": { title: "메일 발송", homeText: "Members" },

  "/orders/list": { title: "주문 내역", homeText: "Orders" },
  "/orders/refunds": { title: "취소/환불", homeText: "Orders" },

  "/accounts/banks": { title: "은행 정보", homeText: "Accounts" },
  "/accounts/accounts": { title: "계좌 정보", homeText: "Accounts" },

  "/coupons/issue": { title: "쿠폰 발행", homeText: "Coupons" },
  "/coupons/usage": { title: "사용 내역", homeText: "Coupons" },

  "/blog/categories": { title: "블로그 카테고리", homeText: "Blog" },
  "/blog/posts": { title: "게시글 관리", homeText: "Blog" },
};

export default function App() {
  const { pathname } = useLocation();
  const meta = headerMeta[pathname] ?? headerMeta["/"];

  return (    
    <Outlet />    
  );
}
