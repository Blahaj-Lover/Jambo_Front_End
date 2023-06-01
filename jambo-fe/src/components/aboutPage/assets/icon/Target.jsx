import * as React from "react"
const Target = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={33}
    height={33}
    fill="none"
    {...props}
  >
    <path
      fill="#000"
      d="m27.25 25.836-2-2V21.25h-2v3.414l2.586 2.586 1.414-1.414Z"
    />
    <path
      fill="#000"
      d="M24.25 31.25a7 7 0 1 1 7-7 7.008 7.008 0 0 1-7 7Zm0-12a5 5 0 1 0 0 10 5 5 0 0 0 0-10Zm-8 9a12.013 12.013 0 0 1-12-12h-2a14.016 14.016 0 0 0 14 14v-2Zm-4-20H7.328a11.984 11.984 0 0 1 20.922 8h2a13.978 13.978 0 0 0-24-9.766V2.25h-2v8h8v-2Z"
    />
  </svg>
)
export default Target