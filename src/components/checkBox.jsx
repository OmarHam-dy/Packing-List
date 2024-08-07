import { useState } from "react";

function CheckBox({ packed, togglePackedStatus }) {
  const [isHoverd, setIsHovered] = useState(false);

  const unpackedElement = (
    <i
      className="unpacked fa-regular fa-square-check me-2"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={togglePackedStatus}
    ></i>
  );
  const packedElement = (
    <i
      className="packed fa-solid fa-square-check me-2 text-success "
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={togglePackedStatus}
    ></i>
  );

  const getElement = function () {
    if (isHoverd) return packed ? unpackedElement : packedElement;
    else return packed ? packedElement : unpackedElement;
  };

  return <>{getElement()}</>;
}

export default CheckBox;
