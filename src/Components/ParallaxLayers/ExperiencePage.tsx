import { Parallax, ParallaxLayer, IParallaxLayer, IParallax } from '@react-spring/parallax'
import { Stack } from 'react-bootstrap'
import { Leidos } from '../Experiences/Leidos';
import { SigmaTEK } from '../Experiences/SigmaTEK';

export function ExperiencePage() {
    const alignCenter = { display: 'flex', alignItems: 'center' }

    // this feels like a dumb way of doing this. Clean this up at some point. 
    const companyList = ["Leidos", "SigmaTEK"];
    let currentIndex = 0;

    function changeClass(setToClass: string) {
        let currentJobView = document.getElementById("job" + currentIndex.toString() + "_experience");
        if (currentJobView) {
            currentJobView.className = "";
            currentJobView.classList.add(setToClass);
        }
    }

    // let's N companies here in case I want to add more later. 
    function moveToNextCompany() {
        changeClass("slideLeftOut");

        currentIndex = (currentIndex + 1) == companyList.length ? 0 : currentIndex + 1;

        changeClass("slideLeftIn");
        updateCompanyName();
    }
    
    function moveToPreviousCompany() {
        changeClass("slideRightOut");
        
        currentIndex = (currentIndex - 1) < 0 ? companyList.length - 1 : currentIndex - 1;

        changeClass("slideRightIn");
        
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
                    <Stack direction="horizontal"  gap={5} className="experienceTableHeader" style={{justifyContent: 'center', zIndex:999, paddingBottom: 200, marginTop: -200}}>
                            <img onClick={moveToPreviousCompany} className="leftArrow" src={process.env.PUBLIC_URL + '/rightArrow.svg'}/>
                            <h2 id="companyName" style={{color: "white"}}>{companyList[currentIndex]}</h2>
                            <img onClick={moveToNextCompany} className="rightArrow" src={process.env.PUBLIC_URL + '/rightArrow.svg'}/>
                    </Stack>
                    
                    <Stack direction="horizontal" gap={5} style={{ justifyContent: 'center'}}>
                        <Leidos index={0}/>
                        <SigmaTEK index={1}/>
                    </Stack>
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