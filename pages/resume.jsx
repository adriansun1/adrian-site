import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';

const StyledWrapper = styled.div`
  .iframe {
    display: flex;
    justify-content: center;
  }
`;

export default function Resume({html}) {
  const ref = useRef(null);
  const [IFHeight, setIFHeight] = useState('0');
  const [IFWidth, setIFWidth] = useState('0');

  useEffect(() => {
    setIframe();
  });

  function setIframe() {
    try {
      const body = ref.current.contentWindow.document.body;
      setIFHeight(body.scrollHeight | 200);
      setIFWidth(body.scrollWidth | 700);
    } catch (e) {
      console.log(e);
    }
  }

  return (
    <StyledWrapper>
      {/* <p>export as pdf/ docx</p>
      <p>print me</p>
      <p>last updated: today</p> */}

      <div className='iframe'>
        <iframe
          ref={ref}
          src='https://d13b2cruxwxefb.cloudfront.net/resume.html'
          srcDoc={html}
          height={IFHeight}
          width={IFWidth}
          frameBorder='0'
          onLoad={setIframe}
        />
      </div>
    </StyledWrapper>
  );
}


