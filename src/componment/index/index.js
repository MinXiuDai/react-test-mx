import React,{useState } from 'react'
import TakeShot from '../Take a shot'
import Some from '../some'
import { ByValue } from '../by-value'
import './style.scss'

export const Index = () => {
    const [title,setTitle] = useState('虽未曾穿渡星河，却有幸与你相遇')
    const [value,setValue] = useState('浮世三千，吾爱有三。日、月与卿。日为朝，月为暮，卿为朝朝暮暮。')
   return(
        <div className ='ret'>
                <TakeShot />
            
            <div className='abs'>
                <Some/>
            </div>
            <div className='by'>
                <ByValue title={title}   value={value}/>
                
            </div>
            
        </div>
   )
}