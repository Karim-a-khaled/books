
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../styles/index.css'
import logo from '../assets/logo.svg'

export default function Header() {
  let logoStyle = {width:"100px"}
  return (
    <Navbar className='navbar-custom' expand="lg">
      <Container fluid >
        <Navbar.Brand className='d-flex align-items-center' href="#"><img src={logo} alt="" style={logoStyle}/></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='nav-link-custom' href="#action1">Home</Nav.Link>
            <Nav.Link className='nav-link-custom' href="#action2">Store</Nav.Link>
            <Nav.Link className='nav-link-custom' href="#action2">Categories</Nav.Link>
          </Nav>
          <div className="d-flex align-items-center">

            <Nav.Link className='btn-custom2'>Sign In</Nav.Link>
            <Button className='btn-custom'>Sign Up</Button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

