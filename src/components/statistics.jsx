function Statistics({ Statistics: { packed, unpacked } }) {
  const itemsLength = packed + unpacked;

  return (
    <>
      <div className="statistics d-flex justify-content-center align-items-center fst-italic">
        {!itemsLength
          ? "Start adding some items to your packing list 🚀"
          : `💼 You have ${itemsLength} ${
              itemsLength == 1 ? "item" : "items"
            } on your list, and you already packed ${packed} (${(
              (packed / itemsLength) *
              100
            ).toFixed(0)}%)`}
      </div>
    </>
  );
}

export default Statistics;
