import React from 'react';
import {Navbar, Nav,Form, FormControl, Button, NavDropdown} from 'react-bootstrap'
class TopNav extends React.Component {
    componentDidMount() {
        fetch('/api/barzelim/neo4j/devices')
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
                      <img
                        alt=""
                        src="../../dns-24px.svg"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />{'  '}
                <Navbar.Brand href="/"> SimpliDC</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />

                        <Navbar.Collapse id="basic-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link href="/">Home</Nav.Link>
                            </Nav>

                        </Navbar.Collapse>
                        <Navbar.Collapse className="justify-content-end">
                      <Navbar.Text>
                        Hello Guest !<a href="#login"></a>
                      </Navbar.Text>
                    </Navbar.Collapse>
                </Navbar>
        );
      }
}

export default TopNav;