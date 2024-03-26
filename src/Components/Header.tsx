import { Container, Row, Col } from 'react-bootstrap'
import { Parallax, ParallaxLayer, IParallaxLayer, IParallax } from '@react-spring/parallax'

export function Header({parallax}: {parallax: any}) {
    window.addEventListener('scroll', handleScroll, true);

    function handleScroll(e: Event) {
      if (parallax.current) {
        //parallax.current.scrollTo(3);
        
        const myTitle = document.getElementById("myTitle");
        const navBar = document.getElementById("navBar"); 
        if (myTitle && navBar) {
          if (myTitle.getBoundingClientRect().y <= 0) {
            navBar.classList.remove("hidden");
            navBar.classList.add("shown");
          } else {
            navBar.classList.remove("shown");
            navBar.classList.add("hidden");
          }
        }
      }
    }

    return (
        <div id="navBar" className="hidden navBar">
            <Container fluid>
                <Row>
                    {/*<Col>
                        <p style={{fontSize: 25, marginTop: -2.5, marginBottom: 2.5}}>About</p>
                    </Col>
                    <Col>
                        <p style={{fontSize: 25, marginTop: -2.5, marginBottom: 2.5, marginLeft: 30}}>Experience</p>
                    </Col>*/}
                    <Col>
                        <p style={{fontSize: 25, marginTop: -2.5, marginBottom: 2.5}}>Logan Carter</p>
                    </Col>
                    {/*<Col>
                        <p style={{fontSize: 25, marginTop: -2.5, marginBottom: 2.5}}>Skills</p>
                    </Col>
                    <Col>
                        <p style={{fontSize: 25, marginTop: -2.5, marginBottom: 2.5}}>Contact</p>
                    </Col>*/}
                </Row>
            </Container>
        </div>
    )
}