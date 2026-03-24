import { useState } from 'react';
import './Contact.css';
function Contact()
{
    var [error,Seterror] = useState()
    var [dis,setdis] = useState(true);
    // function checkvalidation()
    // {
    //    var a =  document.getElementById('inp').value
    //    if(a.length > 8)
    //    { 
    //     console.log("Filled")
    //     Seterror("Form has been submitted")
    //     setdis(false);
    //     console.log(setdis)
    //    }
    //    else
    //    {
    //     console.log("Empty")
    //     Seterror("Please fill in the field")
    //     setdis(true)
    //     console.log(setdis)
    //    }
    // }
    return(
        // html
        <>
        <div className="container">
        <h2>Contact Form</h2>
        <input id="inp" type="text" className="w-100 p-1"/>
        <p className="text-danger">{error}</p>
        <button disabled={dis} className="btn btn-success my-2">Submit Data</button>
        </div>
        </>
    )
}
export default Contact