import { lightBlue, grey, blueGrey } from "@mui/material/colors";
import React from "react";
import styled from "styled-components";
import { Typotext } from "../styles/Typotext";

const AssetContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const AssetWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  background-color: ${grey["A100"]};
`;
const AssetBox = () => {
  <>
    <AssetContainer>
      <AssetWrapper>test</AssetWrapper>
    </AssetContainer>
    ;
  </>;
};

export default AssetBox;
