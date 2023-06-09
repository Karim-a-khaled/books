import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import books from '../Data/books';
import '../styles/index.css';

function displayBooks() {
  return books.map((book) => (
    <Card style={{ width: '18rem' }} key={book.title}>
      <Card.Img variant="top" src={book.image} />
      <Card.Body>
        <Card.Title>{book.title}</Card.Title>
        <Card.Text>{book.description}</Card.Text>
        <Button className="btn-custom">View Book</Button>
      </Card.Body>
    </Card>
  ));
}

export default function Books() {
  return <>
  <div className="container container-custom">

  {displayBooks()}
  </div>
  </>;
}