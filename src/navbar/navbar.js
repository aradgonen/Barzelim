import React from 'react';
import {Navbar, Nav,Form, FormControl, Button, NavDropdown} from 'react-bootstrap'
class TopNav extends React.Component {
    render() {
        return (
            <Navbar bg="dark" expand="lg">
                <Navbar.Brand href="#home">Barzelim</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                            </Nav>
                            <Form inline>
                                <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Navbar.Collapse>
                </Navbar>
        );
      }
}

export default TopNav;