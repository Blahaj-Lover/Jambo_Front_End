import * as React from "react"
const Showcase = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={32}
    height={32}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m15.891 9.615 8.392 4.846-8.392 4.847L7.5 14.461l8.391-4.846ZM7.5 14.461v9.692L15.891 29m0 0 8.392-4.847v-9.691M15.89 29v-9.693M4.668 11.805V5.527m15.6 6.615V3m7.064 12.473v-3.668m-16.387-4.81v5.382"
    />
  </svg>
)
export default Showcase