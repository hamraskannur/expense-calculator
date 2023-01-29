import React from 'react'

import "./chartBar.css"

const ChartBar = (props) => {
    let filterHeight="0%"
    if(props.maxvalue > 0){
        filterHeight=Math.round((props.value*props.maxvalue)/100)+"%"
    }
    return (<div className='chart-bar'>
        <div className='chart-bar__inner'>
            <div className='chart-bar__fill' style={{height:filterHeight}}></div>
        </div>
        <div className='chart-bar__label'>{props.label}</div>
    </div>)
}

export default ChartBar