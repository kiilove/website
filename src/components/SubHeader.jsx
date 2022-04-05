import { blueGrey, grey } from "@mui/material/colors";
import { Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import styled from "styled-components";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  ${mobile({ display: "none" })}
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const SubHeader = ({ type }) => {
  const [headerContent, setHeaderContent] = useState("");
  switch (type) {
    case "index":
      const content = 0;
    default:
  }
  return (
    <Container>
      <Wrapper></Wrapper>
    </Container>
  );
};

export default SubHeader;
