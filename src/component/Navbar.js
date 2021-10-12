import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'


export default function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">KARAM</Navbar.Brand>
                    <Nav className="d-flex">
                        <Nav.Link href="#home">HOME</Nav.Link>
                        <Nav.Link href="#features">ABOUT US</Nav.Link>
                        <Nav.Link href="#pricing">SERVICE</Nav.Link>
                        <Nav.Link href="#home">PORTFOLIO</Nav.Link>
                        <Nav.Link href="#features">BLOG</Nav.Link>
                        <Nav.Link href="#pricing">CONTACT</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}


