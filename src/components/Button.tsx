// 안 필요할 수도

import React from 'react';

interface ButtonProps {
  text: string;
  onClick?: () => void; // 선택적
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return <button onClick={onClick}>{text}</button>;
};

export default Button;
