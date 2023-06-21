import * as React from "react"
const Windows = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={25}
    height={25}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#141313"
        d="m1.076 5.743-.168-.782a.8.8 0 0 0-.632.782h.8Zm22.4-4.8h.8a.8.8 0 0 0-.968-.782l.168.782Zm0 22.4-.112.792a.8.8 0 0 0 .912-.792h-.8Zm-22.4-3.2h-.8a.8.8 0 0 0 .688.792l.112-.792Zm.168-13.618 22.4-4.8-.336-1.564-22.4 4.8.336 1.564ZM22.676.943v22.4h1.6V.943h-1.6Zm.912 21.608-22.4-3.2-.224 1.584 22.4 3.2.224-1.584ZM1.876 20.143v-14.4h-1.6v14.4h1.6Zm-.8-7.2h22.4v-1.6h-22.4v1.6Zm8.8-9.6v17.6h1.6v-17.6h-1.6Z"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M.276.143h24v24h-24z" />
      </clipPath>
    </defs>
  </svg>
)
export default Windows