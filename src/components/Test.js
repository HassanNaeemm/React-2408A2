import { useState } from "react";

function Test()
{
    var a = 10; // Normal Variable
    var [count,SetCount] = useState(0)//State Variable
    function change()
    {
        SetCount(
            count + 1
        )
        console.log(a)
    }
    return(
        <>
          <div className="container">
<h1>Test Component</h1>
          <h3>{count}</h3>
          <button onClick={change}>Change Value</button>
          </div>
        </>
    )
}

export default Test;