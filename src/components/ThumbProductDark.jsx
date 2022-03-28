import { Add, ShoppingBasket, CheckOutlined } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { blueGrey, grey, cyan, yellow, lightBlue } from "@mui/material/colors";

import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Typotext } from "../styles/Typotext";

const Container = styled.div`
  background-color: ${blueGrey[900]};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

const ThumbWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
  ${mobile({ flexDirection: "column" })}
`;

const TypoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  flex: 1;
`;

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: 30px 0px;
  &:hover {
    cursor: pointer;
    font-weight: 700;
    color: ${cyan[900]};
  }
`;

const ProductWrapper = styled.div`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;
`;
const ProductImgBox = styled.img`
  display: flex;
  width: 350px;
  height: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  ${mobile({ width: "80%" })}
`;
const ThumbProductDark = (props) => {
  return (
    <Container>
      <ThumbWrapper>
        <ProductWrapper>
          <ProductImgBox src={props.img} />
        </ProductWrapper>
        <TypoWrapper>
          <Typotext
            size={"40px"}
            gutterBottom
            style={{
              fontWeight: 600,
              color: grey[300],
              textAlign: "center",
            }}
          >
            {props.title}
          </Typotext>
          <Typotext
            size={"25px"}
            gutterBottom
            style={{
              fontWeight: 300,
              color: grey[100],
              textAlign: "center",
            }}
          >
            {props.subTitle}
          </Typotext>
          <Typotext
            size={"20px"}
            gutterBottom
            style={{
              fontWeight: 500,
              color: grey[500],
              textAlign: "center",
            }}
          >
            {props.comment}
          </Typotext>
          <MenuWrapper>
            <Typography
              variant="h6"
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontWeight: 400,
                fontFamily: "Noto Sans KR",
                color: lightBlue[600],
                "&:hover": { fontWeight: 700, color: lightBlue[700] },
              }}
            >
              더 알아보기 <Add style={{ marginLeft: 10 }} />
            </Typography>
            <Typography
              variant="h6"
              sx={{
                marginLeft: 5,
                display: "flex",
                alignItems: "center",
                fontWeight: 400,
                fontFamily: "Noto Sans KR",
                color: lightBlue[600],
                "&:hover": { fontWeight: 700, color: lightBlue[700] },
              }}
            >
              견적받기 <CheckOutlined style={{ marginLeft: 10 }} />
            </Typography>
          </MenuWrapper>
        </TypoWrapper>
      </ThumbWrapper>
    </Container>
  );
};

export default ThumbProductDark;
