import "../css/Pages.css";

const Pages = ({ nroPaginas, changePage, productsperPage,handleChangePage,currentPage }) => {
 
  

  const handleChangePageSum = valor => {
    if (currentPage <= nroPaginas) {
      handleChangePage(currentPage + valor);
    }
  };
  const handleChangePageMinus = valor => {
    if (currentPage > 1) {
      handleChangePage(currentPage + valor);
    }
  };

  return (
    <div className="containerButtons">
      <button
        onClick={() => {
          changePage(-productsperPage);
          handleChangePageMinus(-1);
        }}
        disabled={currentPage === 1 ? "true" : ""}
      >
        {" "}
        Atras
      </button>
      <label>
        {currentPage} DE {nroPaginas}
      </label>
      <button
        onClick={() => {
          changePage(productsperPage);
          handleChangePageSum(1);
        }}
        disabled={currentPage >= nroPaginas ? "disabled" : ""}
      >
        Adelante
      </button>
    </div>
  );
};

export default Pages;
