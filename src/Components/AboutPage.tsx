import { Parallax, ParallaxLayer, IParallaxLayer, IParallax } from '@react-spring/parallax'
import { Container, Row, Col, Stack } from 'react-bootstrap'

export function AboutPage() {
    const alignCenter = { display: 'flex', alignItems: 'center' }

    return (
        <>
            <ParallaxLayer className="page2Layer" offset={0.99} speed={0.5} style={{ zIndex: 100, ...alignCenter, justifyContent: 'center' }}>
                <div className="page2">
                <Stack direction="vertical" gap={3}>
                    <h2 style={{color: "white", ...alignCenter, justifyContent: 'center'}}>About Me: </h2>
                    <div className="contentBox">
                        <p style={{margin: "10px"}}>
                            My name is Logan Carter and I am a software developer that 
                            has a passion for solving complex problems and developing efficient 
                            software solutions. My range of experience has given me the ability 
                            to quickly learn any tech stack and approach problems in new and 
                            unique ways. 
                        </p>
                    </div>
                    <h2 style={{color: "white", ...alignCenter, justifyContent: 'center'}}>Education: </h2>
                    <div className="contentBox">
                        <Stack direction="horizontal" gap={1} style={{ ...alignCenter, justifyContent: 'center'}}> 
                            <p style={{marginTop: '10px', marginBottom: '10px', fontSize: '15px'}}><span style={{fontSize: '20px'}}>Virginia Tech,</span> Blacksburg, VA <br></br> B.S. Computer Science <br></br> Human and Computer Interaction Capstone</p>
                        </Stack>
                    </div>
                </Stack>    
                </div>
            </ParallaxLayer>

            {/* add our black background with another layer*/}
            <ParallaxLayer offset={0.99} speed={0.5} style={{backgroundColor: "black"}}></ParallaxLayer>

            <ParallaxLayer offset={0.99} speed={0.5}>
                <img src={process.env.PUBLIC_URL + '/page2backgroundPicLightGray.png'} style={{height:"100%"}}/>
            </ParallaxLayer>

            <ParallaxLayer offset={0.99} speed={0.4}>
                <img src={process.env.PUBLIC_URL + '/page2backgroundPicDarkGray.png'} style={{height:"100%"}}/>
            </ParallaxLayer>

            <ParallaxLayer offset={0.99} speed={0.75}>
                <img src={process.env.PUBLIC_URL + '/page2backgroundPicHollow.png'} style={{height:"100%"}}/>
            </ParallaxLayer>

            
        </>
    )
}