import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path d="M17 9H2V6.5H17V4L22 7.75L17 11.5V9Z" fill="#031197"/>
      <path d="M6.995 18.5H22V16H6.995V13.5L2 17.25L6.995 21V18.5Z" fill="#031197"/>
    </Svg>
  );
};

export default Icon;
