import React, { useEffect, useState } from "react";
import Chart from "chart.js";
import Button from "../Button/Button";
import GradeModal from "../GradeModal/GradeModal";
import "./GradeChart.css"

function GradeChart({data, header, handleFormSubmit, handleInputChange, newGrade, setNewGrade}) {

const makeLabels = () => {
  const labels = new Array(data.length);
  return labels;
};

//* attempt to solve problem by calling for different labels if no data
const makeLabelsNoData = () => {
  const labels = new Array(5);
  return labels;
}
console.log(makeLabels())
//creates a data value for each point of data so that the grade level lines span the entire 
let aData = [];
let bData = [];
let cData = [];
let dData = [];

data.forEach((item) => {
  aData.push(90);
  bData.push(80);
  cData.push(70);
  dData.push(60);
});

const [modalStatus, setModalStatus] = useState({
    open: false,
  });

//controls opening and closing of the add grade modal 
  const openModal = () => setModalStatus({ open: true });
  const closeModal = () => setModalStatus({ open: false });

  Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif";
  Chart.scaleService.updateScaleDefaults("linear", {
    //sets y-axis value to be between 0 and 105, all possible grades a student can recieve
    ticks: {
      min: 0,
      max: 105,
    },
  });

  const chartRef = React.createRef();

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");

    new Chart(myChartRef, {
      type: "line",
      data: {
        //* attempt to solve problem by calling for different labels if no data
        labels: (data.length != 0 ? makeLabels() : makeLabelsNoData()),
        datasets: [
          //display grade data from student
          {
            label: "GRADES",
            data: data,
            borderColor: "#000000",
          },
          //create horizontal graph lines to show letter grade threshold
          {
            label: "A",
            data: aData,
            fill: false,
            borderColor: "#0000FF",
          },
          {
            label: "B",
            data: bData,
            fill: false,
            borderColor: "#006400",
          },
          {
            label: "C",
            data: cData,
            fill: false,
            borderColor: "#FFA500",
          },
          {
            label: "D",
            data: dData,
            fill: false,
            borderColor: "#FF0000",
          },
        ],
      },

      options: {
        scales: {
          xAxes: [{
              ticks: {
                  display: false 
              }
          }]
      }
      },
    });
  });

  return (
      <>
    <div className="subject-chart">
      <div id="chart-header">
      <h3 id="subject-title">{header.toUpperCase()}</h3>
      <Button
          onClick={openModal}
          id="addNewGrade"
          type="button"
          title="Add Grade"
          dataTarget="#gradeModal"
        />
      </div>
        <div className="individual-chart">
      <canvas id="myChart" ref={chartRef} />
        </div>
    </div>
    <GradeModal 
    onClick={() => closeModal()}
    handleFormSubmit={handleFormSubmit}
    handleInputChange={handleInputChange}
    newGrade={newGrade}
    setNewGrade={setNewGrade}
    show={modalStatus.open}
    header={header}
    />
    </>
  );
}
export default GradeChart;
