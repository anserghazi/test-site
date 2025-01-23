import React from "react"
import styled from "styled-components"
import Layout from "../components/Layout"
import "@fontsource/material-icons-outlined"
import "@fontsource/yantramanav"
import "../assets/css/global.css"

const Error = () => {
  return (
    <Layout>
      <Wrapper>
        <div class="project_section">
          <div class="project_content">
            <div class="project_header">
              <h1>This page doesn't exist :^(</h1>
            </div>
          </div>
        </div>
      </Wrapper>
    </Layout>
  )
}

const Wrapper = styled.div`
  margin-top: 7px;
  margin-bottom: 200px;
  min-height: 100vh;

  .project_section {
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
  }

  .project_content {
    display: flex;
    max-width: 1100px;
    gap: 25px;
    margin-left: 25px;
    margin-right: 25px;
    margin-top: 25px;
  }

  .project_header {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    background-color: #181f24;
    flex-basis: 0;
    flex-grow: 1;
    padding: 15px;
  }

  h1 {
    font-family: "Yantramanav", sans-serif;
    font-size: 60px;
    font-weight: 700;
    color: white;
    display: inline;
  }
`
export default Error
