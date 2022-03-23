import { Divider, Stack, Typography } from "@mui/material";
import { blueGrey, grey, lightBlue } from "@mui/material/colors";
import React from "react";
import styled from "styled-components";
const Container = styled.div`
  display: flex;
  background-color: ${grey[100]};

  justify-content: center;
  align-items: center;
  width: 100%;
  font-family: "Noto Sans KR";
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  max-width: 1000px;
  height: 100%;
  margin: 30px 0px;
`;
const Footer = () => {
  return (
    <Container>
      <Wrapper>
        <Typography sx={{ fontSize: 13, color: grey[700] }}>
          사업자등록번호: 854-16-00126
        </Typography>
        <Typography sx={{ fontSize: 13, color: grey[700] }}>
          통신판매신고번호: 854-16-00126
        </Typography>
        <Typography sx={{ fontSize: 13, color: grey[700] }}>
          대표: 김진배
        </Typography>
        <Typography sx={{ fontSize: 13, color: grey[700] }}>
          주소: 경기도 안양시 동안구 엘에스로 142(호계동, 금정역SKV1센터) 803호
        </Typography>
        <Typography sx={{ fontSize: 13, color: grey[700] }}>
          대표번호: 070-7555-3695 | FAX: 031-454-3695
        </Typography>
        <Typography sx={{ fontSize: 13, color: grey[700] }}>
          1GB = 10억 바이트, 1TB = 1조 바이트 입니다. 실제 포맷된 용량은 더
          적습니다.
        </Typography>
        <Stack width={"100%"} sx={{ marginTop: 1, marginBottom: 1 }}>
          <Divider />
        </Stack>
        <Typography sx={{ fontSize: 13, color: grey[700] }}>
          Copyright © 2022 제이앤코어(jncore). 모든 권리 보유.
        </Typography>
      </Wrapper>
    </Container>
  );
};

export default Footer;
