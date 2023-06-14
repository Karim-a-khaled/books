import mainPicture from '../assets/landing-page-image-removebg-preview (1).png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import '../styles/index.css'
import { useState } from 'react';


function Body() {
  const [theBookName,setTheBookName] = useState('')
  const handleInput = event => {setTheBookName(event.target.value)}

  function fetchingBooks() {
    const bookName = theBookName;
    console.log(theBookName)
    const API_URL = `https://www.googleapis.com/books/v1/volumes?q=${bookName}`;

    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => {
        data.items.forEach((book) => {
          displayingBooks(book)
        });
      });
  }

  function displayingBooks(book){
    return(
      <Card style={{ width: '18rem' }} key={book.title}>
        <Card.Body>
          <Card.Title>{book.title}</Card.Title>
          <Card.Text>{book.description}</Card.Text>
          <Button className="btn-custom">View Book</Button>
        </Card.Body>
      </Card>
    )
  }

  return (
    <>
      <Container fluid className='Body-body container'>
        <Row>
          <Col className="content">  
            <h1>Online Library</h1>
            <h2 className='text-center'>Empower Your Mind</h2>
            <div className="inp-btn">
              <input onChange={handleInput} value={theBookName} placeholder='Book Name...' className='body-input-custom' type="text" />
              <button onClick={fetchingBooks} className='btn btn-custom'>Search A Book</button>
            </div>
          </Col>
          <Col className='image'><img src={mainPicture} alt=""/></Col>
        </Row>
    </Container>
    </>
  );
}

export default Body;

