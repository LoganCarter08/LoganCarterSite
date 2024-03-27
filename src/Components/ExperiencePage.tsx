import { Parallax, ParallaxLayer, IParallaxLayer, IParallax } from '@react-spring/parallax'
import { Stack } from 'react-bootstrap'

export function ExperiencePage() {
    const alignCenter = { display: 'flex', alignItems: 'center' }
    
    return (
        <>
            <ParallaxLayer className="page3Layer" offset={1.45} speed={0.5} style={{ ...alignCenter, justifyContent: 'center', zIndex: 100 }}>
                    <div id="leidosExperience">
                    <Stack direction="vertical" gap={3} style={{...alignCenter, justifyContent: 'center'}}>
                        <h2 style={{color: "white"}}>Leidos</h2>
                        <div className="tableDiv" style={{color: "white"}}>
                            <table style={{textAlign: "center"}}>
                                <tbody>
                                <tr className="experienceTable"> 
                                    <th>Title</th>
                                    <th>Description</th>
                                    <th>Tech Stack</th>
                                </tr>
                                <tr className="experienceTable" style={{backgroundColor: "#3E3E3E"}}>
                                    <td>Technical Lead Software Developer</td>
                                    <td>
                                        Lead a team of four developers to build a government customer facing webstore that securely
                                        displays interactable 3D models of their chosen configuration of Department of 
                                        Defense controlled hardware and components. 
                                    </td>
                                    <td>
                                        <span><img className="inlineLogo" src={process.env.PUBLIC_URL + '/logo192.png'}/> ReactJS,</span> <span><img className="inlineLogo" src={process.env.PUBLIC_URL + '/djangoLogo.png'}/> Django,</span> <span><img className="inlineLogo" src={process.env.PUBLIC_URL + '/sqliteLogo.png'}/> SQLite,</span> <span><img className="inlineLogo" src={process.env.PUBLIC_URL + '/threejsLogo.png'}/> Three.js,</span> <span><img className="inlineLogo" src={process.env.PUBLIC_URL + '/panda3dLogo.png'}/> Panda3D</span>
                                    </td>
                                </tr>
                                <tr className="experienceTable">
                                    <td>Backend Software Developer</td>
                                    <td>
                                        Solely built and managed a Django and Postgres backend while assisting the front end team with 
                                        building a customer facing portal to allow DoD customers to have real time feedback 
                                        and status on their missions, assets, funding, and staffing.
                                    </td>
                                    <td>
                                        <span><img className="inlineLogo" src={process.env.PUBLIC_URL + '/djangoLogo.png'}/> Django,</span> <span><img className="inlineLogo" src={process.env.PUBLIC_URL + '/postgresLogo.png'}/> Postgres</span>
                                    </td>
                                </tr>
                                <tr className="experienceTable" style={{backgroundColor: "#3E3E3E"}}>
                                    <td>Project Lead Software Developer</td>
                                    <td>
                                        Sole developer on two multi-year C++ projects simulating military vehicles and sensing 
                                        equipment for mission effectiveness and reliability for multiple branches of the United 
                                        States military. 
                                    </td>
                                    <td>
                                        <span><img className="inlineLogo" src={process.env.PUBLIC_URL + '/c++Logo.svg'}/> C++,</span> <span><img className="inlineLogo" src={process.env.PUBLIC_URL + '/pythonLogo.png'}/> Python,</span> <span><img className="inlineLogo" src={process.env.PUBLIC_URL + '/afsimLogo.webp'}/> AFSIM</span>
                                    </td>
                                </tr>
                                </tbody>
                            </table>
                        </div>
                    </Stack>
                    </div>
            </ParallaxLayer>

            <ParallaxLayer offset={1.45} speed={0.5} style={{zIndex: 1}}>
                {/*<Image src="/page3backgroundPic.png" fluid style={{height:"100%"}}/>*/}
                <img src={process.env.PUBLIC_URL + '/page3backgroundPicBlack.png'} style={{height:"110%", ...alignCenter, justifyContent: 'center'}}/>
            </ParallaxLayer>

            <ParallaxLayer offset={1.45} speed={0.5} style={{zIndex: 1}}>
                <img src={process.env.PUBLIC_URL + '/page3backgroundPicLightGray.png'} style={{height:"110%"}}/>
            </ParallaxLayer>

            <ParallaxLayer offset={1.45} speed={0.25} style={{zIndex: 1}}>
                <img src={process.env.PUBLIC_URL + '/page3backgroundPicDarkGray.png'} style={{height:"110%"}}/>
            </ParallaxLayer>
        </>
    )
}