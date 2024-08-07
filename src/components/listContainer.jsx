import { useRef, useState } from "react";

function ListContainer({ getItems, applySorting, clearListItems, update }) {
  const sortingMode = useRef("1");

  const handleClick = function (e) {
    const newSortingMode = e.target.value;
    if (newSortingMode !== sortingMode.current || update.current) {
      applySorting(newSortingMode);
      sortingMode.current = newSortingMode;
      update.current = false;
      // console.log("Sorting happened");
    }
  };

  return (
    <div className="list-container p-3">
      <div className="container">
        <div className="items-container">
          <div className="row gx-3 gy-3">{getItems()}</div>
        </div>

        <div className="controllers d-flex justify-content-center mt-2">
          <select
            className="form-select me-2  rounded-pill"
            onClick={handleClick}
          >
            <option value={1} selected>
              SORT BY INPUT ORDER
            </option>
            <option value={2}>SORT BY PACKED STATUS</option>
            <option value={3}>SORT BY DESCRIPITION</option>
          </select>
          <button
            type="button"
            className="btn btn-light  rounded-pill px-3"
            onClick={clearListItems}
          >
            Clear
          </button>
        </div>
      </div>
    </div>
  );
}

export default ListContainer;
