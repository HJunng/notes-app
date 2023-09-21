import * as React from 'react';
import { Navbar, Container } from 'react-bootstrap';

interface IHeaderProps {
}

const Header: React.FunctionComponent<IHeaderProps> = (props) => {
  return (
    <Navbar expand='lg' className='bg-body-tertiary' fixed='top' bg='dark' variant='dark'>
      <Container>
          <Navbar.Brand href="#home">
            
            HJ's Notee App
          </Navbar.Brand>
        </Container>
    </Navbar>
  );
};

export default Header;
