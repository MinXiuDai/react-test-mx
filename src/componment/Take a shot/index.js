// import React, { useState } from 'react'
import React , {useState} from 'react'

// import './style.scss'
// import Some from '../some'
import'./style.scss'

export default ()=>{
    const [userName,setUserName] = useState();
    // const [value,setValue] = useState("DaiMx");

    const getValue = e => {
        setUserName(e.target.value)
    }

    const doubleClick = () => {
        let pai = document.getElementById('pailepai')
        pai.style.display = "block";
        setTimeout(() => {
            pai.style.display = "none";

            setUserName("")
        }, 5000);
    }

    return(
        <div className="body">
           {/* <Some/> */}
            <div className = "container">
                {/* <img style={{width:'300px',height:'500px'}} src='http://m.qpic.cn/psc?/V13qPXki2Io6id/NZ9C4PTRAOGVNvAxFZDwt99VXuiSwZlJCX1vq5yzc*YL5qjnF.wgE2nteG2OVbvCKlmujBTHvRurpGNkCvC4MQ!!/b&bo=7gLoAwAAAAARBzc!&rf=viewer_4'></img> */}
            {/* <h4 className='h4'>☆☆</h4> */}
        
                <input 
                    value={userName}  
                    type="text" 
                    onChange={getValue}  
                    className=""
                    />
                {/* <button type="button" onClick={handleClick}>拍一拍</button> */}
                <br/>
                <a href='#' className='a' onDoubleClick={doubleClick}>{userName}</a>
                <div  id="pailepai"  className="liname" >你拍了拍 {userName} 狗头</div>
            </div>
        </div>

 
    )}





