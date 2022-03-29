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
  box-sizing: border-box;

  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: auto;
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

const TextWrapper = styled.div`
  display: flex;
  width: 100%;
  ${mobile({ flexDirection: "column" })}
`;

const InfoContainer = styled.div`
  display: flex;
  flex: 4;
  flex-direction: column;
`;

const InfoRow = styled.div`
  display: flex;
  ${mobile({ flexDirection: "column", margin: "10px 0px" })}
`;

const ModelNameWrapper = styled.div`
  display: flex;
  flex: 4;
  align-items: center;
  justify-content: flex-start;
  ${mobile({ flex: 1, alignItems: "flex-start", justifyContent: "center" })}
`;
const QuantityWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  ${mobile({ flex: 1, alignItems: "flex-start", justifyContent: "center" })}
`;

const ArrowIconWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;
const PriceContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

const PriceRow = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: flex-end;
  ${mobile({ flexDirection: "column", justifyContent: "center" })}
`;

const PriceNumWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const PriceDelWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const ExpanedWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  box-sizing: border-box;
  margin-left: 10px;
`;

const ExpandIcon = styled.div`
  cursor: pointer;
  width: 100%;
  display: flex;
  align-items: center;
  ${mobile({ flex: 1, alignItems: "center", justifyContent: "center" })}
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
        <TextWrapper>
          <InfoContainer>
            <InfoRow>
              <ModelNameWrapper>
                <Typotext
                  size="25px"
                  style={{ color: blueGrey[800], fontWeight: 500 }}
                >
                  Samsung DB400 타워형 데스크탑
                </Typotext>
              </ModelNameWrapper>
              <QuantityWrapper>
                <InputWrapper>
                  <InputBase
                    inputProps={{ maxLength: 3 }}
                    sx={{ width: 30 }}
                    variant="standard"
                  />
                </InputWrapper>
                <ArrowIconWrapper>
                  <IconButton style={{ marginBottom: "3px" }}>
                    <KeyboardArrowUpSharpIcon sx={{ fontSize: 12 }} />
                  </IconButton>
                  <IconButton>
                    <KeyboardArrowDownSharpIcon sx={{ fontSize: 12 }} />
                  </IconButton>
                </ArrowIconWrapper>
              </QuantityWrapper>
            </InfoRow>
            <InfoRow>
              <Typotext
                size="15px"
                style={{ color: lightBlue[700], fontWeight: 300 }}
                onClick={() => setExpaned(!expaned)}
              >
                <ExpandIcon>
                  자세한 스펙
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
            </InfoRow>
            <InfoRow>
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
            </InfoRow>
          </InfoContainer>
          <PriceContainer>
            <PriceRow>
              <PriceNumWrapper>
                <Typotext
                  size="25px"
                  style={{
                    fontWeight: 500,
                    color: blueGrey[800],
                  }}
                >
                  1,350,000원
                </Typotext>
              </PriceNumWrapper>
            </PriceRow>
            <PriceRow>
              <PriceDelWrapper>
                <Typotext
                  size="15px"
                  style={{ color: lightBlue[700], fontWeight: 300 }}
                  onClick={() => setExpaned(!expaned)}
                >
                  삭제
                </Typotext>
              </PriceDelWrapper>
            </PriceRow>
          </PriceContainer>
        </TextWrapper>
      </Wrapper>
    </Container>
  );
};

export default CartThumbItem;
