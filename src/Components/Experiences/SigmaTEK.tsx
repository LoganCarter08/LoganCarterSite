import { Stack } from 'react-bootstrap'

export function SigmaTEK({index}:{index:number}) {
    const alignCenter = { display: 'flex', alignItems: 'center' }
    
    return (
        <div id={"job" + index + "_experience"} className="hidden" style={{position:"absolute"}}>
            <Stack direction="vertical" gap={3} style={{...alignCenter, justifyContent: 'center'}}>
                <div className="tableDiv" style={{color: "white"}}>
                    <table style={{textAlign: "center"}}>
                        <tbody>
                            <tr> 
                                <td></td>
                                <td>
                                    February 2019 - February 2021
                                </td>
                                <td></td>
                            </tr>
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
                                <span><img className="inlineLogo" src={process.env.PUBLIC_URL + '/logos/csharpLogo.png'}/> C#,</span> 
                                <span><img className="inlineLogo" src={process.env.PUBLIC_URL + '/logos/pascalLogo.png'}/> Pascal</span>
                                </td>
                            </tr>
                            <tr className="experienceTable">
                                <td>Applications Engineer</td>
                                <td>
                                    Worked directly with customers to troubleshoot and solve issues they faced by writing 
                                    scripted Pascal directly on the customer's machines while on the phone with them. 
                                </td>
                                <td>
                                    <span><img className="inlineLogo" src={process.env.PUBLIC_URL + '/logos/pascalLogo.png'}/> Pascal</span>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Stack>
        </div>
    )
}