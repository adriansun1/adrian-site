import React, { useEffect } from 'react';

export default function Resume() {
	useEffect(()=>{
		const searchParams = new URL(document.location).searchParams;
		const query = searchParams.get("q");
		if(query){
			window.location.href=`https://d13b2cruxwxefb.cloudfront.net/resume-${query}.html`;
		} else {
			window.location.href='https://d13b2cruxwxefb.cloudfront.net/resume.html';
		}
	})
  return (<></>);
}
