"use client";
import React from 'react';
import styled from 'styled-components';
import Header from '../components/Header';
import Navbar from '../components/Navbar';

const PageContainer = styled.div`
  display: flex;
  width: 100%;
  height: 100vh;
`;

const ContentContainer = styled.div`
  flex-grow: 1;
  padding: 20px;
  background-color: #f0f0f0;
`;

const FormContainer = styled.div`
  background-color: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const ReportIssue = () => {
  return (
    <PageContainer>
      <Navbar />
      <ContentContainer>
        <Header />
        <FormContainer>
          <h2>Report Issue</h2>
          <form>
            <div>
              <label htmlFor="issueTitle">Issue Title</label>
              <input type="text" id="issueTitle" name="issueTitle" />
            </div>
            <div>
              <label htmlFor="description">Description</label>
              <textarea id="description" name="description"></textarea>
            </div>
            <div>
              <label htmlFor="location">Location</label>
              <input type="text" id="location" name="location" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </FormContainer>
      </ContentContainer>
    </PageContainer>
  );
};

export default ReportIssue;

