import { Parallax, ParallaxLayer, IParallaxLayer, IParallax } from '@react-spring/parallax'
import Image from 'react-bootstrap/Image';

export function TitlePage() {
    const alignCenter = { display: 'flex', alignItems: 'center' }
    
    return (
        <>
            <div className="page1">
                <ParallaxLayer className="page1Name" offset={0} speed={0.1} style={{ ...alignCenter, justifyContent: 'center', zIndex:999 }}>
                    <h1 className="myName" style={{fontSize: 80}}>Logan Carter</h1>          
                </ParallaxLayer>

                {/* is there a way to get this to stick at the top? sticky field doesn't really work... */}
                <ParallaxLayer className="page1Title" offset={0} style={{ ...alignCenter, justifyContent: 'center', zIndex:999 }}>
                    <div id="myTitle" className="myTitle" style={{marginTop: 150}}>
                        <p style={{fontSize: 25, marginTop: -2.5, marginBottom: 2.5}}>Software Developer</p>
                    </div>
                </ParallaxLayer>

                <ParallaxLayer offset={0} speed={0}>
                    <img className="backgroundImages" src={process.env.PUBLIC_URL + '/page1backgroundPicGray.png'} style={{height:"100%", width:"100%"}}/>
                </ParallaxLayer>

                <ParallaxLayer offset={0} speed={0.5} style={{aspectRatio: "auto"}}>
                    <img className="backgroundImages" src={process.env.PUBLIC_URL + '/page1backgroundPicBlack.png'} style={{height:"100%", width:"100%"}}/>
                </ParallaxLayer>
            </div>
        </>
    )
}