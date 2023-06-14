import React from "react";
import styled from "styled-components";
import rev0 from "../../Assets/reviews1.jpg";
import rev1 from "../../Assets/reviews2.jpg";
import rev2 from "../../Assets/reviews3.jpg";
import rev3 from "../../Assets/reviews4.jpg";
import rev4 from "../../Assets/reviews5.jpg";
import rev5 from "../../Assets/reviews6.jpg";

const Reviews = () => {
  const iData: any = [
    {
      img1: rev0,
    },
    {
      img1: rev1,
    },
    {
      img1: rev2,
    },
    {
      img1: rev3,
    },
    {
      img1: rev4,
    },
    {
      img1: rev5,
    },
  ];
  return (
    <div>
      <Container>
        <Main>
          {iData.map((el: any) => (
            <Box>
              <Img src={el.img1} />
            </Box>
          ))}
          <BigText>
            Hammonds<span>Reviews</span>
          </BigText>
        </Main>
      </Container>
    </div>
  );
};

export default Reviews;

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
  height: 140vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Img = styled.img`
  width: 100%;
  height: 100%;
`;

const Main = styled.div`
  width: 85%;
  height: 85%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

const Box = styled.div`
  width: 400px;
  height: 380px;
  background-color: white;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  object-fit: cover;
`;
