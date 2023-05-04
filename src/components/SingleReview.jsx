import { FaQuoteRight } from 'react-icons/fa'

function SingleReview({ user }) {
  return (
    <section key={user.id}>
      <div className="img-container">
        <img src={user.image} alt={user.name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight></FaQuoteRight>
        </span>
      </div>
      <div>
        <h2 className="author">{user.name}</h2>
        <h2 className="job">{user.job}</h2>
        <p className="info">{user.text}</p>
      </div>
    </section>
  )
}
export default SingleReview
