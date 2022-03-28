import { Stack } from "@mui/material";
import { blueGrey, grey } from "@mui/material/colors";
import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import jncoreWhite from "../img/logo/jncoreWhite.png";
import { mobile } from "../responsive";

export const Container = styled.div`
  display: flex;
  width: 100%;
  height: 50px;
  text-decoration: none;
`;

const MenuWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  height: 100%;
  align-items: center;
  justify-content: space-between;
  ${mobile({ display: "none" })}
`;

const MobileMenuWrapper = styled.div`
  display: none;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  ${mobile({ display: "flex" })}
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
          <Link to="/" style={{ textDecoration: "none" }}>
            <MenuItem style={{ justifyContent: "flex-start" }}>
              <img src={jncoreWhite} width="50px" />
            </MenuItem>
          </Link>
          <Link to="/desktop" style={{ textDecoration: "none" }}>
            <MenuItem>데스크탑</MenuItem>
          </Link>
        </MenuWrapper>
        <MobileMenuWrapper>
          <Link to="/" style={{ textDecoration: "none" }}>
            <img src={jncoreWhite} width="50px" />
          </Link>
        </MobileMenuWrapper>
      </Stack>
    </Container>
  );
};

export default Header;
