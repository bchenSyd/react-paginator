import React from "react";
import styled from "styled-components";
import Cross from "../icons/cross";

const StyledIconRight = styled(Cross)`
  &:hover {
    cursor: pointer;
  }
  float: right;
  margin-right: 5px;
`;

const StyledModalBackdrop = styled.div`
  position: fixed;
  background-color: #000;
  background-color: rgba(0, 0, 0, 0.5);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 98;
`;
const StyledModalContentWrapper = styled.div`
  position: absolute;
  background-color: #fff;
  border-radius: 20px 20px 0 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  z-index: 99;
  opacity: 1;
  left:0;
  bottom: 0;
  width: 100%;
  height: 60%;
  padding: 10px;
  box-sizing:border-box;
`;

export const Flyout = ({ onClose, children }) => {
  const handleClick=()=>{
    onClose();
  }
  return (
    <>
      <StyledModalBackdrop />
      <StyledModalContentWrapper>
        <StyledIconRight onClick={handleClick} />
        {children}
      </StyledModalContentWrapper>
    </>
  );
};
