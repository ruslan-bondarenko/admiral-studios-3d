import React, { FC } from "react";

type Props = {
  classNames?: string;
};

const StarEmptyIcon: FC<Props> = ({ classNames }) => {
  return (
    <svg
      className={classNames}
      viewBox="0 0 16 17"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.36875 15.3604L4.5875 10.0916L0.5 6.54785L5.9 6.0791L8 1.11035L10.1 6.0791L15.5 6.54785L11.4125 10.0916L12.6312 15.3604L8 12.5666L3.36875 15.3604Z"
        fill="#E6E7E8"
      />
      <path
        d="M3.36875 15.3604L4.5875 10.0916L0.5 6.54785L5.9 6.0791L8 1.11035V12.5666L3.36875 15.3604Z"
        fill="none"
      />
    </svg>
  );
};

export default StarEmptyIcon;
