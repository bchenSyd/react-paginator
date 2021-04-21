import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  span,
  button {
    &:not(:first-child) {
      margin-left: 20px;
    }
  }
`;

const StyledButton = styled.button`
  background: none !important;
  border: none;
  padding: 0 !important;
  /*optional*/
  font-family: arial, sans-serif;
  /*input has OS specific font-family*/
  color: #069;
  text-decoration: underline;
  cursor: pointer;
`;
export const Paginator = ({
  totalPageNumber,
  currentPageNumber,
  onPageNavigation,
}) => {
  const pageNumbers = Array.from({ length: 5 })
    .map((_, i) => currentPageNumber - 2 + i)
    .filter((n) => n > 0 && n <= totalPageNumber);

  const showLeftLump = () => {
    const leftLump = [];
    if (currentPageNumber > 3) {
      leftLump.push(
        <StyledButton key="page_1" onClick={onPageNavigation(1)}>
          1
        </StyledButton>
      );
    }
    if (currentPageNumber > 4) {
      leftLump.push(<span key="page_left_lump">...</span>);
    }
    return leftLump;
  };
  const showRightLump = () => {
    const rightLump = [];
    if (totalPageNumber > currentPageNumber + 3) {
      rightLump.push(<span key="page_right_lump">...</span>);
    }
    if (totalPageNumber > currentPageNumber + 2) {
      rightLump.push(
        <StyledButton
          key={`page_${totalPageNumber}`}
          onClick={onPageNavigation(totalPageNumber)}
        >
          {totalPageNumber}
        </StyledButton>
      );
    }
    return rightLump;
  };
  return (
    <StyledWrapper>
      {showLeftLump()}
      {pageNumbers.map((p) =>
        p === currentPageNumber ? (
          <span key={`page_${p}`}>{p}</span>
        ) : (
          <StyledButton key={`page_${p}`} onClick={onPageNavigation(p)}>
            {p}
          </StyledButton>
        )
      )}
      {showRightLump()}
    </StyledWrapper>
  );
};

