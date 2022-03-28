import React from "react";
import {
  blueGrey,
  grey,
  orange,
  deepOrange,
  yellow,
  lightGreen,
  cyan,
  lightBlue,
} from "@mui/material/colors";
import styled from "styled-components";
import { Box, Grid, Stack, Typography } from "@mui/material";
import ProductMiniDetail from "./ProductMiniDetail";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100% auto;
  flex-direction: column;
  background-color: white;
  margin-bottom: 30px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;
const MiniDetailWrapper = styled.div`
  width: 100%;
  box-sizing: border-box;

  padding: 30px 150px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  margin-top: 10px;
  ${mobile({
    marginRight: "0px",
    flexDirection: "column",
  })}
`;
const MiniDetailContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  box-sizing: border-box;
  ${mobile({
    marginBottom: "30px",
  })}
`;
const Product = () => {
  return (
    <Container sx={{ fontFamily: "Noto Sans KR" }}>
      <Grid container>
        <Grid item xs={12}>
          <TitleWrapper>
            <Box
              sx={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                flexDirection: "column",
                width: "100%",
                marginTop: 1,
              }}
            >
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontFamily: "Noto Sans KR",
                  color: blueGrey[700],
                  textAlign: "center",
                }}
              >
                당신에게 맞는 삼성 데스크탑 타워형
              </Typography>
              <Typography
                variant="h4"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontFamily: "Noto Sans KR",
                  color: blueGrey[900],
                  textAlign: "center",
                }}
              >
                모델을 선택해볼까요?
              </Typography>
              <Typography
                variant="h5"
                gutterBottom
                sx={{
                  fontWeight: 700,
                  fontFamily: "Noto Sans KR",
                  color: blueGrey[900],
                  textAlign: "center",
                  marginTop: 5,
                }}
              >
                삼성 DB400 Tower
              </Typography>
              <Typography
                variant="body"
                gutterBottom
                sx={{
                  fontWeight: 500,
                  fontFamily: "Noto Sans KR",
                  color: blueGrey[900],
                  textAlign: "center",
                  marginTop: 3,
                }}
              >
                삼성 데스크탑 구입과 관련한 점이 있으신가요?
              </Typography>
              <Typography
                variant="body"
                gutterBottom
                sx={{
                  fontWeight: 400,
                  fontFamily: "Noto Sans KR",
                  color: lightBlue[700],
                  textAlign: "center",
                }}
              >
                상담예약하세요.
              </Typography>
            </Box>
          </TitleWrapper>
        </Grid>
        <Grid item xs={12}>
          <MiniDetailWrapper>
            <MiniDetailContainer>
              <ProductMiniDetail imgUrl="/img/product/pc/samsung/db400_2022.png" />
            </MiniDetailContainer>
            <MiniDetailContainer>
              <ProductMiniDetail imgUrl="/img/product/pc/samsung/db400_2022.png" />
            </MiniDetailContainer>
            <MiniDetailContainer>
              <ProductMiniDetail imgUrl="/img/product/pc/samsung/db400_2022.png" />
            </MiniDetailContainer>
          </MiniDetailWrapper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Product;
