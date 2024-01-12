import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React + Alex</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App


function UserShelfPage(props) {
  const {books, setBooks} = props;
  const bookCards = [];


  // starting this with just one book sent in. will need to change to /api/view_all/<shelf_id>
  React.useEffect(() => {
    fetch(`/api/book/${book_id}`)
      .then((response) => response.json())
      .then((result) => setBooks(result));
  }, []);

  for (const book of Object.values(books)) {
    const bookCard = (
      <BookCard
      id={book.book_id}
      title={book.title}
      author={book.author}
      overview={book.overview}
      publish_date={book.publish_date}
      cover_pic={book.cover_pic}
      avg_rating={book.avg_rating}
      num_ratings={book.num_ratings}
      />
    );
  }

}

function BookCard(props) {
  const {
    id, 
    title, 
    author, 
    overview, 
    publish_date, 
    cover_pic,
    avg_rating,
    num_ratings} = props;

  return (
    <div className="card book_card">
      <h5>${title}</h5>
      <h6>${author}</h6>
      <img src={cover_pic} className="card-img-top" />
      <span>${avg_rating}</span>
    </div>
  )


}




// function BookDetailsPage(props) {
//   const {book_id} = props

//   React.useEffect(() => {
//     fetch(`/api/book/${book_id}`)
//       .then((response) => response.json())
//       .then((result) => setBook)
//   })
// }