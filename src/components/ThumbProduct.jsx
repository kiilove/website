import { Add, ShoppingBasket, CheckOutlined } from "@mui/icons-material";
import { Stack, Typography } from "@mui/material";
import { blueGrey, grey, cyan, yellow, lightBlue } from "@mui/material/colors";
import { Link } from "react-router-dom";

import React from "react";
import styled from "styled-components";
import { mobile } from "../responsive";
import { Typotext } from "../styles/Typotext";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
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
  width: 800px;
  height: auto;
  margin-top: 20px;
  margin-bottom: 50px;
  ${mobile({ width: "80%" })}
`;

const ThumbProduct = (props) => {
  return (
    <Container>
      <ThumbWrapper>
        <Typotext
          gutterBottom
          size={"40px"}
          style={{ fontWeight: 700, color: blueGrey[800] }}
        >
          {props.title}
        </Typotext>
        <Typotext
          size={"25px"}
          gutterBottom
          style={{
            fontWeight: 300,
            color: grey[700],
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
          }}
        >
          {props.comment}
        </Typotext>
        <MenuWrapper>
          <Link to={props.LinkUrl} style={{ textDecoration: "none" }}>
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
          </Link>
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
        <ProductImgBox src={props.img} />
      </ThumbWrapper>
    </Container>
  );
};

export default ThumbProduct;
