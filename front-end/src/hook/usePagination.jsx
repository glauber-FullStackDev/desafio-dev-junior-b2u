import { useState } from "react";

const usePagination = (vehicles) => {
  const totalCard = window.screen.width < 500 ? 9 : 10;
  const [count, setCount] = useState(totalCard);
  const [page, setPage] = useState(1);

  const totalPages = Math.ceil(vehicles?.length / totalCard);

  const pagination = () => {
    if (count <= vehicles.length && page < totalPages) {
      setCount(count + totalCard);
      setPage(page + 1);
      window.scrollTo(0, 0);
    } else {
      setCount(totalCard);
      setPage(1);
    }
  };

  return { totalCard, totalPages, page, count, pagination };
};

export default usePagination;
