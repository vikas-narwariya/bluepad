// import "./about.css";
// import { useState } from "react";
// import { FaStar } from "react-icons/fa";
// import Popup from "./Popup";

// const colors = {
//   orange: "#FFBA5A",
//   grey: "#a9a9a9",
// };

// const About = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const togglePopup = () => {
//     setIsOpen(!isOpen);
//   };

//   const [currentValue, setCurrentValue] = useState(0);
//   const [hoverValue, setHoverValue] = useState(undefined);
//   const stars = Array(5).fill(0);

//   const handleClick = (value) => {
//     setCurrentValue(value);
//   };

//   const handleMouseOver = (newHoverValue) => {
//     setHoverValue(newHoverValue);
//   };

//   const handleMouseLeave = () => {
//     setHoverValue(undefined);
//   };

//   return (
//     <>
//       <div className="info">
//         <a href="https://www.google.co.in/maps?hl=en&authuser=0">
//           Google Maps is a web mapping platform and consumer application offered
//           by Google. It offers satellite imagery, aerial photography, street
//           maps, 360° interactive panoramic views of streets (Street View),
//           real-time traffic conditions, and route planning for traveling by
//           foot, car, air (in beta) and public transportation. As of 2020, Google
//           Maps was being used by over 1 billion people every month around the
//           world.
//         </a>
//       </div>

//       <div className="container">
//         <form className="form">
//           <label for="fname">First Name</label>
//           <input
//             type="text"
//             id="fname"
//             name="firstname"
//             placeholder="Your name.."
//           />

//           <label for="lname">Last Name</label>
//           <input
//             type="text"
//             id="lname"
//             name="lastname"
//             placeholder="Your last name.."
//           />

//           <label for="cnumber">Contact Number</label>
//           <input
//             type="text"
//             id="cnumber"
//             name="cnumber"
//             placeholder="Your contact number"
//           />

//           <h2> Give your Feedback </h2>
//           <div className="stars">
//             {stars.map((_, index) => {
//               return (
//                 <FaStar
//                   key={index}
//                   size={24}
//                   onClick={() => handleClick(index + 1)}
//                   onMouseOver={() => handleMouseOver(index + 1)}
//                   onMouseLeave={handleMouseLeave}
//                   color={
//                     (hoverValue || currentValue) > index
//                       ? colors.orange
//                       : colors.grey
//                   }
//                   style={{
//                     marginRight: 10,
//                     cursor: "pointer",
//                   }}
//                 />
//               );
//             })}
//           </div>
//           <textarea
//             placeholder="What's your experience?"
//             className="textarea"
//           />

//           <input type="submit" value="Submit" onClick={togglePopup} />

//           <div>
//             {isOpen && (
//               <Popup
//                 content={
//                   <>
//                     <b>Thank for loving us!</b>
//                     <p>We are here to give our best</p>
//                     <button>Cancel</button>
//                   </>
//                 }
//                 handleClose={togglePopup}
//               />
//             )}
//           </div>
//         </form>
//       </div>
//     </>
//   );
// };

// export default About;
// import React, { useEffect,useState } from 'react'
// import axios from 'axios';
// import { Avatar,Paper,List, Divider, ListItem, ListItemAvatar, ListItemText } from '@material-ui/core';
// const About=()=>{
//     const [repo, setRepo] = useState([]);
   
//        const getRepo=()=>{
//        axios.get('https://www.googleapis.com/books/v1/volumes?q=subject:romance')       
//          .then((response)=>{
//           console.log(response);
//              const myRepo=response.data;
//              setRepo(myRepo);
//          });
//      };
//      useEffect(()=>getRepo(),[]);
//      return(

// <Paper>
// <div className="romance">
//            {repo.map((repos)=>(
//                        <List key={repos.id}>
//                            <ListItem alignItems="flex-start">
//                               {/* <ListItemAvatar>
//                                      <Avatar src={repos.avatar_url}/>

//                                </ListItemAvatar> */}
//                                <ListItemText
//                                  primary={repos.volumeInfo}
//                                 secondary={repos.acessInfo}
//                                />
//                    </ListItem>
//                            <Divider variant="inset" component="li"/>
//                        </List>
//                      ))}
//                      </div>
// </Paper>

//      );
// }

// export default About

// import React from "react";
// class About extends React.Component {

//   constructor() {
//   super();
//   this.state = {

//   }
// }

// componentDidMount() {


// let url = `https://www.googleapis.com/books/v1/volumes?q=subject:romance`;

//            fetch(url)
//            .then(response => response.json())
//            .then(data => data.volumeInfo => {
         
//              this.setState({
//                farm: x.farm,
//                id: x.id,
//                secret: x.secret,
//                server: x.server})
//            }))

//            console.log();
//  }


 


//     render() {
//       return (
//         <div>
          
//         </div>
//       );
//     }
//   }

// export default About

import React from "react";

export default class About extends React.Component {
  state ={
    loading: true,
    author: null,
  }
 async componentDidMount(){
   const url = "https://www.googleapis.com/books/v1/volumes?q=subject:romance";
   const response = await fetch(url);
   const data = await response.json();
   this.setState({ authors: data.items[0], loading: false});
  // console.log(data);
  
 }

 render () {
   return (
     <div>
       {this.state.loading || !this.state.books ? (
        <div> loading .. </div>
        ) : (
        <div>
          <div>{this.state.items.authors.title}</div>
          </div>
  )
          }
     </div>
   );
 };
}