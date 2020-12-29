import React from "react"
import { Link, navigate } from "gatsby"

import Image from "../components/image"
import SEO from "../components/seo"
import styled from "styled-components"
import GlobalStyles from "../style/GlobalStyles"

const StyledWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: slategrey;
  height: 100%;
  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    height: 100%;
    width: 100%;
  }
  .person {
    cursor: pointer;
    padding: 3rem;
  }
  .first {
    background-color: black;
    color: white;
  }
  .second {
    background-color: white;
  }
`

const IndexPage = () => (
  <StyledWrapper>
    <GlobalStyles />
    <SEO title="Home" />
    <div className="grid">
      <div className="first person" onClick={() => navigate("/professional")}>
        <Image />
        <h3>resume adrian</h3>
      </div>
      <div className="second person" onClick={() => navigate("/personal")}>
        <Image />
        <h3>casual adrian</h3>
      </div>
    </div>
  </StyledWrapper>
)

export default IndexPage
