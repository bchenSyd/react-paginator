import React from "react";
import styled from "styled-components";

const StyledWrapper = styled.div`
  span,
  a {
    &:not(:first-child) {
      margin-left: 20px;
    }
  }
`;

const Paginator = ({
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
        <a href="#" key="page_1" onClick={onPageNavigation(1)}>
          1
        </a>
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
        <a
          href="#"
          key={`page_${totalPageNumber}`}
          onClick={onPageNavigation(totalPageNumber)}
        >
          {totalPageNumber}
        </a>
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
          <a href="#" key={`page_${p}`} onClick={onPageNavigation(p)}>
            {p}
          </a>
        )
      )}
      {showRightLump()}
    </StyledWrapper>
  );
};

export default Paginator;
