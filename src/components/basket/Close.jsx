const Close = (props) => {
  return (
    <svg
      onClick={props.onClick}
      width="24px"
      height="24px"
      viewBox="-0.5 0 25 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 21.32L21 3.32001"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M3 3.32001L21 21.32"
        stroke="#ffffff"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default Close;