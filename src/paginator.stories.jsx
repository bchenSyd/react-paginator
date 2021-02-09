import React, { useState } from "react";
import Paginator from "./paginator";

export default { component: Paginator, title: "Examples / Paginator" };

export const Basic = () => {
  const totalPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  return (
    <>
      <h2>show content for page {currentPage}</h2>
      <Paginator
        totalPageNumber={totalPage}
        currentPageNumber={currentPage}
        onPageNavigation={(page) => () => {
          setCurrentPage(page);
        }}
      />
    </>
  );
};
export const WithArgs = (args) => <Paginator {...args} />;
WithArgs.args = {
  totalPageNumber: 1,
  currentPageNumber: 1,
  onPageNavigation: () => {},
};
