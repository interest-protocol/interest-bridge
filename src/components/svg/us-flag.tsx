import { FC } from 'react';

import { SVGProps } from './svg.types';

const EN: FC<SVGProps> = ({ maxHeight, maxWidth, ...props }) => (
  <svg
    style={{ maxWidth: maxWidth, maxHeight: maxHeight, borderRadius: '50%' }}
    viewBox="0 0 24 24"
    {...props}
  >
    <g clipPath="url(#clip0_4632_122046)">
      <rect width="24" height="24" rx="12" fill="white" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 0H10.2857V11.2H0V0Z"
        fill="#1A47B8"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.2857 0V1.6H24V0H10.2857ZM10.2857 3.2V4.8H24V3.2H10.2857ZM10.2857 6.4V8H24V6.4H10.2857ZM10.2857 9.6V11.2H24V9.6H10.2857ZM0 12.8V14.4H24V12.8H0ZM0 16V17.6H24V16H0ZM0 19.2V20.8H24V19.2H0ZM0 22.4V24H24V22.4H0Z"
        fill="#F93939"
      />
    </g>
    <defs>
      <clipPath id="clip0_4632_122046">
        <rect width="24" height="24" rx="12" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export default EN;
