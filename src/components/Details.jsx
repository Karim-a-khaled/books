import { useParams } from "react-router-dom"
import books from "../Data/books";

export default function Details() {
  let bookId = useParams().bookid
  let book = books.find((book)=>book.id === parseInt(bookId))


  return (
    <>
      <h1>{book.title}</h1>
    </>
  )
}
