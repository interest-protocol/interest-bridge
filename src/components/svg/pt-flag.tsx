import { FC } from 'react';

import { SVGProps } from './svg.types';

const PT: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    {...props}
    style={{ maxWidth: maxWidth, maxHeight: maxHeight, borderRadius: '50%' }}
    viewBox="0 0 24 24"
  >
    <g clipPath="url(#clip0_4632_122054)">
      <rect width="24" height="24" rx="12" fill="#F93939" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M-1.84613 0H8.7273V24H-1.84613V0Z"
        fill="#249F58"
      />
      <path
        d="M9.23077 16C11.8526 16 13.978 13.851 13.978 11.2C13.978 8.54906 11.8526 6.40002 9.23077 6.40002C6.60894 6.40002 4.48352 8.54906 4.48352 11.2C4.48352 13.851 6.60894 16 9.23077 16Z"
        fill="#FFDA2C"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.3957 12.8001V8.00006H6.06604V12.8001C6.06604 13.6833 7.4823 14.4001 9.23088 14.4001C10.9794 14.4001 12.3957 13.6833 12.3957 12.8001Z"
        fill="#F93939"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.64832 9.59991H10.8132V12.7999H7.64832V9.59991Z"
        fill="white"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M7.64832 9.59991H9.23073V11.1999H7.64832V9.59991ZM9.23073 11.1999H10.8132V12.7999H9.23073V11.1999Z"
        fill="#1A47B8"
      />
    </g>
    <defs>
      <clipPath id="clip0_4632_122054">
        <rect width="24" height="24" rx="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default PT;
