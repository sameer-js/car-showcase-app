'use client';

import { CustomButtonProps } from '@/types';
import Image from 'next/image';

const CustomButton = ({
  title,
  btnType,
  containerStyles,
  handleClick,
}: CustomButtonProps) => {
  return (
    <button
      className={`custom-btn ${containerStyles}`}
      disabled={false}
      type={btnType || 'button'}
      onClick={handleClick}
    >
      <span className={`flex-1 `}>{title}</span>
    </button>
  );
};

export default CustomButton;
