import './index.css'

const EachSlide = props => {
  const {slide, onSlideClick} = props
  const {id, heading, description} = slide
  const slideClick = () => {
    onSlideClick(id)
  }
  return (
    <li
      testid={`slideTab${id}`}
      className="slide-container"
      onClick={slideClick}
    >
      <h1 className="slide-heading">{heading}</h1>
      <p className="slide-para">{description}</p>
    </li>
  )
}
export default EachSlide
