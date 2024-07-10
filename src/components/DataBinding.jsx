import { useEffect, useRef, useState } from "react";

const DataBinding = () => {
  const MyElementRef = useRef(null);
  const [barData, setBarData] = useState([10, 20, 30, 40, 50]);
  useEffect = () => {};
  return (
    <div>
      <h3>Data Binding</h3>
      <svg ref={MyElementRef}>
        <rect />
        <rect />
        <rect />
        <rect />
        <rect />
      </svg>
    </div>
  );
};
export default DataBinding;
