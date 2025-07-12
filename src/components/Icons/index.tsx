import React from 'react';
export interface IIcon {
  width?: number;
  height?: number;
}

export const ListIcon: React.FC<IIcon> = ({ width = 18, height = 12 }) => (
  <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M4 6H14M1.5 1H16.5M6.5 11H11.5"
      stroke="currentColor"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CheckIcon: React.FC<IIcon> = ({ width = 24, height = 24 }) => (
  <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
    <g id="Content">
      <path
        id="Tick"
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.096 7.39016L9.93602 14.3002L8.03602 12.2702C7.68602 11.9402 7.13602 11.9202 6.73602 12.2002C6.34602 12.4902 6.23602 13.0002 6.47602 13.4102L8.72602 17.0702C8.94602 17.4102 9.32601 17.6202 9.75601 17.6202C10.166 17.6202 10.556 17.4102 10.776 17.0702C11.136 16.6002 18.006 8.41016 18.006 8.41016C18.906 7.49016 17.816 6.68016 17.096 7.38016V7.39016Z"
        fill="currentColor"
      />
    </g>
  </svg>
);

export const MagnifyingGlassIcon: React.FC<IIcon> = ({ width = 20, height = 20 }) => (
  <svg width={height} height={width} viewBox="0 0 20 20" fill="white" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M17.5 17.5L14.5834 14.5833M16.6667 9.58333C16.6667 13.4954 13.4954 16.6667 9.58333 16.6667C5.67132 16.6667 2.5 13.4954 2.5 9.58333C2.5 5.67132 5.67132 2.5 9.58333 2.5C13.4954 2.5 16.6667 5.67132 16.6667 9.58333Z"
      stroke="currentColor"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LeftArrowIcon: React.FC<IIcon> = ({ width = 16, height = 16 }) => (
  <svg
    style={{ transform: 'scale(-1,1)' }}
    width={width}
    height={height}
    viewBox="0 0 14 14"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.1665 7.00008H12.8332M12.8332 7.00008L6.99984 1.16675M12.8332 7.00008L6.99984 12.8334"
      stroke="currentColor"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const UpVector: React.FC<IIcon> = ({ width = 12, height = 8 }) => (
  <svg width={width} height={height} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11 6.5L6 1.5L1 6.5"
      stroke="currentColor"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const BlogHomeIcon: React.FC<IIcon> = ({ width = 16, height = 16 }) => (
  <svg width={width} height={height} viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M5.66667 13.406H12.3333M8.18141 1.54271L2.52949 5.93865C2.15168 6.2325 1.96278 6.37943 1.82669 6.56343C1.70614 6.72642 1.61633 6.91003 1.56169 7.10526C1.5 7.32565 1.5 7.56496 1.5 8.04359V14.0727C1.5 15.0061 1.5 15.4728 1.68166 15.8294C1.84144 16.143 2.09641 16.3979 2.41002 16.5577C2.76654 16.7394 3.23325 16.7394 4.16667 16.7394H13.8333C14.7668 16.7394 15.2335 16.7394 15.59 16.5577C15.9036 16.3979 16.1586 16.143 16.3183 15.8294C16.5 15.4728 16.5 15.0061 16.5 14.0727V8.04359C16.5 7.56496 16.5 7.32565 16.4383 7.10526C16.3837 6.91003 16.2939 6.72642 16.1733 6.56343C16.0372 6.37943 15.8483 6.2325 15.4705 5.93865L9.81859 1.54271C9.52582 1.315 9.37943 1.20115 9.21779 1.15738C9.07516 1.11876 8.92484 1.11876 8.78221 1.15738C8.62057 1.20115 8.47418 1.315 8.18141 1.54271Z"
      stroke="currentColor"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const DownVector: React.FC<IIcon> = ({ width = 12, height = 8 }) => (
  <svg width={width} height={height} viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1 1.5L6 6.5L11 1.5"
      stroke="currentColor"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const RightVectorIcon: React.FC<IIcon> = ({ width = 8, height = 12 }) => (
  <svg width={width} height={height} viewBox="0 0 8 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M1.5 11L6.5 6L1.5 1"
      stroke="currentColor"
      strokeWidth="1.67"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const LeftVectorIcon: React.FC<IIcon> = ({ width = 24, height = 24 }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g>
      <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </g>
  </svg>
);

export const GoogleIcon: React.FC<IIcon> = ({ width = 24, height = 24 }) => (
  <svg width={width} height={height} viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1036_6343)">
      <path
        d="M24.2663 12.2763C24.2663 11.4605 24.2001 10.6404 24.059 9.83789H12.7402V14.4589H19.222C18.953 15.9492 18.0888 17.2676 16.8233 18.1054V21.1037H20.6903C22.9611 19.0137 24.2663 15.9272 24.2663 12.2763Z"
        fill="#4285F4"
      />
      <path
        d="M12.74 24.0013C15.9764 24.0013 18.7058 22.9387 20.6944 21.1044L16.8274 18.106C15.7516 18.838 14.3626 19.2525 12.7444 19.2525C9.61376 19.2525 6.95934 17.1404 6.00693 14.3008H2.01648V17.3917C4.05359 21.4439 8.20278 24.0013 12.74 24.0013Z"
        fill="#34A853"
      />
      <path
        d="M6.00277 14.3007C5.50011 12.8103 5.50011 11.1965 6.00277 9.70618V6.61523H2.01674C0.314734 10.006 0.314734 14.0009 2.01674 17.3916L6.00277 14.3007Z"
        fill="#FBBC04"
      />
      <path
        d="M12.74 4.74966C14.4508 4.7232 16.1043 5.36697 17.3433 6.54867L20.7694 3.12262C18.6 1.0855 15.7207 -0.034466 12.74 0.000808666C8.20277 0.000808666 4.05359 2.55822 2.01648 6.61481L6.00252 9.70575C6.95052 6.86173 9.60935 4.74966 12.74 4.74966Z"
        fill="#EA4335"
      />
    </g>
    <defs>
      <clipPath id="clip0_1036_6343">
        <rect width="24" height="24" fill="white" transform="translate(0.5)" />
      </clipPath>
    </defs>
  </svg>
);

export const FacebookIcon: React.FC<IIcon> = ({ width = 24, height = 24 }) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_1070_10914)">
      <path
        d="M24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 17.9895 4.3882 22.954 10.125 23.8542V15.4688H7.07812V12H10.125V9.35625C10.125 6.34875 11.9166 4.6875 14.6576 4.6875C15.9701 4.6875 17.3438 4.92188 17.3438 4.92188V7.875H15.8306C14.34 7.875 13.875 8.80008 13.875 9.75V12H17.2031L16.6711 15.4688H13.875V23.8542C19.6118 22.954 24 17.9895 24 12Z"
        fill="#1877F2"
      />
      <path
        d="M16.6711 15.4688L17.2031 12H13.875V9.75C13.875 8.80102 14.34 7.875 15.8306 7.875H17.3438V4.92188C17.3438 4.92188 15.9705 4.6875 14.6576 4.6875C11.9166 4.6875 10.125 6.34875 10.125 9.35625V12H7.07812V15.4688H10.125V23.8542C11.3674 24.0486 12.6326 24.0486 13.875 23.8542V15.4688H16.6711Z"
        fill="white"
      />
    </g>
    <defs>
      <clipPath id="clip0_1070_10914">
        <rect width="24" height="24" fill="white" />
      </clipPath>
    </defs>
  </svg>
);

export const CheckCircleIcon: React.FC<IIcon> = ({ width = 16.67, height = 16.67 }) => (
  <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M6.25008 9.99935L8.75008 12.4993L13.7501 7.49935M18.3334 9.99935C18.3334 14.6017 14.6025 18.3327 10.0001 18.3327C5.39771 18.3327 1.66675 14.6017 1.66675 9.99935C1.66675 5.39698 5.39771 1.66602 10.0001 1.66602C14.6025 1.66602 18.3334 5.39698 18.3334 9.99935Z"
      stroke="#079455"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const CloseIcon: React.FC<IIcon> = ({ width = 10, height = 10 }) => (
  <svg width={width} height={height} viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M11 1L1 11M1 1L11 11"
      stroke="currentColor"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export const StarIcon: React.FC<IIcon> = ({ width = 20, height = 20 }) => (
  <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <g clipPath="url(#clip0_15075_1544)">
      <path
        d="M9.53834 1.60996C9.70914 1.19932 10.2909 1.19932 10.4617 1.60996L12.5278 6.57744C12.5998 6.75056 12.7626 6.86885 12.9495 6.88383L18.3123 7.31376C18.7556 7.3493 18.9354 7.90256 18.5976 8.19189L14.5117 11.6919C14.3693 11.8139 14.3071 12.0053 14.3506 12.1876L15.5989 17.4208C15.7021 17.8534 15.2315 18.1954 14.8519 17.9635L10.2606 15.1592C10.1006 15.0615 9.89938 15.0615 9.73937 15.1592L5.14806 17.9635C4.76851 18.1954 4.29788 17.8534 4.40108 17.4208L5.64939 12.1876C5.69289 12.0053 5.6307 11.8139 5.48831 11.6919L1.40241 8.19189C1.06464 7.90256 1.24441 7.3493 1.68773 7.31376L7.05054 6.88383C7.23744 6.86885 7.40024 6.75056 7.47225 6.57744L9.53834 1.60996Z"
        fill="currentColor"
      />
    </g>
    <defs>
      <clipPath id="clip0_15075_1544">
        <rect width={width} height={height} fill="white" />
      </clipPath>
    </defs>
  </svg>
);
export const ChevronLeftIcon: React.FC<IIcon> = ({ width = 20, height = 20 }) => (
  <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M12.5 15L7.5 10L12.5 5"
      stroke="#344054"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
export const ChevronRightIcon: React.FC<IIcon> = ({ width = 20, height = 20 }) => (
  <svg width={width} height={height} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M7.5 15L12.5 10L7.5 5"
      stroke="#344054"
      strokeWidth="1.66667"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);
