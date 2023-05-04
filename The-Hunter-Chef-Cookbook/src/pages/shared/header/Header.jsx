/* eslint-disable no-unused-vars */
import React from 'react';
import { Button, Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import Marquee from 'react-fast-marquee';
import Categories from '../../Categories/Categories';







const Header = () => {
    return (
        <div>
            <h1 className='m-3 font-bold fs-1 fw-bold text-center fst-italic'>The Hunter Chef Cookbook</h1>
            {/* navbar */}

            <div className=''>

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
        <Navbar.Brand href="#home">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#Blogs">Blogs</Nav.Link>
            
            
              
          </Nav>
          <Nav>
            <Nav.Link href="#deets">profile</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
            <Button variant="success">login</Button>
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
{/* carousel img */}
{/* <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="/chef.JPG" className="d-block w-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
        <h5>First slide label</h5>
        <p>Some representative placeholder content for the first slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/src/assets/chef-2.JPG" className="d-block w-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
        <h5>Second slide label</h5>
        <p>Some representative placeholder content for the second slide.</p>
      </div>
    </div>
    <div className="carousel-item">
      <img src="/src/assets/chef-2.JPG" className="d-block w-100" alt="..."></img>
      <div className="carousel-caption d-none d-md-block">
        <h5>Third slide label</h5>
        <p>Some representative placeholder content for the third slide.</p>
      </div>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

            </div>
            <div className='text-success fs-3 text fst-italic text-center'>
              <Marquee speed={50}>
              “Cooking is not difficult. Everyone has taste, even if they don’t realize it. Even if you’re not a great chef, there’s nothing to stop you understanding the difference between what tastes good and what doesn’t.”
– Gerard Depardieu
              </Marquee>
            </div>
            <Categories></Categories> */}
          
 </div>
 </div>

)}

export default Header;