import { Stack } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import jncoreWhite from "../img/logo/jncoreWhite.png";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
`;

const MenuWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  align-items: flex;
  justify-content: space-between;
`;

const MenuItem = styled.div`
  width: 160px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${grey[100]};
  font-size: 0.95rem;
  font-weight: 500;
  &:hover {
    cursor: pointer;
    color: ${grey[50]};
    font-weight: 600;
  }
`;

const Header = () => {
  return (
    <Container>
      <Stack
        width={"100%"}
        sx={{ backgroundColor: blueGrey[900] }}
        alignItems={"center"}
      >
        <MenuWrapper>
          <Link to="/">
            <MenuItem style={{ justifyContent: "flex-start" }}>
              <img src={jncoreWhite} width="50px" />
            </MenuItem>
          </Link>
          <Link to="/desktop">
            <MenuItem>데스크탑</MenuItem>
          </Link>
          <MenuItem>노트북</MenuItem>
          <MenuItem>모니터</MenuItem>
          <MenuItem>액세사리</MenuItem>
          <MenuItem>고객지원</MenuItem>
        </MenuWrapper>
      </Stack>
    </Container>
  );
};

export default Header;
