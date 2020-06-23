import React, { Fragment } from 'react';

/** Componentes bootstrap */
import {Navbar, Container} from 'react-bootstrap';

/** Componentes */
import GiftExpert from './giftExpert';
function App() {
  return (
    <Fragment>
      <Navbar bg="dark" className="p-3"> 
        <Navbar.Brand href="#home" className="text-light">Brand link</Navbar.Brand>
      </Navbar>
      <Container className="mt-4">
        <GiftExpert/>
      </Container>
    </Fragment>
  );
}

export default App;
