import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Heading = styled.h2`
  color: white;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #000;
  padding: 10px 30px 10px 60px;
`;

const Navbarwrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: right;
  gap: 30px;
  color: white;
`;

const StyledLink = styled(Link)`
  color: white;
  font-size: 30px;
  text-decoration: none;
`;

const Navbar = () => {
  return (
    <>
      <Container>
        <Heading>E-COMMERCE</Heading>
        <Navbarwrapper>
          <StyledLink to="/">HOME</StyledLink>
          <StyledLink to="/Product">PRODUCT</StyledLink>
        </Navbarwrapper>
      </Container>
    </>
  );
};

export default Navbar;
