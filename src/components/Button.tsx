// src/components/Button.tsx
import React, { useContext } from 'react';
import { ConfigContext } from '../utils/config';

type ButtonProps = {
  label: string;
  onClick: () => void;
};

const Button: React.FC<ButtonProps> = ({ label, onClick }) => {
  const { colorPalette, buttonShape } = useContext(ConfigContext);

  const buttonClasses = `px-4 py-2 bg-color-text-primary  ${buttonShape === 'rounded' ? 'rounded' : 'square'}`;

  return (
    <button onClick={onClick} className={buttonClasses}>
      {label}
    </button>
  );
};

export default Button;
