import { useState } from 'react'
import Reviews from './components/Reviews'
import reviews from './data'

const App = () => {
  const [pos, setPos] = useState(0)
  const [user, setUser] = useState(reviews[pos])

  const nextReview = () => {
    let newPos = 0
    setPos((currentPos) => {
      if (currentPos != reviews.length - 1) {
        newPos = currentPos + 1
        setUser(reviews[newPos])
        console.log(newPos)
      } else {
        setUser(reviews[0])
      }
      return newPos
    })
  }

  const prevReview = () => {
    let newPos = reviews.length - 1
    setPos((currentPos) => {
      if (currentPos != 0) {
        newPos = currentPos - 1
        setUser(reviews[newPos])
      } else {
        setUser(reviews[reviews.length - 1])
      }
      return newPos
    })
  }

  const surpriseMe = () => {
    const max = reviews.length
    const min = 0
    var random = Math.floor(Math.random() * (max - min) + min)
    setPos(random)
    setUser(reviews[random])
  }
  return (
    <main>
      <Reviews
        user={user}
        nextReview={nextReview}
        prevReview={prevReview}
        surpriseMe={surpriseMe}
      />
    </main>
  )
}
export default App
