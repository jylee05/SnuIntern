import React, { useState } from "react";

const Signup = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [email, setEmail] = useState("");

  const isFormValid =
    name.trim() != "" &&
    password.trim() != "" &&
    confirmPassword.trim() != "" &&
    email.trim() != "" &&
    password === confirmPassword;

  const isPasswordSame = password === confirmPassword;

  const handleSubmit = (e: React.FormEvent) => {
    console.log({ name, password, email: `${email}@snu.ac.kr` }); // 테스트
    return;
  };

  <div>
    <h1>회원가입</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <label>이름</label>
        <br />
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <label>비밀번호</label>
        <br />
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <div>
        <label>비밀번호 확인</label>
        <br />
        <input
          type="text"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
        {/* 비밀번호와 다르면 에러 메시지 밑에 추가 */}
      </div>
      <div>
        <label>이메일</label>
        <br />
        <input
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <span>@snu.ac.kr</span>
      </div>

      <button type="submit" disabled={!isFormValid}>
        회원가입
      </button>
    </form>
  </div>;
};

export default Signup;
