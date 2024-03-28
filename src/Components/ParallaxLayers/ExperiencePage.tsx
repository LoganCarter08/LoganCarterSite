import { Parallax, ParallaxLayer, IParallaxLayer, IParallax } from '@react-spring/parallax'
import { Stack } from 'react-bootstrap'

export function ExperiencePage() {
    const alignCenter = { display: 'flex', alignItems: 'center' }

    // this feels like a dumb way of doing this. Clean this up at some point. 
    const companyList = ["Leidos", "SigmaTEK"];
    let currentIndex = 0;

    // let's N companies here in case I want to add more later. 
    function moveToNextCompany() {
        document.getElementById("job" + currentIndex.toString() + "_experience")?.classList.add("hidden");

        currentIndex = (currentIndex + 1) == companyList.length ? 0 : currentIndex + 1;

        document.getElementById("job" + (currentIndex).toString() + "_experience")?.classList.remove("hidden");
        updateCompanyName();
    }
    
    function moveToPreviousCompany() {
        document.getElementById("job" + currentIndex.toString() + "_experience")?.classList.add("hidden");

        currentIndex = (currentIndex - 1) < 0 ? companyList.length - 1 : currentIndex - 1;

        document.getElementById("job" + (currentIndex).toString() + "_experience")?.classList.remove("hidden");
        updateCompanyName();
    }

    function updateCompanyName() {
        let companyName = document.getElementById("companyName");
        if (companyName && companyName.innerHTML) {
            companyName.innerHTML = companyList[currentIndex];
        }
    }

    return (
        <>
            <ParallaxLayer className="page3Layer" offset={1.45} speed={0.5} style={{ ...alignCenter, justifyContent: 'center', zIndex: 100 }}>
                <Stack direction="vertical" gap={3} style={{...alignCenter, justifyContent: 'center'}}>
                <Stack direction="horizontal" gap={5} style={{...alignCenter, justifyContent: 'center'}}>
                        <img onClick={moveToPreviousCompany} className="leftArrow" src={process.env.PUBLIC_URL + '/rightArrow.svg'}/>
                        <h2 id="companyName" style={{color: "white"}}>{companyList[currentIndex]}</h2>
                        <img onClick={moveToNextCompany} className="rightArrow" src={process.env.PUBLIC_URL + '/rightArrow.svg'}/>
                </Stack>
                <div id="job0_experience">
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
                                            <span><img className="inlineLogo" src={process.env.PUBLIC_URL + '/c++Logo.svg'}/> C++,</span> <span><img className="inlineLogo" src={process.env.PUBLIC_URL + '/pythonLogo.png'}/> Python,</span> <span><img className="inlineLogo" src={process.env.PUBLIC_URL + '/afsimLogo.webp'}/> AFSIM</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Stack>
                </div>

                <div id="job1_experience" className="hidden">
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
                                        <td>Post Processor Developer</td>
                                        <td>
                                            Designed and maintained 10-20 concurrent Pascal based post processor projects a 
                                            week working directly with customers to optimize their machine motion for 
                                            increased reliability, production quality, and safety. 
                                            
                                            Gathered requirements for and developed custom C# plugins to enhance core application 
                                            functionality to meet client needs.
                                        </td>
                                        <td>
                                        <span><img className="inlineLogo" src={process.env.PUBLIC_URL + '/csharpLogo.png'}/> C#,</span> <span><img className="inlineLogo" src={process.env.PUBLIC_URL + '/pascalLogo.png'}/> Pascal</span>
                                        </td>
                                    </tr>
                                    <tr className="experienceTable">
                                        <td>Applications Engineer</td>
                                        <td>
                                            Worked directly with customers to troubleshoot and solve issues they faced by writing 
                                            scripted Pascal directly on the customer's machines while on the phone with them. 
                                        </td>
                                        <td>
                                            <span><img className="inlineLogo" src={process.env.PUBLIC_URL + '/pascalLogo.png'}/> Pascal</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </Stack>
                </div>
                </Stack>
            </ParallaxLayer>

            <ParallaxLayer offset={1.45} speed={0.5} style={{zIndex: 1}}>
                {/*<Image src="/page3backgroundPic.png" fluid style={{height:"100%"}}/>*/}
                <img src={process.env.PUBLIC_URL + '/page3backgroundPicBlack.png'} style={{height:"110%", ...alignCenter, justifyContent: 'center', float:"right"}}/>
            </ParallaxLayer>

            <ParallaxLayer offset={1.45} speed={0.25} style={{zIndex: 1}}>
                <img src={process.env.PUBLIC_URL + '/page3backgroundPicLightGray.png'} style={{height:"110%", float:"right"}}/>
            </ParallaxLayer>

            <ParallaxLayer offset={1.45} speed={0.25} style={{zIndex: 1}}>
                <img src={process.env.PUBLIC_URL + '/page3backgroundPicDarkGray.png'} style={{height:"110%"}}/>
            </ParallaxLayer>
        </>
    )
}