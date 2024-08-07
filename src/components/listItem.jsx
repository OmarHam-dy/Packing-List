import CheckBox from "./checkBox";

function ListItem({
  item: { id, name, quantity, packed },
  deleteItem,
  togglePackedStatus,
}) {
  return (
    <>
      <div className=" list-item border border-2 border-light rounded-1 text-light ">
        <div
          className="m-2 d-flex align-items-center position-relative py-1"
          style={{ minWidth: "150px" }}
        >
          <div className="name ms-2 me-3">
            <CheckBox
              packed={packed}
              togglePackedStatus={() => togglePackedStatus(id)}
            />
            <span className="d-inline-block mb-2">{quantity}</span>{" "}
            <span className="fs-4 me-1">|</span>
            <span className="d-inline-block mb-2">{name}</span>
          </div>
          <i
            className="remove fa-solid fa-xmark position-absolute end-0 top-0"
            onClick={() => {
              deleteItem(id);
            }}
          ></i>
        </div>
      </div>
    </>
  );
}

export default ListItem;
