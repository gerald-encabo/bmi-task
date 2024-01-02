import "@/styles/button.scss"
import { ButtonTypes } from "@/types/TypeLists"

const Button = ({button}: ButtonTypes) => {
  return (
    <button><b>{button}</b></button>
  )
}

export default Button