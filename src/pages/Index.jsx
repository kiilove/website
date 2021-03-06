import React, { useEffect } from "react";
import { blueGrey, grey, lightGreen } from "@mui/material/colors";
import styled from "styled-components";
import ThumbProduct from "../components/ThumbProduct";
import ThumbProductHalf from "../components/ThumbProductHalf";
import ThumbProductDark from "../components/ThumbProductDark";
import ThumbProductHalfHelp from "../components/ThumbProductHalfHelp";
import { mobile } from "../responsive";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  ${mobile({ padding: "10px" })}
`;

const SubHeaderContainer = styled.div`
  display: flex;
`;

const SubHeaderWrapper = styled.div`
  display: flex;
`;

const PageWrapper = styled.div`
  background-color: ${grey[100]};
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

const HalfWrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  box-sizing: border-box;
  padding: 20px;
  ${mobile({ flexDirection: "column", padding: "0px" })}
`;

const Index = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <Container>
      <SubHeaderContainer>
        <SubHeaderWrapper></SubHeaderWrapper>
      </SubHeaderContainer>
      <PageWrapper>
        <ThumbProduct
          title="LG gram 2022 New"
          subTitle="대화면을 어디서나 작고 가볍게"
          comment="15인치형"
          LinkUrl="/lgGram"
          img="/img/product/laptop/lg/gram15_2022.png"
        />

        <ThumbProduct
          title="갤럭시 북 Pro 360"
          subTitle="리얼 S펜으로 나를 표현하다."
          comment="15인치형"
          img="/img/product/laptop/samsung/galaxy360_2022.png"
        />
        <ThumbProductDark
          title="삼성 데스크탑 DM400"
          subTitle="세련된 블랙 디자인"
          comment="Middle Tower"
          img="/img/product/pc/samsung/db400_2022.png"
        />
        <HalfWrapper>
          <ThumbProductHalf
            title="커스텀 데스크탑(조립)"
            subTitle="더 강력한 퍼포몬스. 검증된 조합의 시스템."
            img="/img/etc/pc_custom_illust.png"
          />
          <ThumbProductHalfHelp
            title="도움이 필요하신가요?"
            subTitle="무엇이든 찾아드립니다."
            img="/img/etc/help.png"
          />
        </HalfWrapper>
      </PageWrapper>
    </Container>
  );
};

export default Index;
