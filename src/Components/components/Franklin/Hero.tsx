import { useState } from "react";
import Button from "../../Static/Button";
import styled from "styled-components";
import shoe1 from "../../../Assets/maleShoes-removebg-preview.png";
import shoe2 from "../../../Assets/unisexShoe-removebg-preview.png";
import shoe3 from "../../../Assets/shoeBoy-removebg-preview.png";
import { Link } from "react-router-dom";

const Hero = () => {
  const data: any = [
    {
      num: "1K+",
      txt: "Brands",
    },
    {
      num: "500+",
      txt: "Shops",
    },
    {
      num: "250K+",
      txt: "Customers",
    },
  ];

  const nData: any = [
    {
      img1: shoe1,
      id: 1,
    },
    {
      img1: shoe2,
      id: 2,
    },
    {
      img1: shoe3,
      id: 3,
    },
  ];

  const [changeShoes, setChangeShoes] = useState<string>(shoe1);

  const FilterShoes = (id: any) => {
    const value = nData
      .filter((el: any) => el?.id === id)
      .map((el: any) => el?.img1);
    setChangeShoes(value.toString());
  };
  return (
    <div>
      <Container>
        <Main>
          <LeftHolder>
            <SmallText style={{ color: "darkorange" }}>
              NationWide Delivery
            </SmallText>
            <LargeText>We sell the</LargeText>
            <LargeText>
              <span>Best</span>School Shoes
            </LargeText>
            <SmallText>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Minima,
              illo porro! Labore eaque provident illum, voluptatem at quos
              veniam dolores?
            </SmallText>
            <Link to="https://www.instagram.com/p/Cs3AjEaNKP_/" style={{textDecoration: "none"}}>
              <Button
                title="Advert"
                clr="white"
                w="150px"
                bg="darkorange"
                jcc="center"
              />
            </Link>

            <ParentDiv>
              {data.map((el: any) => (
                <Holder>
                  <Num>{el.num}</Num>
                  <Text>{el.txt}</Text>
                </Holder>
              ))}
            </ParentDiv>
          </LeftHolder>
          <RightHolder>
            <ImgHolder>
              <Img src={changeShoes} />
            </ImgHolder>
            <ParentBox>
              {nData.map((el: any) => (
                <Box
                  onClick={() => {
                    FilterShoes(el?.id);
                  }}
                >
                  <Img1 src={el.img1} />
                </Box>
              ))}
            </ParentBox>
          </RightHolder>
        </Main>
      </Container>
    </div>
  );
};

export default Hero;

const Container = styled.div`
  width: 100%;
  height: 110vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 85%;
  height: 100%;
`;

const LeftHolder = styled.div`
  width: 600px;
  height: 550px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  font-size: 20px;
  color: grey;
  font-weight: bold;
`;

const SmallText = styled.div`
  width: 500px;
`;

const LargeText = styled.div`
  color: black;
  line-height: 1;
  font-size: 65px;

  span {
    margin-right: 15px;
    color: darkorange;
  }
`;

const ParentDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 200px;
`;

const Holder = styled.div``;

const Num = styled.div`
  font-size: 65px;
  color: darkorange;
`;

const Text = styled.div``;

const RightHolder = styled.div`
  width: 600px;
  height: 550px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const ImgHolder = styled.div`
  rotate: calc(-3deg);
  width: 450px;
  height: 290px;
  display: flex;
  align-items: center;
  justify-content: center;
  object-fit: cover;
  border-radius: 20px;
  background-color: darkorange;
`;

const Img = styled.img``;

const ParentBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 200px;
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  width: 190px;
  object-fit: cover;
  height: 180px;
  transition: all 500ms ease-in-out;

  :hover {
    transform: scale(1.1);
    cursor: pointer;
  }
`;

const Img1 = styled.img``;
