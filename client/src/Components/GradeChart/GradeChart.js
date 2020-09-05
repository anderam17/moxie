import React, { useEffect, useState } from "react";
import Chart from "chart.js";

function GradeChart({data, header}) {
  Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif";
  Chart.scaleService.updateScaleDefaults("linear", {
      //* I did this to set the Y-axis of the chart
    ticks: {
      min: 0,
      max: 100,
    },
  });

  const chartRef = React.createRef();

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "line",
      data: {
        //* Get Data from somewhere and put it here
        //* Actually, might just keep these consistent for myself
        // * If you have more labels than data, the labels will continue and your data will stop mid graph
        // * If you have more data than labels, your data will stop at however many labels you have 
        labels: ["Aug 15", "Aug 16", "Aug 17", "Aug 18"],
        datasets: [
          {
            label: "GRADES",
            //! Get Data from somewhere and put it here
            data: data,
            // fill: false,
            borderColor: "#FF0000",
          },
        ],
      },
      //* Not completely sure what all this does
      options: {},
    });
  });

  return (
    <div>
        {/* //! Get Data from somewhere and put it here */}
      <h1>{header}</h1>
      <canvas id="myChart" ref={chartRef} />
    </div>
  );
}
export default GradeChart;
