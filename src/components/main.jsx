import { useRef, useState } from "react";
import Form from "./form";
import ListContainer from "./listContainer";
import ListItem from "./listItem";
import Statistics from "./statistics";

function Main() {
  const [listItems, setListItems] = useState(
    JSON.parse(localStorage.getItem("listItems"))
      ? JSON.parse(localStorage.getItem("listItems"))
      : []
  );
  const id = useRef(0);
  const update = useRef(false);

  const setData = function (list) {
    setListItems(list);
    localStorage.setItem("listItems", JSON.stringify(list));
  };

  const addItem = function (item, setItem) {
    if (item.name.trim() === "") {
      swal("Warning", "Enter valid item", "warning");
      return;
    }
    setData([...listItems, { ...item, id: id.current }]);
    id.current = id.current + 1;
    update.current = true;
    setItem({
      id: -1,
      name: "",
      quantity: 1,
      packed: false,
    });
    // console.log(listItems.current);
  };

  const deleteItem = function (id) {
    setData(listItems.filter((item) => item.id != id));
    update.current = true;
  };

  const togglePackedStatus = function (id) {
    const item = listItems.find((item) => item.id == id);
    item.packed = !item.packed;
    update.current = true;
    setData([...listItems]);
  };

  const getItems = function () {
    return listItems.map((item, i) => (
      <div className="col-auto" key={i}>
        <ListItem
          item={item}
          deleteItem={deleteItem}
          togglePackedStatus={togglePackedStatus}
        />
      </div>
    ));
  };

  const applySorting = function (sortingMode) {
    let sortedList = [...listItems];
    switch (sortingMode) {
      case "1":
        sortedList.sort((a, b) => a.id - b.id);
        break;
      case "2":
        sortedList.sort((a, b) => (a.packed && !b.packed ? 1 : -1));
        break;
      case "3":
        sortedList.sort((a, b) => (a.name > b.name ? 1 : -1));
        break;
      default:
        console.error(`Wrong sorting mode (${sortingMode})`);
    }

    setListItems(sortedList);
  };

  const clearListItems = async function () {
    const approved = await swal({
      title: "Are you sure?",
      text: "All items will be removed",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    });
    if (approved) {
      setData([]);
      swal("Done", "", "success");
    }
  };
  const getStatistics = function () {
    const packed = listItems.reduce((s, { packed }) => (packed ? s + 1 : s), 0);
    return {
      packed: packed,
      unpacked: listItems.length - packed,
    };
  };

  return (
    <>
      <Form addItem={addItem} />
      <ListContainer
        getItems={getItems}
        applySorting={applySorting}
        clearListItems={clearListItems}
        update={update}
      />
      <Statistics Statistics={getStatistics()} />
    </>
  );
}

export default Main;
