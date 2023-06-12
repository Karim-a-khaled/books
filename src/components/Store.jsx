import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import books from '../Data/books';
import '../styles/index.css';
import '../styles/Store.css';

function displayBooks() {
  return books.map((book) => (
    <Card className='main-card-custom' style={{ width: '22rem' }} key={book.title}>
      <Card.Img variant="top" src={book.image} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text className='card-text-custom'>{book.description}</Card.Text>
        <div className="btn-span">
          <Button className="btn-custom">View Book</Button>
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