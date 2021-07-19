import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import {FaFilePdf} from 'react-icons/fa';

export default function Resume() {
  const [site, setSite] = useState();
  const url = 'https://d13b2cruxwxefb.cloudfront.net/';

  const StyledDiv = styled.div`
		.nav {
			background-color:#ff5701;
			width:100%;
			height:10px;
			position:absolute;
		}
    a {
			display:flex;
			align-items:center;
			gap:3px;
      position: absolute;
      color: #eeeeee;
      background-color: #ff5701;
      top: 10px;
      right: 18px;
      padding: 2px 8px;
      border-radius: 0 0 5px 5px;
      font-size: 12px;
			p{
				margin:0;
				font-weight: 400;
			}
    }
  `;

  async function fetchSite() {
    //TODO get diff resume based on path
    const res = await fetch(`${url}resume.html`);
    const data = await res.text();
    setSite(data);
  }

  useEffect(() => {
    fetchSite();
  }, []);

  console.log(site);
  return (
    <>
      <StyledDiv>
        <div className='nav'></div>
        <a href={url + 'resume.pdf'}><FaFilePdf/><p>PDF</p></a>
      </StyledDiv>
      <div dangerouslySetInnerHTML={{ __html: site }}></div>
    </>
  );
}
