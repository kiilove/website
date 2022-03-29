import { Button, IconButton, Stack, Typography } from "@mui/material";
import { blueGrey, grey, lightBlue, blue } from "@mui/material/colors";
import { Box } from "@mui/system";
import TurnedInNotIcon from "@mui/icons-material/TurnedInNot";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import HomeWorkOutlinedIcon from "@mui/icons-material/HomeWorkOutlined";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Typotext } from "../styles/Typotext";
import { ModelMiniSpec, ModelSpec } from "../data";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100% !important;
  justify-content: space-evenly;
  box-sizing: border-box;

  ${mobile({
    width: "100%",
    height: "100%",
    marginRight: "0px",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "10px",
  })}
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;
  box-sizing: border-box;
  height: 100%;
  padding: 20px;

  ${mobile({
    width: "100%",
    margin: "0px",
    marginBottom: "30px",
    borderRadius: "22px",
    border: `1px solid ${grey[300]}`,
    padding: "20px",
    boxShadow:
      "rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em,rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em,rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset",
  })}
`;

const ImgWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const ColorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100px;
  margin-top: 20px;
  margin-left: 10px;
  ${mobile({ justifyContent: "center", alignItems: "center" })}
`;

const SpecWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  margin-top: 20px;
  margin-left: 10px;
  ${mobile({ justifyContent: "center", alignItems: "center" })}
`;
const SpecItem = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  height: 30px;
  width: 100%;
  ${mobile({ justifyContent: "center", alignItems: "center" })}
`;

const ActionWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 50px;
  box-sizing: border-box;
  margin-top: 20px;
  align-items: center;
  justify-content: center;
`;

const FavoriteWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 90%;

  box-sizing: border-box;
  margin-top: 20px;
  ${mobile({ marginTop: "5px", width: "60%" })}
`;

const ColorItem = styled.div`
  width: 25px;
  height: 25px;
  border: 0.5px solid ${grey[400]};
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 2px;
  cursor: pointer;
`;

const SelectButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 290px !important;
  height: 40px;
  border-radius: 10px;
  background-color: ${blue[500]};
  font-family: "Noto Sans KR";
  font-size: 15px;
  color: white;
  transition: all ease-in-out 0.35s;

  &:hover {
    cursor: pointer;
    background-color: ${blue[700]};
  }
`;
const ProductMiniDetail = (props) => {
  const modelData = ModelSpec.filter(
    (models) => models.category === props.category
  );
  console.log(modelData);

  return (
    <Container>
      {modelData.length > 0 && (
        <>
          {modelData.map((item, index) => (
            <Wrapper>
              <ImgWrapper>
                <img src={item.img} width="150px" />
              </ImgWrapper>
              {item.color.map((item, index) => (
                <ColorWrapper>
                  <Typography>{item.title}</Typography>
                  <Stack spacing={1} direction={"row"} marginTop={1}>
                    <ColorItem color={item.code}></ColorItem>
                  </Stack>
                </ColorWrapper>
              ))}

              <SpecWrapper>
                {item.spec.map((item, index) => (
                  <SpecItem key={index}>
                    {item.isThumb ? (
                      <Typotext
                        size="20px"
                        style={{
                          fontWeight: 700,
                          color: blueGrey[800],
                          marginBottom: "30px",
                        }}
                      >
                        {item.title} {item.titleComment}
                      </Typotext>
                    ) : (
                      <Typotext
                        size="15px"
                        style={{
                          fontWeight: 100,
                          color: blueGrey[600],
                          marginLeft: "10px",
                        }}
                      >
                        {item.title}
                      </Typotext>
                    )}
                  </SpecItem>
                ))}
                <SpecItem
                  style={{ alignItems: "center", justifyContent: "center" }}
                >
                  <Typotext
                    size="25px"
                    style={{
                      fontWeight: 700,
                      color: blueGrey[800],
                      marginTop: "20px",
                    }}
                  >
                    {Number(item.price).toLocaleString()}원
                  </Typotext>
                </SpecItem>
              </SpecWrapper>
              <ActionWrapper>
                <Link
                  to={`/orderPage/${item.id}/${item.price}`}
                  style={{ textDecoration: "none" }}
                >
                  <SelectButton>선택</SelectButton>
                </Link>
              </ActionWrapper>
              <FavoriteWrapper>
                <Stack direction={"row"} justifyContent={"space-between"}>
                  <Stack>
                    <Typography variant="body2" sx={{ fontWeight: 600 }}>
                      혹시 아직 고민되시나요?
                    </Typography>
                    <Typography variant="body2">
                      이 제품을 목록에 추가후 나중에 다시 살펴보세요.
                    </Typography>
                  </Stack>
                  <Box sx={{ width: 30 }}>
                    <IconButton>
                      <TurnedInNotIcon
                        sx={{
                          fontSize: 25,
                          fontWeight: "light",
                          color: lightBlue[300],
                        }}
                      />
                    </IconButton>
                  </Box>
                </Stack>
              </FavoriteWrapper>
            </Wrapper>
          ))}
        </>
      )}
    </Container>
  );
};

export default ProductMiniDetail;
