const CommonElements = () => {
  return (
    <div>
      {" "}
      <svg width={800} height={600} style={{ border: "2px solid red" }}>
        <rect width={200} height={200} x={100} y={100} fill="blue" />

        <circle cx={300} cy={200} r={50} fill="yellow" />

        <text x={500} y={200} fill="blue" fontSize={"18"}>
          Hello world
        </text>
        {/* <rect width={200} height={200} x={100} y={350} fill="black">
          <path
            d="M25,25 L25,35 
            M75,25  L75,35
                 M15,75 C20,100 80,100 85,75 "
            stroke="white"
            stroke-width="2"
            fill="none"
          ></path>
        </rect> */}
      </svg>
      <svg width={100} height={100} style={{ border: "1px solid black" }}>
        <path
          d="M25,25 L25,35 
            M75,25  L75,35
                 M15,75 C20,100 80,100 85,75 "
          stroke="blue"
          stroke-width="8"
          fill="none"
        ></path>
      </svg>
    </div>
  );
};
export default CommonElements;
