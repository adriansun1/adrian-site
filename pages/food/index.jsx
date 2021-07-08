import React from 'react';
import styled from 'styled-components';
import Navbar from '../../components/Navbar';
import {Grid, Card} from '../../components/Card';

const StyledWrapper = styled.div`
  padding: 8rem;
  height: 100vh;
  .title {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    margin-bottom: 2rem;
  }
  @media (max-width: 800px) {
  }
`;

export default function Food() {
  return (
    <StyledWrapper>
      <Navbar hasHome />
      <div className='title'>
        <h1>Recipes for things i made</h1>
        <input type='text' placeholder='eventually search bar that works' />
      </div>
      <p>
        These recipes are curated off the internet from sources I respect. Merry
        and myself have tried every one of the recipes listed, and have left a
        rating as well as any modification notes as well
      </p>
      <Grid>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
      </Grid>
    </StyledWrapper>
  );
}

/// TODO in a [slug].js file
// import React from 'react';
// import styled from 'styled-components';
// import Navbar from '../../components/Navbar';
// import matter from 'gray-matter';
// import ReactMarkdown from 'react-markdown';
// import fetch from 'isomorphic-fetch';
// import { BsStarFill, BsStarHalf, BsStar } from 'react-icons/bs';

// const StyledWrapper = styled.div`
//   padding: 8rem;
//   .title {
//     display: flex;
//     justify-content: space-between;
//     flex-wrap: wrap;
//     margin-bottom: 4rem;
//   }
//   .rating {
//     color: var(--orange);
//   }
//   @media (max-width: 800px) {
//   }
// `;

// export default function Food({ content, data }) {
//   const { Title, Rating, Effort, Time, Cuisine } = data;
//   function getIcon(index, rating) {
//     if (index < rating && rating % 1 !== 0) return <BsStarHalf />;
//     if (index < rating) return <BsStarFill />;
//     return <BsStar />;
//   }
//   return (
//     <StyledWrapper>
//       <Navbar hasHome />
//       <div className='title'>
//         <h1>Recipes for things i made</h1>
//         <input type='text' placeholder='eventually search bar that works' />
//       </div>
//       <h1>{Title}</h1>
//       <div className='rating'>
//         {new Array(5).fill('').map((_, index) => (
//           <span key={_+index}>{getIcon(index, Rating)}</span>
//         ))}
//       </div>
//       <ReactMarkdown source={content} />
//     </StyledWrapper>
//   );
// }

// Food.getInitialProps = async (context) => {
//   const { slug } = context.query;

//   const content = await import(`../../content/recipes/${slug}.md`);
//   const data = matter(content.default);

//   return { ...data };
// };
