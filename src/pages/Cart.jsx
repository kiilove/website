import React from "react";
import styled from "styled-components";
import { useEffect, useState } from "react";
import { debounce, Divider, Grid, Stack, Typography } from "@mui/material";
import { blueGrey, grey, lightBlue } from "@mui/material/colors";
import StickBox from "react-sticky-box";
import { OptionData, OptionItemData, RadarData } from "../data";
import OrderFooter from "./OrderFooter";
import { Box } from "@mui/system";
import CartThumbItem from "../components/Cart/CartThumbItem";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  background-color: #fcf9f9;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
  max-width: 120px;
`;

const TitleWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  margin-top: 30px;
  box-sizing: border-box;
`;

const TitleRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ItemWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  box-sizing: border-box;
`;

const ItemContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
  flex-direction: column;
`;

const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 30px;
  box-sizing: border-box;
`;

const PriceWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 1200px;
`;

const PriceBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex: ${(props) => props.flex};
`;

const PriceRow = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  margin: 8px 0px;
`;

const PriceItem = styled.div`
  display: flex;
  flex: 1;
  flex: ${(props) => props.flex};
`;

const CheckoutButton = styled.div`
  display: flex;
  width: 70%;
  height: 50px;
  margin: 20px 0px;
  border-radius: 10px;
  background-color: ${lightBlue[700]};
  color: white;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: ${lightBlue[800]};
  }
`;

const Cart = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Container>
      <Grid container>
        <Grid item xs={12} justifyContent={"center"}>
          <TitleWrapper>
            <Stack spacing={1} mb={5}>
              <TitleRow>
                <Typography
                  variant="h4"
                  sx={{
                    fontWeight: 700,
                    fontFamily: "Noto Sans KR",
                    color: blueGrey[900],
                  }}
                >
                  장바구니에 2개 아이템을 모아뒀습니다.
                </Typography>
              </TitleRow>
              <TitleRow>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: 500,
                    fontFamily: "Noto Sans KR",
                    color: blueGrey[600],
                  }}
                >
                  결제 예정 금액은 2,980,000원 입니다.
                </Typography>
              </TitleRow>
              <TitleRow>
                <CheckoutButton style={{ height: "40px" }}>
                  <Typography
                    sx={{
                      fontSize: 20,
                      fontFamily: "Noto Sans KR",
                      fontWeight: 500,
                      letterSpacing: 10,
                    }}
                  >
                    결제
                  </Typography>
                </CheckoutButton>
              </TitleRow>
            </Stack>
          </TitleWrapper>
        </Grid>
        <Grid item xs={12}>
          <ItemWrapper>
            <ItemContainer>
              <div style={{ width: "100%", margin: "25px 0px" }}>
                <Divider />
              </div>
              <Stack width={"100%"}>
                <div style={{ width: "100%", margin: "15px 0px" }}>
                  <CartThumbItem />
                </div>
              </Stack>
              <div style={{ width: "100%", margin: "25px 0px" }}>
                <Divider />
              </div>
              <Stack width={"100%"}>
                <div style={{ width: "100%", margin: "15px 0px" }}>
                  <CartThumbItem />
                </div>
              </Stack>
              <div style={{ width: "100%", margin: "25px 0px" }}>
                <Divider />
              </div>
            </ItemContainer>
          </ItemWrapper>
        </Grid>
        <Grid item xs={12}>
          <PriceContainer>
            <PriceWrapper>
              <PriceBox flex={1}></PriceBox>
              <PriceBox flex={4}>
                <PriceRow>
                  <PriceItem>
                    <Typography
                      variant="body"
                      sx={{ fontSize: 17, fontFamily: "Noto Sans KR" }}
                    >
                      소계
                    </Typography>
                  </PriceItem>
                  <PriceItem style={{ justifyContent: "flex-end" }}>
                    <Typography
                      variant="body"
                      sx={{ fontSize: 17, fontFamily: "Noto Sans KR" }}
                    >
                      2,985,000원
                    </Typography>
                  </PriceItem>
                </PriceRow>
                <PriceRow>
                  <PriceItem>
                    <Typography
                      variant="body"
                      sx={{ fontSize: 17, fontFamily: "Noto Sans KR" }}
                    >
                      배송
                    </Typography>
                  </PriceItem>
                  <PriceItem style={{ justifyContent: "flex-end" }}>
                    <Typography
                      variant="body"
                      sx={{ fontSize: 17, fontFamily: "Noto Sans KR" }}
                    >
                      무료
                    </Typography>
                  </PriceItem>
                </PriceRow>
                <PriceRow>
                  <div style={{ width: "100%" }}>
                    <Divider />
                  </div>
                </PriceRow>
                <PriceRow>
                  <PriceItem>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 500,
                        fontFamily: "Noto Sans KR",
                        color: blueGrey[900],
                      }}
                    >
                      총계
                    </Typography>
                  </PriceItem>
                  <PriceItem style={{ justifyContent: "flex-end" }}>
                    <Typography
                      variant="h5"
                      sx={{
                        fontWeight: 500,
                        fontFamily: "Noto Sans KR",
                        color: blueGrey[900],
                      }}
                    >
                      2,985,000원
                    </Typography>
                  </PriceItem>
                </PriceRow>
                <PriceRow>
                  <PriceItem></PriceItem>
                  <PriceItem style={{ justifyContent: "flex-end" }}>
                    <CheckoutButton>
                      <Typography
                        sx={{
                          fontSize: 21,
                          fontFamily: "Noto Sans KR",
                          fontWeight: 700,
                          letterSpacing: 10,
                        }}
                      >
                        결제
                      </Typography>
                    </CheckoutButton>
                  </PriceItem>
                </PriceRow>
              </PriceBox>
            </PriceWrapper>
          </PriceContainer>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Cart;
