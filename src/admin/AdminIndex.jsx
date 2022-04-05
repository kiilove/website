import { Divider } from "@mui/material";
import { lightBlue } from "@mui/material/colors";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ItemBox } from "../styles/Commons";
import { Typotext } from "../styles/Typotext";

const Container = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const TitleContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  margin: 30px 0px;
`;

const TitleWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const TitleRow = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const BodyContainer = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  height: 100%;
`;

const BodyWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const BodyRow = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const MenuContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
`;

const MenuWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  gap: 10px;
`;

const MenuItem = styled.div`
  display: flex;
`;

const MenuText = styled.span`
  font-family: Noto Sans KR;
  font-weight: 300;
  font-size: 15px;
  color: ${lightBlue[700]};
`;

const MenuArray = [
  {
    id: "1",
    category: "제품관련",
    items: [
      { id: "1", title: "제품등록", url: "/adminproductwrite" },
      { id: "2", title: "제품목록", url: "#" },
      { id: "3", title: "제품 슬라이드", url: "#" },
      { id: "4", title: "악세서리 슬라이드", url: "#" },
    ],
  },
  {
    id: "1",
    category: "고객관련",
    items: [{ id: "1", title: "고객등록", url: "#" }],
    items: [{ id: "2", title: "고객목록", url: "#" }],
  },
];
const AdminIndex = () => {
  return (
    <Container>
      <Wrapper>
        <TitleContainer>
          <TitleWrapper>
            <TitleRow style={{ height: "60px" }}>
              <Typotext size="20px">관리자 페이지</Typotext>
            </TitleRow>
          </TitleWrapper>
        </TitleContainer>
        <div style={{ width: "100%", margin: "20px 0px" }}>
          <Divider />
        </div>
        <BodyContainer>
          <BodyWrapper style={{ flexDirection: "column" }}>
            {MenuArray.map((item, index) => (
              <>
                <BodyRow key={index}>
                  <ItemBox style={{ flex: 1 }}>
                    <Typotext size="15px" style={{ fontWeight: 500 }}>
                      {item.category}
                    </Typotext>
                  </ItemBox>
                  <ItemBox style={{ flex: 3 }}>
                    <MenuContainer>
                      <MenuWrapper>
                        {item.items.map((items, idx) => (
                          <MenuItem key={idx}>
                            <Link
                              to={items.url}
                              style={{
                                color: lightBlue[700],
                                textDecoration: "underlined",
                              }}
                            >
                              <MenuText>{items.title}</MenuText>
                            </Link>
                          </MenuItem>
                        ))}
                      </MenuWrapper>
                    </MenuContainer>
                  </ItemBox>
                </BodyRow>
              </>
            ))}
          </BodyWrapper>
        </BodyContainer>
      </Wrapper>
    </Container>
  );
};

export default AdminIndex;
