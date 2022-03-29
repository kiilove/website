import React, { useEffect } from "react";
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
import ProductMiniDetail from "../components/ProductMiniDetail";
import { mobile } from "../responsive";
import { Typotext } from "../styles/Typotext";
import { ModelSpec } from "../data";

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
  
`;

const TitleContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  padding: 10px;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-top: 10px;
  ${mobile({ justifyContent: "center" })}
`;
const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container sx={{ fontFamily: "Noto Sans KR" }}>
      <Grid container>
        <Grid item xs={12}>
          <TitleWrapper>
            <TitleContainer>
              <Typotext
                size="28px"
                gutterBottom
                style={{
                  fontWeight: 700,
                  color: blueGrey[600],
                }}
              >
                당신에게 맞는 {ModelSpec[0].bigCatecory} 모델 선택을
                도와드릴께요.
              </Typotext>

              <Typotext
                size="28px"
                gutterBottom
                style={{
                  fontWeight: 700,
                  color: blueGrey[800],
                }}
              >
                {ModelSpec[0].modelName}
              </Typotext>
              <Typotext
                size="20px"
                gutterBottom
                style={{
                  fontWeight: 500,
                  fontFamily: "Noto Sans KR",
                  color: blueGrey[900],
                  textAlign: "center",
                  marginTop: "30px",
                }}
              >
                혹시 선택이 어렵다면?
              </Typotext>
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
                전화주세요!
              </Typography>
            </TitleContainer>
          </TitleWrapper>
        </Grid>
        <Grid item xs={12}>
          <MiniDetailWrapper>
            <MiniDetailContainer>
              <ProductMiniDetail category={"gram_15_22H1"} />
            </MiniDetailContainer>
          </MiniDetailWrapper>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Product;
