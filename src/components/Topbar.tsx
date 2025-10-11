import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
// global state login import 해야함
// user type? import 해야함
// logic.ts import -> logout 처리

const Topbar = () => {
  const { user, isLogined } = useAuth(); // user type 알아야함

  return (
    <div>
      <Link to={"/"}>스누인턴</Link>
      {isLogined ? (
        <>
          <span>{user}님</span>
          <button onClick={Logout}>로그아웃</button> {/* Logout 처리 해야함 */}
        </>
      ) : (
        <>
          <Link to={"/signup"}>회원가입</Link>
          <Link to={"/login"}>로그인</Link>
        </>
      )}
    </div>
  );
};

export default Topbar;
