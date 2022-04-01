import { Divider } from "@mui/material";
import { lightBlue, grey, blueGrey } from "@mui/material/colors";
import React from "react";
import styled from "styled-components";
import AssetBox from "../components/AssetBox";
import { MyAsset } from "../data";
import { mobile } from "../responsive";
import { Typotext } from "../styles/Typotext";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  margin-bottom: 10px;
`;

const TitleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  background-color: ${grey[100]};
`;

const TitleRow = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  height: 100%;
`;

const ItemBox = styled.div`
  display: flex;
`;

const ImgBox = styled.img`
  object-fit: contain;
`;

const ItemRow = styled.div`
  display: flex;
`;

const BodyContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const BodyRow = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  height: 100%;

  ${mobile({
    width: "100%",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  })}
`;

const AssetContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 1;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  ${mobile({ border: `1px solid ${grey[100]}`, width: "100%" })}
`;

const AssetWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  padding: 10px;

  ${mobile({ padding: "0px" })}
`;

const AssetRow = styled.div`
  display: flex;
`;

const MidMenuContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const MidMenuWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
`;

const MyAccount = () => {
  return (
    <Container>
      <Wrapper>
        <TitleContainer>
          <TitleWrapper>
            <TitleRow
              style={{
                justifyContent: "space-between",
                alignItems: "center",
                height: "50px",
                marginTop: "20px",
              }}
            >
              <ItemBox>
                <Typotext size="20px" style={{ fontWeight: 500 }}>
                  계정
                </Typotext>
              </ItemBox>
              <ItemBox>
                <Typotext
                  szie="15px"
                  style={{ fontWeight: 500, color: lightBlue[700] }}
                >
                  로그아웃
                </Typotext>
              </ItemBox>
            </TitleRow>
            <TitleRow style={{ alignItems: "center" }}>
              <div
                style={{
                  width: "100%",
                  height: "5px",
                  marginTop: "5px",
                  marginBottom: "5px",
                }}
              >
                <Divider />
              </div>
            </TitleRow>
            <TitleRow style={{ marginBottom: "20px" }}>
              <ItemBox
                style={{
                  justifyContent: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Typotext
                  size="25px"
                  style={{ fontWeight: 500, color: blueGrey[800] }}
                >
                  김진배 님, 반갑습니다.
                </Typotext>
                <Typotext
                  size="23px"
                  style={{ fontWeight: 500, color: blueGrey[400] }}
                >
                  고객님만을 위한 정보를 모았습니다.
                </Typotext>
              </ItemBox>
            </TitleRow>
          </TitleWrapper>
        </TitleContainer>
        <BodyContainer>
          <BodyWrapper>
            <BodyRow style={{ marginTop: "50px" }}>
              <ItemBox>
                <Typotext size="20px">고객님의 자산</Typotext>
              </ItemBox>
            </BodyRow>
            <BodyRow
              style={{
                flexWrap: "wrap",
                boxSizing: "border-box",
                justifyContent: "space-between",
              }}
            >
              {MyAsset.map((item, index) => (
                <ItemBox key={index}>
                  <AssetContainer>
                    <AssetWrapper>
                      <AssetRow style={{ margin: "20px 0px" }}>
                        <ItemBox
                          style={{
                            width: "220px",
                            height: "150px",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: grey[50],
                            boxSizing: "border-box",
                            padding: "10px",
                            borderRadius: "10px",
                          }}
                        >
                          <ImgBox
                            src={item.img}
                            width="70%"
                            style={{ maxHeight: "120px" }}
                          />
                        </ItemBox>
                      </AssetRow>
                      <AssetRow style={{ margin: "5px 0px" }}>
                        <Typotext size="15px" style={{ fontWeight: 500 }}>
                          {item.modelTitle}
                        </Typotext>
                      </AssetRow>
                      <AssetRow style={{ margin: "5px 0px" }}>
                        <Typotext
                          size="15px"
                          style={{ fontWeight: 300, color: blueGrey[400] }}
                        >
                          구매일자 : {item.incomeDate}
                        </Typotext>
                      </AssetRow>
                      <AssetRow style={{ margin: "5px 0px" }}>
                        <Typotext
                          size="15px"
                          style={{ fontWeight: 500, color: lightBlue[500] }}
                        >
                          지원이 필요하신가요?
                        </Typotext>
                      </AssetRow>
                    </AssetWrapper>
                  </AssetContainer>
                </ItemBox>
              ))}
            </BodyRow>
            <BodyRow style={{ marginTop: "50px", marginBottom: "50px" }}>
              <ItemBox>
                <Typotext size="17px" sytle={{ fontWeight: 500 }}>
                  주문의 자세한 내용은 아래 주문 사항 메뉴에서 확인 하실수
                  있습니다.
                </Typotext>
              </ItemBox>
            </BodyRow>
          </BodyWrapper>
          <BodyWrapper style={{ backgroundColor: grey[100] }}>
            <BodyRow>
              <MidMenuContainer style={{ margin: "30px 0px", rowGap: "10px" }}>
                <MidMenuWrapper>
                  <ItemBox
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      flexGrow: "0.9",
                      borderRadius: "10px",
                    }}
                  >
                    <ItemRow>
                      <Typotext>주문 사항</Typotext>
                    </ItemRow>
                  </ItemBox>
                  <ItemBox
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      flexGrow: "0.9",
                      borderRadius: "10px",
                    }}
                  >
                    <ItemRow>
                      <Typotext>주문 사항</Typotext>
                    </ItemRow>
                  </ItemBox>
                </MidMenuWrapper>
              </MidMenuContainer>
            </BodyRow>
          </BodyWrapper>
        </BodyContainer>
      </Wrapper>
    </Container>
  );
};

export default MyAccount;
