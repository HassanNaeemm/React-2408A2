import { useContext } from 'react';

import { MyValue } from './TestContext';
import { Theme } from './ThemeContext';
function Home()
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
    //js
    return(
        // html
        <div style={{
            backgroundColor:MyTheme
        }}>
       
        <h2>Home</h2>
        <p>This is the home content</p>
        <button onClick={changetheme}>Switch To Light Mode</button>
         <button onClick={changethemedark}>Switch To Dark Mode</button>
        </div>
    )
}

export default Home