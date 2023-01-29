import React from 'react'
import ChartBar from "./ChartBar"
import "./chart.css"

const Chart=(props)=>{
    const DataPointValue=props.dataPoints.map(DataPoint=>DataPoint.value)
    const totalMaximum = Math.max(...DataPointValue);
    return (
        <div className='chart'>
            {props.dataPoints.map(dataPoint=><ChartBar key={dataPoint.id} value={dataPoint.value} maxvalue={totalMaximum} label={dataPoint.label}/>)}
        </div>
      )
}


export default Chart



