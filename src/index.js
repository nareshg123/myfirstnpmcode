import React from 'react';

interface ButtonProps {
  label: string;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
 // "build":"tsc"
    return (
    <button onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
