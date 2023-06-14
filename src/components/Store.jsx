import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import books from '../Data/books';

import '../styles/index.css';
import '../styles/Store.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function Store() {
  const [searchedBooks,setBook] = useState(books)

  const search = (event)=>{
    let searched = event.target.value; 

    let theBook = books.filter((book)=>{
      return book.title.toLocaleLowerCase().includes(searched.toLocaleLowerCase())
    })
    setBook(theBook)
}

  function displayBooks() {
    return books.map((book) => (
      <>
      <Card className='main-card-custom' key={book.id} >
        <Card.Img variant="top" src={book.image} />
        <Card.Body className='card-body-custom'>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text className='card-text-custom'>{book.description}</Card.Text>
          <div className="btn-span d-flex">
            <Link to={`/${book.id}`} ><Button className="btn-custom">View Book</Button></Link>
            <span className="price">$150.00</span>
          </div>
        </Card.Body>
      </Card>
      </>
    ));
  }

return( 
  <>
    <div className="container input-container-custom"> 
      <input type="text" onChange={search}  placeholder='Search A Book..' className='input-custom' />
    </div>
    <div className="container container-custom">{displayBooks()}</div>
  </>
)








}

