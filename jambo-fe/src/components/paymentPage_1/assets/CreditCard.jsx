import * as React from "react"
const CreditCard = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={29}
    height={20}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.5 14h8m-16-7h26m-6 7h2M3.5 1c-1 0-2 1-2 2v14c0 1 1 2 2 2h22c1 0 2-1 2-2V3c0-1-1-2-2-2h-22Z"
    />
  </svg>
)
export default CreditCard