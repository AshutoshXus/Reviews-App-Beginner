import SingleReview from './SingleReview'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

function Reviews({ user, nextReview, prevReview, surpriseMe }) {
  return (
    <section className="review">
      <SingleReview user={user} />
      <div className="btn-conatiner">
        <button
          className="prev-btn"
          onClick={() => {
            prevReview()
          }}
        >
          <FaChevronLeft></FaChevronLeft>
        </button>
        <button
          className="next-btn"
          onClick={() => {
            nextReview()
          }}
        >
          <FaChevronRight></FaChevronRight>
        </button>
      </div>

      <div>
        <button
          className="btn-hipster btn"
          style={{ marginTop: '1rem' }}
          onClick={() => {
            surpriseMe()
          }}
        >
          Surprise Me
        </button>
      </div>
    </section>
  )
}
export default Reviews
