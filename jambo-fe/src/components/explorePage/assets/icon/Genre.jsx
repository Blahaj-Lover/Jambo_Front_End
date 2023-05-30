import * as React from "react"
const Genre = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      stroke="#000"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.2}
      d="M10.858 6.816a1.8 1.8 0 1 0 0-3.602 1.8 1.8 0 0 0 0 3.602ZM4.856 12.818a1.8 1.8 0 1 0 0-3.601 1.8 1.8 0 0 0 0 3.601ZM9.058 9.217h3.601v3a.6.6 0 0 1-.6.601H9.658a.6.6 0 0 1-.6-.6V9.217ZM3.055 3.214h3.602v3.001a.6.6 0 0 1-.6.6H3.656a.6.6 0 0 1-.6-.6v-3Z"
    />
  </svg>
)
export default Genre