import React from 'react';
import Header from '../components/header';
import Footer from '../components/footer';
import { Container } from 'react-bootstrap';

const Shop = () => {
  return (
    <div>
      <Header />
      <Container className="my-5">
        <h1>Shop page</h1>
        <p>some items</p>
      </Container>
      <Footer />
    </div>
  );
};

export default Shop;