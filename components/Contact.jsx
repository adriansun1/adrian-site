import React from 'react';
import styled from 'styled-components';
import { IoLogoLinkedin, IoLogoGithub } from 'react-icons/io';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
  min-height: 500px;
  ul {
    padding: 0;
    margin: 0;
    li {
      display: flex;
      align-items: center;
      justify-content: center;
      margin: 1rem;
      h5 {
        padding-left: 0.3rem;
      }
    }
  }
`;

export default function Contact() {
  return (
    <StyledWrapper>
      <h3>Want to reach me for some reason?</h3>
      <h1>Adrian@adriansun.com</h1>
      <ul>
        <li>
          <IoLogoLinkedin />
          <h5>Linkedin</h5>
        </li>
        <li>
          <IoLogoGithub /> <h5>Github</h5>
        </li>
      </ul>
    </StyledWrapper>
  );
}
