import { useRef, useState } from "react";

function Form({ addItem }) {
  const [item, setItem] = useState({
    id: -1,
    name: "",
    quantity: 1,
    packed: false,
  });

  const handleChange = function (e) {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const increaseOrDecreaseQuantity = function (e) {
    const q = item.quantity;
    if (e.key == "ArrowUp") setItem({ ...item, quantity: Math.min(5, q + 1) });
    else if (e.key == "ArrowDown")
      setItem({ ...item, quantity: Math.max(1, q - 1) });
  };

  return (
    <form
      className="d-flex justify-content-center align-items-center flex-column flex-md-row"
      onSubmit={(e) => {
        e.preventDefault();
        addItem(item, setItem);
      }}
    >
      <div className="fst-italic ">What do you need for your 😍 trip? </div>
      <div className="d-flex mt-3 mt-md-0">
        <select
          name="quantity"
          value={item.quantity}
          onChange={handleChange}
          className="form-select rounded-pill mx-3 text-center"
        >
          <option value={1} selected>
            1
          </option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <div className="">
          <input
            type="text"
            className="form-control rounded-pill"
            placeholder="item..."
            name="name"
            value={item.name}
            onChange={handleChange}
            onKeyUp={increaseOrDecreaseQuantity}
          />
        </div>
        <button
          type="submit"
          className="btn btn-light rounded-pill ms-3 px-4 add"
        >
          Add
        </button>
      </div>
    </form>
  );
}

export default Form;
