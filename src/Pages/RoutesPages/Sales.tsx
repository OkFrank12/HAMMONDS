import styled from "styled-components";
import { useState } from "react";
import pics1 from "../../Assets/shoe1.jpg";
import pics2 from "../../Assets/shoe2.jpg";
import pics3 from "../../Assets/shoe3.jpg";
import pics4 from "../../Assets/shoe4.jpg";
import pics5 from "../../Assets/shoe5.jpg";
import pics6 from "../../Assets/shoe6.jpg";
import pics7 from "../../Assets/shoe7.jpg";
import pics8 from "../../Assets/shoe8.jpg";
import pics9 from "../../Assets/shoe9.jpg";
import pics10 from "../../Assets/shoe10.jpg";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdCancel } from "react-icons/md";

const Sales = () => {
  const [toggle, setToggle] = useState<boolean>(false);

  const onToggle = () => {
    setToggle(!toggle);
  };
  const [Xtoggle, setXToggle] = useState<boolean>(false);

  const onXToggle = () => {
    setXToggle(!Xtoggle);
  };
  const [Ytoggle, setYToggle] = useState<boolean>(false);

  const onYToggle = () => {
    setYToggle(!Ytoggle);
  };

  const Props: any = [
    {
      imgs: pics1,
      text: "Black Cortina High",
      num: "N2000.00",
    },
    {
      imgs: pics2,
      text: "Black Hulk Size 30",
      num: "N1500.00",
    },
    {
      imgs: pics3,
      text: "Black Italian High",
      num: "N4000.00",
    },
    {
      imgs: pics4,
      text: "Black Plain Size 43",
      num: "N6500.00",
    },
    {
      imgs: pics5,
      text: "Black Hulk Size 45",
      num: "N2300.00",
    },
    {
      imgs: pics6,
      text: "Black Cinder 45",
      num: "N6000.00",
    },
    {
      imgs: pics7,
      text: "Black Curvy Size 36",
      num: "N3200.00",
    },
    {
      imgs: pics8,
      text: "Black Butterfly Size 40",
      num: "N4100.00",
    },
    {
      imgs: pics9,
      text: "Black Beauty Shoe",
      num: "N7300.00",
    },
    {
      imgs: pics10,
      text: "Black Unisex Hulk 49",
      num: "N9000.00",
    },
  ];
  return (
    <div>
      <Container>
        <Main>
          <ParentDiv>
            {Props.map((el: any) => (
              <Holder>
                <Box>
                  <Img src={el.imgs} />
                </Box>
                <Products>{el.text}</Products>
                <Amount>{el.num}</Amount>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  {toggle ? (
                    <AiOutlineStar
                      onClick={onToggle}
                      size={30}
                      color="darkorange"
                    />
                  ) : (
                    <AiFillStar
                      onClick={onToggle}
                      size={30}
                      color="darkorange"
                    />
                  )}
                  {Xtoggle ? (
                    <AiOutlineHeart
                      size={30}
                      color="darkorange"
                      onClick={onXToggle}
                    />
                  ) : (
                    <AiFillHeart
                      size={30}
                      color="darkorange"
                      onClick={onXToggle}
                    />
                  )}
                  {Ytoggle ? (
                    <AiOutlineShoppingCart
                      size={30}
                      color="darkorange"
                      onClick={onYToggle}
                    />
                  ) : (
                    <MdCancel
                      size={30}
                      color="darkorange"
                      onClick={onYToggle}
                    />
                  )}
                </div>
              </Holder>
            ))}
          </ParentDiv>
          <BigText>
            Hammonds<span>Sales</span>
          </BigText>
        </Main>
      </Container>
    </div>
  );
};

export default Sales;

const BigText = styled.div`
  font-size: 80px;
  font-weight: 800;
  color: darkorange;
  margin-right: 15px;

  span {
    color: grey;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 150vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  width: 90%;
  height: 90%;
  flex-direction: column;
`;

const Holder = styled.div`
  font-size: 20px;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  padding: 5px;
  border-radius: 5px;
  transition: all 350ms ease;
  cursor: pointer;
  margin: 10px 0;
  :hover {
    transform: scaleY(1.1);
  }
`;

const Box = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
  height: 250px;
  width: 250px;
  border-radius: 20px;
  background-color: white;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 10px;
`;

const ParentDiv = styled.div`
  width: 100%;
  min-height: 350px;
  flex-wrap: wrap;
  padding: 10px;
  border-radius: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Products = styled.div`
  color: darkorange;
`;

const Amount = styled.div``;
