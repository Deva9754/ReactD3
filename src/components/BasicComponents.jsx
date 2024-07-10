const BasicComponents = () => {
  return (
    <div>
      Basic Compoenets
      <br />
      <br />A Rectangle
      <svg width="100" height="100">
        <rect x="0" y="0" height="50" width="50" fill="blue" />
      </svg>
      <br />
      <br />A circle
      <svg width="100" height="100">
        <circle r="50" cx="50" cy="50" />
      </svg>
      <br />
      <br />
      <svg height="100" width="200">
        <ellipse cx="100" cy="50" rx="40" ry="20" />
      </svg>
      <br />
      <br />A Line
      <svg height={100} width={100}>
        <line x1="30" y1="5" x2="50" y2="40" stroke="gray" stroke-width="4" />
      </svg>
      <br />
      <br />A Polyline
      <svg height={100} width={100}>
        <polyline
          fill="none"
          stroke="red"
          strokeWidth="5"
          points="05,30
        30,65
        30,40
        50,40
        50,20
        70,20"
        />
      </svg>
      <br />
      <br /> A polygon
      <svg height={100} width={100}>
        <polygon
          fill="yellow"
          stroke="green"
          strokeWidth={4}
          points="05,30
        15,10
        25,30"
        />
      </svg>
    </div>
  );
};
export default BasicComponents;
