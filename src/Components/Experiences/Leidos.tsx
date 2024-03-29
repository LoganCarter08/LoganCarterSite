import { Stack } from 'react-bootstrap'

export function Leidos({index}:{index:number}) {
    const alignCenter = { display: 'flex', alignItems: 'center' }

    return (
        <div id={"job" + index + "_experience"}>
            <Stack direction="vertical" gap={3} style={{...alignCenter, justifyContent: 'center'}}>
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
                                    <span><img className="inlineLogo" src={process.env.PUBLIC_URL + '/c++Logo.svg'}/> C++,</span> <span><img className="inlineLogo" src={process.env.PUBLIC_URL + '/pythonLogo.png'}/> Python,</span> <span><img className="inlineLogo" src={process.env.PUBLIC_URL + '/afsimLogo.png'}/> AFSIM</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Stack>
        </div>
    )
}