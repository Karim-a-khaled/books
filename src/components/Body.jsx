import mainPicture from '../assets/landing-page-image-removebg-preview (1).png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../styles/index.css'

function Body() {
  return (
    <>
      <Container fluid className='Body-body container'>
        <Row>
          <Col className="content">  
            <h1>Online Library</h1>
            <h2 className='text-center'>Empower Your Mind</h2>
            <div className="inp-btn">
              <input placeholder='Book Name...' className='body-input-custom' type="text" />
              <button className='btn btn-custom'>Search A Book</button>
            </div>
          </Col>
          <Col className='image'><img src={mainPicture} alt=""/></Col>
        </Row>
    </Container>
    </>
  );
}

export default Body;

