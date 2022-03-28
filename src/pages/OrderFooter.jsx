import { Box, Button, Stack, Typography } from "@mui/material";
import { blueGrey, grey, lightBlue } from "@mui/material/colors";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";

import styled from "styled-components";
import { mobile } from "../responsive";

const BottomMenuContainer = styled.div`
  position: fixed;
  left: 0;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 30px;
  background-color: ${grey["A100"]};
  ${mobile({ padding: "8px" })}
`;

const BottomMenuWrapper = styled.div`
  width: 1200px;
  height: 90px;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  ${mobile({ height: "20%" })}
`;

const SectorContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: space-between;
  ${mobile({ flexDirection: "column", alignItems: "center" })}
`;

const SectorWrapper = styled.div`
  display: flex;
  width: ${(props) => (props.width ? props.width : "300px")};
`;
const OrderFooter = ({ totalPrice }) => {
  return (
    <BottomMenuContainer style={{ borderTop: `1px solid ${grey[400]}` }}>
      <BottomMenuWrapper>
        <SectorContainer>
          <SectorWrapper>
            <Box sx={{ marginX: 2 }}>
              <FontAwesomeIcon icon={solid("boxes-stacked")} size="lg" />
            </Box>
            <Stack>
              <Typography
                sx={{
                  marginLeft: 1,
                  fontSize: 15,
                  fontFamily: "Noto Sans KR",
                }}
              >
                재고:
              </Typography>
              <Typography
                sx={{
                  marginLeft: 1,
                  fontSize: 15,
                  fontFamily: "Noto Sans KR",
                  color: lightBlue[700],
                }}
              >
                구매가능
              </Typography>
            </Stack>
          </SectorWrapper>
          <SectorWrapper>
            <Box sx={{ marginX: 2 }}>
              <FontAwesomeIcon icon={solid("gift")} size="lg" />
            </Box>
            <Stack>
              <Typography
                sx={{
                  marginLeft: 1,
                  fontSize: 14,
                  fontFamily: "Noto Sans KR",
                }}
              >
                도착:
              </Typography>
              <Typography
                sx={{ marginLeft: 1, fontSize: 17, fontFamily: "Noto Sans KR" }}
              >
                2022-03-29 ~ 2022-04-07
              </Typography>
            </Stack>
          </SectorWrapper>
          <SectorWrapper style={{ justifyContent: "flex-end" }} width={"600px"}>
            <Box sx={{ marginX: 2 }}>
              <Typography
                sx={{
                  marginLeft: 1,
                  fontSize: 28,
                  fontWeight: 700,
                  fontFamily: "Noto Sans KR",
                  color: blueGrey[800],
                }}
              >
                {Number(totalPrice).toLocaleString()} 원
              </Typography>
            </Box>
            <Box sx={{ marginX: 2, display: "flex", flexDirection: "column" }}>
              <Button
                variant="contained"
                disableElevation
                size="large"
                sx={{ marginBottom: 1 }}
              >
                장바구니에 담기
              </Button>
              <Button variant="outlined" disableElevation size="large">
                견적서 요청
              </Button>
            </Box>
            <Box
              sx={{
                marginX: 2,
                marginY: 1,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <FontAwesomeIcon
                icon={regular("bookmark")}
                size="lg"
                style={{ color: lightBlue[700] }}
              />
            </Box>
          </SectorWrapper>
        </SectorContainer>
      </BottomMenuWrapper>
    </BottomMenuContainer>
  );
};

export default OrderFooter;
