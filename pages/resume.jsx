import React, { useEffect, useState } from 'react';

export default function Resume() {
  // useEffect(()=>{
  // 	if(query){
  // 		window.location.href=`https://d13b2cruxwxefb.cloudfront.net/resume-${query}.html`;
  // 	} else {
  // 		window.location.href='https://d13b2cruxwxefb.cloudfront.net/resume.html';
  // 	}
  // })
  const [site, setSite] = useState();
  const url = 'https://d13b2cruxwxefb.cloudfront.net/';

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
      <div dangerouslySetInnerHTML={{ __html: site }}></div>
    </>
  );
}
