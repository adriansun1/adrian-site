import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

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
      position: absolute;
      color: #eeeeee;
      background-color: #ff5701;
      top: 10px;
      right: 18px;
      padding: 2px 8px;
      border-radius: 0 0 5px 5px;
      font-size: 10px;
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
        <a href={url + 'resume.pdf'}>PDF</a>
      </StyledDiv>
      <div dangerouslySetInnerHTML={{ __html: site }}></div>
    </>
  );
}
