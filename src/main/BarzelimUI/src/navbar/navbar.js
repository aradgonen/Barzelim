import React from 'react';
import {Navbar, Nav,Form, FormControl, Button, NavDropdown} from 'react-bootstrap'
class TopNav extends React.Component {
    componentDidMount() {
        fetch('/api/devices')
        .then(res => res.json())
        .then((data) => {
          //this.setState({ contacts: data })
          console.log(data)
        })
        .catch(console.log)
      }
    render() {
        return (
            <Navbar bg="dark" expand="lg" variant="dark">
                <Navbar.Brand href="#home">Barzelim</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="#home">Home</Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                </Navbar>
        );
      }
}

export default TopNav;