import { Collapse, InputBase, TextField, Typography } from "@mui/material";
import { blueGrey, grey, lightBlue } from "@mui/material/colors";
import React, { useState } from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { solid, regular } from "@fortawesome/fontawesome-svg-core/import.macro";
import KeyboardArrowDownSharpIcon from "@mui/icons-material/KeyboardArrowDownSharp";
import KeyboardArrowUpSharpIcon from "@mui/icons-material/KeyboardArrowUpSharp";
import { Box } from "@mui/system";
import { mobile } from "../../responsive";
import { Typotext } from "../../styles/Typotext";

const Container = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  box-sizing: border-box;
  width: 100%;
  height: auto;
  padding: 10px;
  justify-content: flex-start;
  align-items: flex-start;
  ${mobile({
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  })}
`;

const ImgWrapper = styled.div`
  display: flex;
  width: 250px;
  height: 100%;
  justify-content: flex-start;
  align-items: flex-start;
  ${mobile({ justifyContent: "center", alignItems: "center" })}
`;

const ImgBox = styled.img`
  ${mobile({ width: "50%" })}
`;

const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
`;

const InfoTitleWrapper = styled.div`
  display: flex;

  width: 100%;
  justify-content: center;
  align-items: flex-start;
  ${mobile({ flexDirection: "column", alignItems: "center" })}
`;

const InfoTitleRow = styled.div`
  display: flex;
  width: 100%;
  background-color: red;
`;
const InfoTitleItem = styled.div`
  display: flex;
  flex: ${(props) => props.flex};
  justify-content: center;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`;

const ExpanedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  box-sizing: border-box;
  margin-left: 20px;
`;

const ExpandIcon = styled.div`
  cursor: pointer;
`;
const InputWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 29px;
  color: ${grey[500]};
  border: 1px solid ${grey[300]};
  border-radius: 2px;
`;
const IconButton = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 12px;
  height: 12px;
  color: ${grey[500]};
  border: 1px solid ${grey[300]};
  border-radius: 2px;
  cursor: pointer;
  &:hover {
    color: ${lightBlue[700]};
    border: 1px solid ${lightBlue[700]};
  }
`;

const CartThumbItem = () => {
  const [expaned, setExpaned] = useState(false);
  return (
    <Container>
      <Wrapper>
        <ImgWrapper>
          <ImgBox src="/img/product/pc/samsung/db400_2022.png" width="180px" />
        </ImgWrapper>
        <InfoWrapper>
          <InfoTitleWrapper>
            <InfoTitleRow>
              <InfoTitleItem flex="4">
                <Typotext
                  size="25px"
                  style={{ color: blueGrey[800], fontWeight: 500 }}
                >
                  삼성 DB400 Tower
                </Typotext>
              </InfoTitleItem>
            </InfoTitleRow>
            <InfoTitleRow>
              <InfoTitleItem>
                <Typotext
                  size="15px"
                  style={{ color: lightBlue[700], fontWeight: 300 }}
                  onClick={() => setExpaned(!expaned)}
                >
                  <ExpandIcon>
                    제품 정보 자세히보기
                    {expaned ? (
                      <FontAwesomeIcon
                        icon={solid("angle-up")}
                        size="lg"
                        style={{ marginLeft: "10px" }}
                      />
                    ) : (
                      <FontAwesomeIcon
                        icon={solid("angle-down")}
                        size="lg"
                        style={{ marginLeft: "10px" }}
                      />
                    )}
                  </ExpandIcon>
                </Typotext>
              </InfoTitleItem>
            </InfoTitleRow>
            <InfoTitleRow>
              <InfoTitleItem>
                <Collapse in={expaned} timeout="auto" unmountOnExit>
                  <ExpanedWrapper>
                    <Typography variant="body" sx={{ marginTop: 1 }}>
                      Intel Core i5 10400
                    </Typography>
                    <Typography variant="body" sx={{ marginTop: 1 }}>
                      DDR4 8G 메모리
                    </Typography>
                    <Typography variant="body" sx={{ marginTop: 1 }}>
                      256G SSD(NVMe) 저장공간
                    </Typography>
                    <Typography variant="body" sx={{ marginTop: 1 }}>
                      1TB HDD(SATA) 추가 저장공간
                    </Typography>
                    <Typography variant="body" sx={{ marginTop: 1 }}>
                      Intel Graphic GPU
                    </Typography>
                    <Typography variant="body" sx={{ marginTop: 1 }}>
                      DVD Super Multi Drive
                    </Typography>
                    <Typography variant="body" sx={{ marginTop: 1 }}>
                      108키 한영 키보드 / USB 마우스
                    </Typography>
                    <Typography variant="body" sx={{ marginTop: 1 }}>
                      USB 2.0 포트 2개, USB 3.0 포트 4개
                    </Typography>
                  </ExpanedWrapper>
                </Collapse>
              </InfoTitleItem>
            </InfoTitleRow>

            <InfoTitleItem flex="1" style={{ flexDirection: "row" }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  height: "100%",
                }}
              >
                <InputWrapper>
                  <InputBase
                    inputProps={{ maxLength: 3 }}
                    sx={{ width: 30 }}
                    variant="standard"
                  />
                </InputWrapper>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "flex-end",
                  alignItems: "flex-end",
                  height: "100%",
                  ml: 1,
                }}
              >
                <IconButton style={{ marginBottom: "3px" }}>
                  <KeyboardArrowUpSharpIcon sx={{ fontSize: 12 }} />
                </IconButton>
                <IconButton>
                  <KeyboardArrowDownSharpIcon sx={{ fontSize: 12 }} />
                </IconButton>
              </Box>
            </InfoTitleItem>
            <InfoTitleItem flex="1" style={{ alignItems: "flex-end" }}>
              <Typotext
                size="25px"
                style={{
                  fontWeight: 500,
                  color: blueGrey[800],
                }}
              >
                1,350,000원
              </Typotext>
              <Typotext
                size="15px"
                style={{ color: lightBlue[700], fontWeight: 300 }}
                onClick={() => setExpaned(!expaned)}
              >
                삭제
              </Typotext>
            </InfoTitleItem>
          </InfoTitleWrapper>
        </InfoWrapper>
      </Wrapper>
    </Container>
  );
};

export default CartThumbItem;
