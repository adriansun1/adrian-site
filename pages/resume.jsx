import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { FaFilePdf } from 'react-icons/fa';
import { createGlobalStyle } from 'styled-components';
import { useRouter } from 'next/router';

const GlobalStyle = createGlobalStyle`
  body {
    background-color: #222831;
  }
`;

const whiteList = ['crypto'];

export default function Resume() {
  const router = useRouter();
  console.log(router.query.q);
  const [site, setSite] = useState();
  const url = 'https://d13b2cruxwxefb.cloudfront.net/';

  const StyledDiv = styled.div`
    .navbar {
      .nav {
        background-color: #ff5701;
        width: 100%;
        height: 10px;
        position: absolute;
      }
      a {
        display: flex;
        align-items: center;
        gap: 3px;
        position: absolute;
        color: #eeeeee;
        background-color: #ff5701;
        top: 10px;
        right: 18px;
        padding: 2px 8px;
        border-radius: 0 0 5px 5px;
        font-size: 12px;
        p {
          margin: 0;
          font-weight: 400;
        }
      }
    }
  `;

  function getFilename() {
    const { q } = router.query;
    return q && whiteList.includes(q) ? `resume-${q}` : 'resume';
  }

  async function fetchSite() {
    //TODO get diff resume based on path
    const res = await fetch(`${url}${getFilename()}.html`);
    const data = await res.text();
    setSite(data);
  }

  useEffect(() => {
    fetchSite();
  }, [router.query.q]);

  return (
    <>
      <GlobalStyle />
      <StyledDiv>
        <div className='navbar'>
          <div className='nav' />
          <a href={`${url}${getFilename()}.pdf`}>
            <FaFilePdf />
            <p>PDF</p>
          </a>
        </div>
        <div dangerouslySetInnerHTML={{ __html: site }}></div>
      </StyledDiv>
    </>
  );
}
