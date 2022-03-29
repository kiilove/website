import { Box, Button, Stack, Typography } from "@mui/material";
import { blue, blueGrey, grey, lightBlue } from "@mui/material/colors";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";

import styled from "styled-components";
import { mobile } from "../responsive";
import { Typotext } from "../styles/Typotext";

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
  ${mobile({ padding: "0px" })}
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
  justify-content: space-evenly;
  ${mobile({
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  })}
`;

const SectorWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  width: ${(props) => (props.width ? props.width : "300px")};
  ${mobile({
    justifyContent: "flex-start",
    alignItems: "center",
    margin: "5px 0px",
  })}
`;

const ActionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  ${mobile({ flexDirection: "row", fontSize: "12px" })}
`;

const SelectButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px !important;
  height: 40px;
  border-radius: 10px;
  font-family: Noto Sans KR;
  font-size: 14px;
  background-color: ${lightBlue[500]};

  color: white;
  transition: all ease-in-out 0.35s;
  cursor: pointer;
  margin: 5px;
  border: ${`1px solid ${lightBlue[500]}`};
  &:hover {
    background-color: ${lightBlue[700]};
  }
`;

const SelectButton2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 150px !important;
  height: 40px;
  border-radius: 10px;
  font-family: Noto Sans KR;
  font-size: 14px;
  background-color: "white";
  color: ${lightBlue[700]};
  transition: all ease-in-out 0.35s;
  cursor: pointer;
  margin: 5px;
  border: ${`1px solid ${lightBlue[500]}`};

  &:hover {
    background-color: ${grey[200]};
  }
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
              <Typotext style={{ color: blueGrey[800] }}>재고:</Typotext>
              <Typotext style={{ color: lightBlue[700] }}>구매가능</Typotext>
            </Stack>
          </SectorWrapper>
          <SectorWrapper>
            <Box sx={{ marginX: 2 }}>
              <FontAwesomeIcon icon={solid("gift")} size="lg" />
            </Box>
            <Stack>
              <Typotext style={{ color: blueGrey[800] }}>도착:</Typotext>
              <Typotext style={{ color: blueGrey[800] }}>
                2022-03-29 ~ 2022-04-07
              </Typotext>
            </Stack>
          </SectorWrapper>
          <SectorWrapper style={{ justifyContent: "center" }}>
            <Typotext style={{ color: blueGrey[800] }} size="21px">
              {Number(totalPrice).toLocaleString()} 원
            </Typotext>
          </SectorWrapper>
          <SectorWrapper>
            <ActionWrapper>
              <SelectButton>장바구니에 담기</SelectButton>
              <SelectButton2>견적서 요청</SelectButton2>
            </ActionWrapper>
            <Box
              sx={{
                marginX: 2,
                marginY: 1,
                display: "flex",
                flexDirection: "column",
              }}
            ></Box>
          </SectorWrapper>
        </SectorContainer>
      </BottomMenuWrapper>
    </BottomMenuContainer>
  );
};

export default OrderFooter;
