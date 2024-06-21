// const Data = [
//     {
//         name:'Gowtham',
//         city:'tirupur',
//         description:"Senior dev" ,
//         skills :["html","css","js","React"],
//         online:true
//     },
//     {
//         name:'Navin',
//         city:'tirupur',
//         description:"Junior dev" ,
//         skills :["html","css","js","React"],
//         online:true
//     },
//     {
//         name:'Mani',
//         city:'tirupur',
//         description:"Super Senior dev" ,
//         skills :["html","css","js","React"],
//         online:true
//     },

// ]

// function User(props) {
//     return(
//         <div>
//             <p>{props.online ? "online" : "Offline"}</p>
//             <div>
//                 <h1>{props.name}</h1>
//                 <h2>{props.city}</h2>
//                 <h5>{props.description}</h5>
//                 <div >
//                 <button>Messgae</button>
//                 <button style={{marginLeft:'10px'}}>Following</button>
//                 </div>
//                 <div>

//                     <h4>Skills</h4>
//                     <ul>
//                     {props.skills.map((skill,index) => {
//                         <li key={index}>{skill}</li>
//                     })}
//                     </ul>
//                 </div>
//             </div>
//         </div>
//     )
// }


// export const CardComp = () => {
//   return (
//     <>
//     {Data.map((val,index) => {
//         <User key={index} name={val.name} city={val.city} discription={val.description} skills= {val.skills} online={val.online} />
//     })}
//     </>
//   )
// }



// export default CardComp;


const Data = [
    {
        name: 'Gowtham',
        city: 'tirupur',
        description: "Senior dev",
        skills: ["html", "css", "js", "React"],
        online: true
    },
    {
        name: 'Navin',
        city: 'tirupur',
        description: "Junior dev",
        skills: ["html", "css", "js", "React"],
        online: true
    },
    {
        name: 'Mani',
        city: 'tirupur',
        description: "Super Senior dev",
        skills: ["html", "css", "js", "React"],
        online: false
    },
];

function User(props) {
    return (
        <div style={{border:'2px solid ',width:'400px', textAlign:'center',display:'grid'}}>
            <p>{props.online ? "Online" : "Offline"}</p>
            <div>
                <h1>{props.name}</h1>
                <h2>{props.city}</h2>
                <h5>{props.description}</h5>
                <div>
                    <button>Message</button>
                    <button style={{ marginLeft: '10px' }}>Following</button>
                </div>
                <div>
                    <h4>Skills</h4>
                    <ul>
                        {props.skills.map((skill, index) => (
                            <p key={index}>{skill}</p>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export const CardComp = () => {
    return (
        <>
            {Data.map((val, index) => (
                <User key={index} name={val.name} city={val.city} description={val.description} skills={val.skills} online={val.online} />
            ))}
        </>
    );
}

export default CardComp;
