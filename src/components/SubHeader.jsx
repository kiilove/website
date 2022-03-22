import { blueGrey, grey } from "@mui/material/colors";
import { Stack, Typography } from "@mui/material";
import React from "react";
import styled from "styled-components";
import { Container } from "./Header";

const SubHeader = () => {
  return (
    <Container>
      <Stack width={"100%"} justifyContent={"center"} alignItems={"center"}>
        <Typography variant="subtitle1" color={grey[700]} fontWeight={"bold"}>
          기업용 최적화된 업무 환경 구성을 도와드립니다.
        </Typography>
      </Stack>
    </Container>
  );
};

export default SubHeader;
