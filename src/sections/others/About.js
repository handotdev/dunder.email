import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-bootstrap';

import { Section, Title, Text, Span } from '../../components/Core';
import imgPhoto from '../../assets/image/jpg/portfolio-about.jpg';
import imgSignLight from '../../assets/image/png/signature.png';

const LinkSocial = styled.a`
  color: ${({ theme }) => theme.colors.light} !important;
  text-transform: uppercase;
  font-weight: bold;
  font-size: 13px;
  letter-spacing: 1.63px;
  transition: 0.4s;
  &:hover {
    color: ${({ theme }) => theme.colors.light} !important;
    transform: translateY(-5px);
  }
`;

const About = ({ hero = true, bg = 'dark', ...rest }) => {
  return (
    <>
      <Section hero={hero} bg={bg} {...rest}>
        <Container>
          <Row className="align-items-center">
            <div className="pl-lg-4 pt-5 pt-lg-0">
              <Title color="light" variant="secSm">
                Disclaimer
              </Title>
              <Text
                color="light"
                className="mt-3 mt-lg-5"
                css={`
                  line-height: 1.5;
                `}
              >
                Disclaimer All character names and references to “The Office”
                are the sole property of NBCUniversal Television. This is
                entirely a fan-created site, that is not intended for commercial
                use or to violate copyright.
              </Text>
              <div className="mt-4">
                <Text color="light">For questions email</Text>

                <Text variant="p">
                  <a href="mailto:hello@folio.com" className="font-weight-bold">
                    <Span color="light">hi@promptly.to</Span>
                  </a>
                </Text>
              </div>
            </div>
          </Row>
        </Container>
      </Section>
    </>
  );
};

export default About;
