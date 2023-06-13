import { useParams } from "react-router-dom"
import books from "../Data/books";
import '../styles/index.css'

export default function Details() {
  let bookId = useParams().bookid
  let book = books.find((book)=>book.id === parseInt(bookId))


  return (
    <section>
    <div className="information">
      <h2>Title: {book.title}</h2>
      <h4>By {book.author}</h4>
      <h6>Description: {book.description} </h6>
    </div>
    <img src={book.image} alt={book.title} />
    </section>
  )
}
