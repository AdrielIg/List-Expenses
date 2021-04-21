import { useState } from "react"
import "./Chart.css"
import ChartBar from "./ChartBar"

const Char = (props) => {
    const [isShowChart, setIsShowChart] = useState(false)

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    const totalMaximum = Math.max(...dataPointValues)



    const showChartHandler = () => {
        setIsShowChart(!isShowChart)
    }

    if (isShowChart) {
        return (
            <div>
                <button className="chart-button" onClick={showChartHandler} >Close Chart</button>
                <div className="chart">

                    {props.dataPoints.map(dataPoint => <ChartBar value={dataPoint.value} maxValue={totalMaximum} label={dataPoint.label} key={dataPoint.label} />)}

                </div>
            </div>
        )
    }

    return (
        <button className="chart-button" onClick={showChartHandler} > Show Chart</button>
    )

}

export default Char