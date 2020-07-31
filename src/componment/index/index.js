import React,{useState } from 'react'
import TakeShot from '../Take a shot'
import Some from '../some'
import { ByValue } from '../by-value'
import Reactbutton from '../react-button'
import './style.scss'

export const Index = () => {
    const [title,setTitle] = useState('虽未曾穿渡星河，却有幸与你相遇')
    const [value,setValue] = useState('浮世三千，吾爱有三。日、月与卿。日为朝，月为暮，卿为朝朝暮暮。')
    const [show,setShow]  = useState(true)
    const  click = () => {
            setTitle('作伴')
            setValue("像什么呢 像风走了八万里，还是很想你 星星醉酒到处跑 月亮跌进深海里 我从未觉得人间美好 直到你来了 ")
    }
    const click1 = () => {setShow(false)}

   return(
        <div className ='ret'>
                <TakeShot />
            
            {show &&  (
                <div onClick={click1} id='absx' className='abs'>
                    <Some/>
                </div>)
                }
            
            <div className='by'   onClick={click} >
                <ByValue title={title}   value={value}/>
                
            </div>
            <div className= 'reactbtn'>
            <Reactbutton/>
            </div>
        </div>
   )
}