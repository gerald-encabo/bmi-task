import { TitleTypes } from "@/types/TypeLists"
import '@/styles/title.scss'

const Title = ({heading}: TitleTypes) => {
  return (
    <div className="title-container">
      {heading}
    </div>
  )
}

export default Title