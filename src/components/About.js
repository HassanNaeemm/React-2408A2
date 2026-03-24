import { useContext } from 'react'
import './Home.css'
import { MyValue } from './TestContext'
import { Theme } from './ThemeContext'
function About()
{
    var {MyTheme,SetTheme} = useContext(Theme)
 function changetheme()
    {
        SetTheme("white")
    }
    function changethemedark()
    {
        SetTheme("black");
    }
    return(
        // html
        <>
        <div style={{
            backgroundColor:MyTheme
        }}>
        
        <h2>About</h2>
        <button onClick={changetheme}>Switch To Light Mode</button>
         <button onClick={changethemedark}>Switch To Dark Mode</button>
        </div>
        </>
    )
}
export default About