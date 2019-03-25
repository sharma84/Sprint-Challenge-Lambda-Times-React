import React from "react";

// Refactor this component to use styled components and not classNames.
// You can find the corresponding CSS in the CSS/index.css file

import styled from "styled-components";

const StyledTopBar = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: none;
  flex-direction: row;
  position: fixed;
  height: 44px;
  background-color: #333;
`;
const StyledContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: none;
  align-items: none;
  flex-direction: row;
  color: #fff;
  letter-spacing: 1px;
  padding: 0 10px;
`;
const StyledContainerLeft = styled.div`
  display: flex;
  justify-content: none;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
`;
const StyledLeftSpan = styled.span`
  cursor: pointer;
  margin-right: 25%;
  font-weight: bold;
`;
const StyledContainerCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  flex: 3;
  font-size: 9px;
`;
const StyledCenterSpan = styled.span`
  cursor: pointer;
  margin-right: 5%;
  :last-child {
    margin-right: 0;
  }
  :hover {
    text-decoration: underline;
  }
  }
`;
const StyledContainerRight = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  flex-direction: row;
  flex: 1;
  font-size: 11px;
  font-weight: bold;
`;
const StyledRightSpan = styled.span`
  cursor: pointer;
`;


const TopBar = () => {
  return (
    <StyledTopBar>
      <StyledContainer>
        <StyledContainerLeft>
          <StyledLeftSpan>TOPICS</StyledLeftSpan>
          <StyledLeftSpan>SEARCH</StyledLeftSpan>
        </StyledContainerLeft>
        <StyledContainerCenter>
          <StyledCenterSpan>GENERAL</StyledCenterSpan>
          <StyledCenterSpan>BROWNBAG</StyledCenterSpan>
          <StyledCenterSpan>RANDOM</StyledCenterSpan>
          <StyledCenterSpan>MUSIC</StyledCenterSpan>
          <StyledCenterSpan>ANNOUNCEMENTS</StyledCenterSpan>
        </StyledContainerCenter>
        <StyledContainerRight>
          <StyledRightSpan>LOG IN</StyledRightSpan>
        </StyledContainerRight>
      </StyledContainer>
    </StyledTopBar>
  );
};

export default TopBar;
