import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import fetch from 'isomorphic-fetch';
import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

const StyledWrapper = styled.div`
  padding: 8rem;
  .title {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 4rem;
  }
  .rating {
    color: var(--orange);
  }
  @media (max-width: 800px) {
  }
`;

export default function Resume({ content, data }) {
  const { Title, Rating, Effort, Time, Cuisine } = data;
  function getIcon(index, rating) {
    console.log('called');
    if (index < rating && rating % 1 !== 0) return <BsStarHalf />;
    if (index < rating) return <BsStarFill />;
    return <BsStar />;
  }
  return (
    <StyledWrapper>
      <Navbar hasHome />
      <div className='title'>
        <h1>Recipes for things i made</h1>
        <input type='text' placeholder='eventually search bar that works' />
      </div>
      <h1>{Title}</h1>
      <div className='rating'>
        {new Array(5).fill('').map((_, index) => (
          <span key={_+index}>{getIcon(index, Rating)}</span>
        ))}
      </div>
      <ReactMarkdown source={content} />
    </StyledWrapper>
  );
}

Resume.getInitialProps = async (context) => {
  const { slug } = context.query;

  const content = await import(`../../content/recipes/${slug}.md`);
  const data = matter(content.default);

  return { ...data };
};
