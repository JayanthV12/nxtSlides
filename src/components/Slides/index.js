import './index.css'
import EachSlide from '../EachSlide'

const Slides = props => {
  const {initialSlidesList, onSlideClick} = props

  return (
    <>
      <ol className="slides1">
        {initialSlidesList.map(each => (
          <EachSlide slide={each} key={each.id} onSlideClick={onSlideClick} />
        ))}
      </ol>
    </>
  )
}
export default Slides
