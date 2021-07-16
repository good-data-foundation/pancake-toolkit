import React from "react";
import Svg from "../Svg";
import { SvgProps } from "../types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <path fill-rule="evenodd" clip-rule="evenodd" d="M16 7.24999C16.4142 7.24999 16.75 7.58578 16.75 7.99999L16.75 16C16.75 16.4142 16.4142 16.75 16 16.75C15.5858 16.75 15.25 16.4142 15.25 16V9.81065L8.53035 16.5303C8.23746 16.8232 7.76259 16.8232 7.46969 16.5303C7.1768 16.2374 7.1768 15.7625 7.46969 15.4697L14.1893 8.74999L8 8.74999C7.58579 8.74999 7.25 8.4142 7.25 7.99999C7.25 7.58577 7.58579 7.24999 8 7.24999L16 7.24999Z"/>
    </Svg>
  );
};

export default Icon;
