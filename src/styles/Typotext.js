import { blueGrey, grey, cyan, yellow, lightBlue } from "@mui/material/colors";

import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

export const Typotext = styled.span`
  font-family: ${(props) =>
    props.fontFamily ? props.fontFamily : "Noto Sans KR"};
  font-size: ${(props) => (props.size ? props.size : "14px")};
  margin-bottom: ${(props) => props.gutterBottom && "10px"};
`;
