import { Parallax, ParallaxLayer, IParallaxLayer, IParallax } from '@react-spring/parallax'

export function ExperiencePage() {
    const alignCenter = { display: 'flex', alignItems: 'center' }
    
    return (
        <>
            <ParallaxLayer className="page3Layer" offset={1.45} speed={0.25} style={{ ...alignCenter, justifyContent: 'center' }}>
                <div className="page3">
                <p style={{color: "white"}}> Make a nice little section about experience </p>
                </div>
            </ParallaxLayer>

            <ParallaxLayer offset={1.45} speed={0.5}>
                {/*<Image src="/page3backgroundPic.png" fluid style={{height:"100%"}}/>*/}
                <img src={process.env.PUBLIC_URL + '/page3backgroundPicBlack.png'} style={{height:"110%", ...alignCenter, justifyContent: 'center'}}/>
            </ParallaxLayer>

            <ParallaxLayer offset={1.45} speed={0.25}>
                <img src={process.env.PUBLIC_URL + '/page3backgroundPicLightGray.png'} style={{height:"110%"}}/>
            </ParallaxLayer>

            <ParallaxLayer offset={1.45} speed={0.75}>
                <img src={process.env.PUBLIC_URL + '/page3backgroundPicDarkGray.png'} style={{height:"110%"}}/>
            </ParallaxLayer>
        </>
    )
}