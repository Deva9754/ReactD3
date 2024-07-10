import { useEffect } from "react";
import * as d3 from "d3";

const SelectElement = () => {
  useEffect(() => {
    const selectedElement = d3.selectAll(".my-class");
    // console.log({selectedElement})

    selectedElement.style("background-color", "aqua");

    const selectedElementP = d3.selectAll("p");
    // console.log({selectedElementP})

    selectedElementP.style("color", "red");
  });
  return (
    <div>
      <p>first p</p>
      <p>second p</p>
      <div className="my-class">element 1</div>
      <div className="my-class">element 2</div>
      <div className="my-class">element 2</div>
    </div>
  );
};
export default SelectElement;
