
// import React from "react";
// import { useState } from "react";

// const Test = () => {
    
//         const [firstname,setFirstName]=useState('')
//         const [email, setEmail]=useState('')
//         const [number, setNumber]=useState('')

//      const Validform =(e) =>{
//         e.preventDefault();
//         document.write(firstname,number,email)
//      }

//     return ( 
 

//         <>
//         <h1>hello everyone</h1>

//         <form onSubmit={(e) => Validform(e)}>
//              <label>
//                 First Name:
//                 <input name="firstname" 
//                 value={firstname}
//                 onChange={(e) =>setFirstName(e.target.value)}/>
//              </label>
            
//              <label>
//                 Email:
//                 <input name="email"
//                 value={email}
//                 onChange={(e) => setEmail(e.target.value)}/>
//              </label>
//              <label>
//                 phone Number:
//                 <input name="number"
//                 value={number}
//                 onChange={(e) => setNumber(e.target.value)}/>
//              </label>
//              <button type="submit" >submit</button>
//         </form>
     


//         <p>{number && number}</p>

//         </>

        
//     )

// }
// export default Test