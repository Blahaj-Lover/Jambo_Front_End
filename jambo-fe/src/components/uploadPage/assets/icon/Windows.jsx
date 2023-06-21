import * as React from "react"
const Windows = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#141313"
        d="m.8 5.6-.168-.782A.8.8 0 0 0 0 5.6h.8ZM23.2.8h.8a.8.8 0 0 0-.968-.782L23.2.8Zm0 22.4-.112.792A.798.798 0 0 0 24 23.2h-.8ZM.8 20H0a.8.8 0 0 0 .688.792L.8 20ZM.968 6.383l22.4-4.8-.336-1.565-22.4 4.8.336 1.565ZM22.4.8v22.4H24V.8h-1.6Zm.912 21.608-22.4-3.2-.224 1.584 22.4 3.2.224-1.584ZM1.6 20V5.6H0V20h1.6Zm-.8-7.2h22.4v-1.6H.8v1.6Zm8.8-9.6v17.6h1.6V3.2H9.6Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default Windows