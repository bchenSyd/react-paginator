easy to use

```js
export const Basic = () => {
  const totalPage = 10;
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(()=>{
    // fetch data and update your page data source here
  },[currentPage])
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
```

see [this](https://bochen2014.github.io/react-paginator)
