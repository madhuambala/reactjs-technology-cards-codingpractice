import './index.css'

const CardFullDetails = props => {
  const {eachCardDetails} = props
  const {title, description, imgUrl, className} = eachCardDetails
  return (
    <li className={`${className} each-card-container`}>
      <h2 className="heading2">{title}</h2>
      <p className="paragraph">{description}</p>
      <div className="img-container">
        <img className="image" src={imgUrl} alt={title} />
      </div>
    </li>
  )
}
export default CardFullDetails
