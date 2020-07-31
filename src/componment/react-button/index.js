import React from 'react'
import './style.scss'
import cn from "classnames"

export default  () => {
    const [genggai,setGenggai] = React.useState('1')
    const typeOptions =React.useMemo(() => {
     return [
        { label:1, value: "春华"},
        { label: 2, value: "夏蝉" },
        { label:3, value: "秋实" },
        { label:4, value: "冬暖" },
        
      ]})

      const handleOptionChange = (item) => ()=>{
          setGenggai(item.label)
        }
    
    return(
        <div>
            {
                typeOptions.map((item)=>{
                    return (
                        <button
                        className={cn('btn',{'btns':genggai ===item.label})}
                        onClick={handleOptionChange(item)}
                        >{item.value}
                        </button>
                    )
                })
            }

        </div>
        



    )
}