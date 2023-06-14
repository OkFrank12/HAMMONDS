import styled from "styled-components";
import { useState } from "react";
import Button from "../Static/Button";
import Logo from "../Static/Logo";
import { Link } from "react-router-dom";

const Header = () => {
  const [show, setShow] = useState<boolean>(false);

  const onShow = () => {
    if (window.scrollY >= 70) {
      setShow(true);
    } else {
      setShow(false);
    }
  };
  window.addEventListener("scroll", onShow);
  return (
    <div>
      {show ? (
        <Container
          style={{ borderBottom: "1px solid grey", backgroundColor: "white" }}
        >
          <Main>
            <Logo title="Hammonds" />
            <NavsHolder>
              <Navs to="">Home</Navs>
              <Navs to="/sales">Sales</Navs>
              <Navs to="/reviews">Reviews</Navs>
              <Navs to="/about">About</Navs>
            </NavsHolder>
            <Button
              title="Follow"
              bg="grey"
              clr="white"
              jcc="center"
              w="150px"
            />
          </Main>
        </Container>
      ) : (
        <Container>
          <Main>
            <Logo title="Hammonds" />
            <NavsHolder>
              <Navs to="">Home</Navs>
              <Navs to="/sales">Sales</Navs>
              <Navs to="/reviews">Reviews</Navs>
              <Navs to="/about">About</Navs>
            </NavsHolder>
            <Link
              to="https://www.instagram.com/buyhammondss/"
              style={{ textDecoration: "none" }}
            >
              <Button
                title="Follow"
                bg="grey"
                clr="white"
                jcc="center"
                w="150px"
              />
            </Link>
          </Main>
        </Container>
      )}
    </div>
  );
};

export default Header;

const Container = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 10;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: 100%;
  font-size: 15px;
  font-weight: bold;
  color: grey;
`;

const NavsHolder = styled.div`
  display: flex;
`;

const Navs = styled(Link)`
  text-decoration-line: none;
  color: grey;
  margin: 0 20px;

  :focus {
    color: darkorange;
  }
`;
