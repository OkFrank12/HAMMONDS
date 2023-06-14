import styled from "styled-components";

const About = () => {
  return (
    <div>
      <Container>
        <Main>
          <BigText>
            About<span>Hammonds</span>
          </BigText>
          <SmallText>
            <span>Resilient Quality...Play On!!!</span>
            <span>
              Welcome to our company! We are a dedicated team committed to
              providing exceptional products/services and creating a positive
              impact in our industry. Here is a brief overview of who we are and
              what we stand for.
            </span>
            <p>Our Mission</p>
            <span>
              At our core, our mission is to help the young generation of
              students get the best out of the foots with quality shoes. We
              strive to make sure that durable and affordable shoes are provided
              by us. We make a meaningful difference in the lives of our
              customers, employees, and the communities we serve.
            </span>
            <p>Our Expertise</p>
            <span>
              With years of experience at "Hammonds", we have honed our skills
              and knowledge to deliver outstanding results. Our team consists of
              highly skilled professionals who are passionate about their work
              and continuously seek to stay at the forefront of industry trends
              and advancements.
            </span>
            <p>Quality and Innovation</p>
            <span>
              We are committed to delivering excellence in every aspect of our
              products/services. Quality is paramount to us, and we go above and
              beyond to ensure that our customers receive the best solutions
              that meet their needs. We embrace innovation and are constantly
              exploring new technologies and approaches to enhance our
              offerings.
            </span>
            <p>Customer focus</p>
            <span>
              Our customers are at the heart of everything we do. We believe in
              building strong, long-lasting relationships by providing
              exceptional customer service and tailored solutions. We listen to
              our customers' needs, value their feedback, and continuously
              strive to exceed their expectations.
            </span>
            <p>Ethics and Sustaineability</p>
            <span>
              We conduct our business with the highest ethical standards,
              placing integrity and transparency at the forefront of our
              operations. As well as maintaining sustainable boundary.
            </span>
            <p>Community Engagement</p>
            <span>
              We believe in giving back to the communities that support us. We
              actively participate in philanthropic endeavors, volunteering, and
              supporting local initiatives. By engaging with our communities, we
              aim to make a positive social impact and contribute to their
              growth and well-being.
            </span>

            <span>
              Thank you for taking the time to learn more about us. We are
              excited about the opportunity to serve you and look forward to
              building a lasting relationship. Should you have any questions or
              require further information, please do not hesitate to contact us.
            </span>
          </SmallText>
        </Main>
      </Container>
    </div>
  );
};

export default About;

const SmallText = styled.div`
  p {
    color: darkorange;
    font-size: 30px;
  }
`;

const Container = styled.div`
  width: 100%;
  height: 210vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  text-align: center;
  font-weight: 700;
  font-size: 20px;
  color: grey;
  width: 85%;
`;

const BigText = styled.div`
  font-size: 80px;
  font-weight: 800;
  color: grey;
  margin-right: 15px;

  span {
    color: darkorange;
  }
`;
