import { Add, ShoppingBasket, CheckOutlined } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { blueGrey, grey, cyan, yellow } from "@mui/material/colors";

import React from "react";
import styled from "styled-components";

const Container = styled.div`
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 700px;
`;

const InfoWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const ThumbWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin-top: 50px;
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

const ProductImgBox = styled.img`
  display: flex;
  flex-wrap: wrap;
  width: 300px;
  height: auto;
  margin-top: 20px;
  margin-bottom: 20px;
`;
const ThumbProductHalf = (props) => {
  return (
    <Container>
      <ThumbWrapper>
        <Typography
          variant="h3"
          gutterBottom
          sx={{
            fontWeight: 600,
            fontFamily: "Noto Sans KR",
            color: blueGrey[800],
          }}
        >
          {props.title}
        </Typography>
        <Typography
          variant="h6"
          gutterBottom
          sx={{
            fontWeight: 300,
            fontFamily: "Noto Sans KR",
            color: grey[700],
          }}
        >
          {props.subTitle}
        </Typography>
        <Typography
          variant="h7"
          gutterBottom
          sx={{
            fontWeight: 500,
            fontFamily: "Noto Sans KR",
            color: grey[500],
          }}
        >
          {props.comment}
        </Typography>
        <MenuWrapper>
          <Typography
            variant="h7"
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontWeight: 400,
              fontFamily: "Noto Sans KR",
              color: cyan[600],
              "&:hover": { fontWeight: 700, color: cyan[700] },
            }}
          >
            더 알아보기 <Add style={{ marginLeft: 10 }} />
          </Typography>
          <Typography
            variant="h7"
            sx={{
              marginLeft: 5,
              display: "flex",
              alignItems: "center",
              fontWeight: 400,
              fontFamily: "Noto Sans KR",
              color: cyan[600],
              "&:hover": { fontWeight: 700, color: cyan[700] },
            }}
          >
            견적받기 <CheckOutlined style={{ marginLeft: 10 }} />
          </Typography>
        </MenuWrapper>
        <ProductImgBox src={props.img} />
      </ThumbWrapper>
    </Container>
  );
};

export default ThumbProductHalf;
