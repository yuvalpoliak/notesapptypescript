import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

interface IHeaderProps {}

const Header: React.FunctionComponent<IHeaderProps> = (props) =>{
    return (
        <Navbar fixed='top' bg='dark' variant='dark'>
            <Container>
                <Navbar.Brand>
                    TypeScript Bootstarp example
                </Navbar.Brand>
            </Container>
        </Navbar>
    );
}
export default Header;