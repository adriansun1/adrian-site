import React from 'react';
import styled from 'styled-components';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';
import Link from 'next/link';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  min-height: 500px;
  ul {
    padding: 0;
    margin: 0;
    li {
      list-style-type: none;
      a {
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        h5 {
          padding-left: 0.3rem;
        }
      }
    }
  }
  @media (max-width: 600px) {
    h1 {
      font-size: 8vw;
    }
  }
`;

export default function Contact() {
  return (
    <StyledWrapper>
      <h3>Want to reach me for some reason?</h3>
      <h1>
        <a href={`mailto:adrian@adriansun.com`}>adrian@adriansun.com</a>
      </h1>
    </StyledWrapper>
  );
}
