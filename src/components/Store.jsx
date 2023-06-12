import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import books from '../Data/books';

import '../styles/index.css';
import '../styles/Store.css';
import { Link } from 'react-router-dom';

function displayBooks() {
  return books.map((book) => (
    <Card className='main-card-custom' style={{ width: '22rem' }} key={book.title}>
      <Card.Img variant="top" src={book.image} />
      <Card.Body className='card-body-custom'>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text className='card-text-custom'>{book.description}</Card.Text>
        <div className="btn-span d-flex">
          <Link to={`/${book.id}`} ><Button className="btn-custom align-self-end">View Book</Button></Link>
          <span className="price">$150.00</span>
        </div>
      </Card.Body>
    </Card>
  ));
}

export default function Store() {
  return <>
  <div className="container container-custom">

  {displayBooks()}
  </div>
  </>;
}