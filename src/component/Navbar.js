import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'


export default function Header() {
    return (
        <>
            <Navbar bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand href="#home">KAR<a href="tryit.asp?filename=trycss_text">MA</a></Navbar.Brand>
                    <Nav className="d-flex">
                        <Nav.Link href="#home">HOME</Nav.Link>
                        <Nav.Link href="#ABOUT US">ABOUT US</Nav.Link>
                        <Nav.Link href="#SERVICE">SERVICE</Nav.Link>
                        <Nav.Link href="#PORTFOLIO">PORTFOLIO</Nav.Link>
                        <Nav.Link href="#BLOG">BLOG</Nav.Link>
                        <Nav.Link href="#CONTACT">CONTACT</Nav.Link>
                    </Nav>
                </Container>
            </Navbar>
        </>
    )
}


