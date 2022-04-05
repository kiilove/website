import { Divider } from "@mui/material";
import { lightBlue, grey, blueGrey } from "@mui/material/colors";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
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
                marginTop: "50px",
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
            <TitleRow style={{ marginBottom: "50px" }}>
              <ItemBox
                style={{
                  justifyContent: "flex-start",
                  flexDirection: "column",
                }}
              >
                <Typotext
                  size="25px"
                  style={{ fontWeight: 700, color: blueGrey[800] }}
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
                <Typotext size="20px" style={{ fontWeight: 700 }}>
                  고객님의 자산
                </Typotext>
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
                          style={{ fontWeight: 300, color: lightBlue[700] }}
                        >
                          지원이 필요하신가요?
                        </Typotext>
                      </AssetRow>
                    </AssetWrapper>
                  </AssetContainer>
                </ItemBox>
              ))}
            </BodyRow>
            <BodyRow
              style={{
                marginTop: "50px",
                marginBottom: "50px",
                width: "100%",
                height: "100%",
              }}
            >
              <ItemBox>
                <Typotext size="17px" sytle={{ fontWeight: 500 }}>
                  주문의 자세한 내용은 아래 주문 연대기 메뉴에서 확인 하실수
                  있습니다.
                </Typotext>
              </ItemBox>
            </BodyRow>
          </BodyWrapper>
          <BodyWrapper style={{ backgroundColor: grey[100] }}>
            <BodyRow style={{ margin: "40px 0px" }}>
              <MidMenuContainer>
                <MidMenuWrapper style={{ gap: "30px" }}>
                  <ItemBox
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      flex: 1,
                      borderRadius: "10px",
                      flexDirection: "column",
                    }}
                  >
                    <ItemRow>
                      <ItemBox
                        style={{ boxSizing: "border-box", padding: "20px" }}
                      >
                        <Typotext size="20px" style={{ fontWeight: 700 }}>
                          주문 연대기
                        </Typotext>
                      </ItemBox>
                    </ItemRow>
                    <ItemRow>
                      <ItemBox
                        style={{ boxSizing: "border-box", padding: "20px" }}
                      >
                        <Typotext size="15px" style={{ color: blueGrey[400] }}>
                          김진배 고객님과의 만남은 231일째 입니다.
                        </Typotext>
                      </ItemBox>
                    </ItemRow>
                    <ItemRow>
                      <ItemBox
                        style={{
                          boxSizing: "border-box",
                          padding: "0px 20px",
                        }}
                      >
                        <Typotext size="15px" style={{ color: blueGrey[800] }}>
                          아직 저희가 고객님 마음에 쏙드는 제품을 준비 못했나
                          봅니다. <br />
                          더욱 분발하겠습니다.
                        </Typotext>
                      </ItemBox>
                    </ItemRow>
                    <ItemRow>
                      <Link
                        to="#"
                        style={{
                          color: lightBlue[700],
                          textDecoration: "underlined",
                        }}
                      >
                        <ItemBox
                          style={{
                            boxSizing: "border-box",
                            padding: "20px",
                          }}
                        >
                          <Typotext
                            size="15px"
                            style={{ color: lightBlue[700] }}
                          >
                            주문 기록
                          </Typotext>
                        </ItemBox>
                      </Link>
                    </ItemRow>
                  </ItemBox>
                  <ItemBox
                    style={{
                      backgroundColor: "white",
                      width: "100%",
                      flex: 1,
                      borderRadius: "10px",
                      flexDirection: "column",
                    }}
                  >
                    <ItemRow>
                      <ItemBox
                        style={{ boxSizing: "border-box", padding: "20px" }}
                      >
                        <Typotext size="20px" style={{ fontWeight: 700 }}>
                          저장된 목록
                        </Typotext>
                      </ItemBox>
                    </ItemRow>
                    <ItemRow>
                      <ItemBox
                        style={{ boxSizing: "border-box", padding: "20px" }}
                      >
                        <Typotext size="15px" style={{ color: blueGrey[400] }}>
                          저희가 김진배 고객님을 처음 만난날은 4월 1일 입니다.
                        </Typotext>
                      </ItemBox>
                    </ItemRow>
                    <ItemRow>
                      <ItemBox
                        style={{
                          boxSizing: "border-box",
                          padding: "0px 20px",
                        }}
                      >
                        <Typotext size="15px" style={{ color: blueGrey[800] }}>
                          총 2건의 제품에 대해 관심을 가지고 계시는군요. <br />
                          다시 한번 둘러보시면 이번엔 마음에 드는 제품을 찾으실
                          수 있을거에요.
                        </Typotext>
                      </ItemBox>
                    </ItemRow>
                    <ItemRow>
                      <Link
                        to="#"
                        style={{
                          color: lightBlue[700],
                          textDecoration: "underlined",
                        }}
                      >
                        <ItemBox
                          style={{
                            boxSizing: "border-box",
                            padding: "20px",
                          }}
                        >
                          <Typotext
                            size="15px"
                            style={{ color: lightBlue[700] }}
                          >
                            저장 목록
                          </Typotext>
                        </ItemBox>
                      </Link>
                    </ItemRow>
                  </ItemBox>
                </MidMenuWrapper>
              </MidMenuContainer>
            </BodyRow>
          </BodyWrapper>
          <BodyWrapper style={{ margin: "50px 0px" }}>
            <BodyRow
              style={{
                flexWrap: "wrap",
                boxSizing: "border-box",
                justifyContent: "flex-start",
              }}
            >
              <ItemBox>
                <Typotext size="20px" style={{ fontWeight: 700 }}>
                  고객님의 소중한 개인 정보
                </Typotext>
              </ItemBox>
            </BodyRow>
            <BodyRow
              style={{
                flexWrap: "wrap",
                boxSizing: "border-box",
                justifyContent: "flex-start",
                marginTop: "50px",
              }}
            >
              <itemBox
                style={{
                  width: "100%",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <ItemRow style={{ height: "30px" }}>
                  <ItemBox style={{ flex: 1 }}>
                    <Typotext size="17px" style={{ fontWeight: 500 }}>
                      배송 관련 정보
                    </Typotext>
                  </ItemBox>
                  <ItemBox style={{ flex: 4 }}>
                    <Typotext size="17px" style={{ fontWeight: 500 }}>
                      기본 배송지
                    </Typotext>
                    <ItemBox
                      style={{
                        height: "100%",
                        marginLeft: "50px",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Link
                        to="#"
                        style={{
                          color: lightBlue[700],
                          textDecoration: "underlined",
                        }}
                      >
                        <Typotext size="15px" style={{ color: lightBlue[700] }}>
                          배송지 관리
                        </Typotext>
                      </Link>
                    </ItemBox>
                  </ItemBox>
                </ItemRow>
                <ItemRow style={{ height: "30px" }}>
                  <ItemBox style={{ flex: 1 }}>
                    <Typotext
                      size="17px"
                      style={{ fontWeight: 500 }}
                    ></Typotext>
                  </ItemBox>
                  <ItemBox style={{ flex: 4 }}>
                    <Typotext size="15px" style={{ fontWeight: 300 }}>
                      경기도 안산시 단원구 석수로 138 109동 3705호(선부동,
                      안산메트로타운푸르지오힐스테이트아파트)
                    </Typotext>
                  </ItemBox>
                </ItemRow>
                <ItemRow style={{ height: "30px" }}>
                  <ItemBox style={{ flex: 1 }}>
                    <Typotext
                      size="17px"
                      style={{ fontWeight: 500 }}
                    ></Typotext>
                  </ItemBox>
                  <ItemBox style={{ flex: 4 }}>
                    <Typotext size="15px" style={{ fontWeight: 300 }}>
                      김진배(010-4643-3464)
                    </Typotext>
                  </ItemBox>
                </ItemRow>
              </itemBox>
            </BodyRow>
            <BodyRow
              style={{
                flexWrap: "wrap",
                boxSizing: "border-box",
                justifyContent: "flex-start",
                marginTop: "50px",
              }}
            >
              <itemBox
                style={{
                  width: "100%",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <ItemRow style={{ height: "30px" }}>
                  <ItemBox style={{ flex: 1 }}>
                    <Typotext size="17px" style={{ fontWeight: 500 }}>
                      로그인 관련 정보
                    </Typotext>
                  </ItemBox>
                  <ItemBox style={{ flex: 4 }}>
                    <Typotext size="17px" style={{ fontWeight: 500 }}>
                      비밀번호 관리
                    </Typotext>
                  </ItemBox>
                </ItemRow>
                <ItemRow style={{ height: "30px" }}>
                  <ItemBox style={{ flex: 1 }}>
                    <Typotext
                      size="17px"
                      style={{ fontWeight: 500 }}
                    ></Typotext>
                  </ItemBox>
                  <ItemBox style={{ flex: 4 }}>
                    <Typotext size="15px" style={{ fontWeight: 300 }}>
                      비밀번호 변경
                    </Typotext>
                  </ItemBox>
                </ItemRow>
                <ItemRow style={{ height: "30px" }}>
                  <ItemBox style={{ flex: 1 }}>
                    <Typotext
                      size="17px"
                      style={{ fontWeight: 500 }}
                    ></Typotext>
                  </ItemBox>
                  <ItemBox style={{ flex: 4 }}>
                    <Typotext size="15px" style={{ fontWeight: 300 }}>
                      비밀번호 찾기
                    </Typotext>
                  </ItemBox>
                </ItemRow>
              </itemBox>
            </BodyRow>
            <BodyRow
              style={{
                flexWrap: "wrap",
                boxSizing: "border-box",
                justifyContent: "flex-start",
                marginTop: "50px",
              }}
            >
              <itemBox
                style={{
                  width: "100%",
                  flexDirection: "column",
                  justifyContent: "flex-start",
                }}
              >
                <ItemRow style={{ height: "30px" }}>
                  <ItemBox style={{ flex: 1 }}>
                    <Typotext size="17px" style={{ fontWeight: 500 }}>
                      결제 관련 정보
                    </Typotext>
                  </ItemBox>
                  <ItemBox style={{ flex: 4 }}>
                    <Typotext size="17px" style={{ fontWeight: 500 }}>
                      저장된 결제 수단
                    </Typotext>
                  </ItemBox>
                </ItemRow>
                <ItemRow style={{ height: "30px" }}>
                  <ItemBox style={{ flex: 1 }}>
                    <Typotext
                      size="17px"
                      style={{ fontWeight: 500 }}
                    ></Typotext>
                  </ItemBox>
                  <ItemBox style={{ flex: 4 }}>
                    <Typotext size="15px" style={{ fontWeight: 300 }}>
                      네이버페이
                    </Typotext>
                  </ItemBox>
                </ItemRow>
                <ItemRow style={{ height: "30px" }}>
                  <ItemBox style={{ flex: 1 }}>
                    <Typotext
                      size="17px"
                      style={{ fontWeight: 500 }}
                    ></Typotext>
                  </ItemBox>
                  <ItemBox style={{ flex: 4 }}>
                    <Typotext size="15px" style={{ fontWeight: 300 }}>
                      카카오페이
                    </Typotext>
                  </ItemBox>
                </ItemRow>
              </itemBox>
            </BodyRow>
          </BodyWrapper>
        </BodyContainer>
      </Wrapper>
    </Container>
  );
};

export default MyAccount;
