import React, { useContext } from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import GlobalContext from '../../context/GlobalContext';
import { Title, ButtonIcon, Section, Box } from '../../components/Core';
import bgHeroPattern from '../../assets/image/webp/hero-pattern.webp';
import imgL from '../../assets/image/png/office.png';

const SectionStyled = styled(Section)`
  &::before {
    position: absolute;
    top: 0;
    content: '';
    width: 100%;
    height: 120%;
    background: url(${bgHeroPattern}) top center no-repeat;
    background-size: cover;
    z-index: -1;
  }
`;

const Hero = () => {
  const gContext = useContext(GlobalContext);

  return (
    <>
      {/* <!-- Hero Area --> */}
      <SectionStyled hero className="position-relative">
        <Container>
          <Box pb="40px">
            <img src={imgL} alt="" height="88" />
          </Box>
          <Row className="align-items-lg-end">
            <Col lg="8" sm="12" className="mb-5 mb-lg-0">
              <Box>
                <Title variant="hero">Dunder Mifflin Customer Support</Title>
              </Box>
            </Col>
            <Col lg="4" sm="12">
              <Box pl="1.25rem">
                <a
                  href="https://www.producthunt.com/posts/dunder-email?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-dunder-email"
                  target="_blank"
                >
                  <img
                    src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=294439&theme=light"
                    alt="Dunder Email - AI-powered customer support for Dunder Mifflin | Product Hunt"
                    style={{ width: '250px', height: '54px' }}
                    width="250"
                    height="54"
                  />
                </a>
              </Box>
            </Col>
          </Row>
          <Box mt="4">
            <iframe
              src="https://keen-gates-816eb6.netlify.app/"
              title="Demo Email Composer"
              style={{ width: '100%', height: '600px' }}
              frameborder="0"
            ></iframe>
          </Box>
        </Container>
      </SectionStyled>
    </>
  );
};

export default Hero;
