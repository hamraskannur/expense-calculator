import React from 'react'
import Chart from "../chart/Chart"

const ExpenceChart=(props)=>{
   const ChartdataPoints=[
        {label:"jan",value:"0"},
        {label:"feb",value:"0"},
        {label:"mar",value:"0"},
        {label:"Apr",value:"0"},
        {label:"may",value:"0"},
        {label:"jun",value:"0"},
        {label:"jul",value:"0"},
        {label:"Aug",value:"0"},
        {label:"sep",value:"0"},
        {label:"sep",value:"0"},
        {label:"Oct",value:"0"},
        {label:"Nov",value:"0"},
        {label:"Dec",value:"0"}
    ]
    for(const expense of props.expense){
        const expenseMonth=expense.date.getMonth();
        ChartdataPoints[expenseMonth].value += expense.amount
    }
return (
    <div>
        <Chart dataPoints={ChartdataPoints}/>
    </div>
)
}
export default ExpenceChart