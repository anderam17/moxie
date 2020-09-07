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


const [modalStatus, setModalStatus] = useState({
    open: false,
  });


  const openModal = () => setModalStatus({ open: true });
  const closeModal = () => setModalStatus({ open: false });

  Chart.defaults.global.defaultFontFamily = "'PT Sans', sans-serif";
  Chart.scaleService.updateScaleDefaults("linear", {
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
        labels: makeLabels(),
        datasets: [
          {
            label: "GRADES",
            data: data,
            // fill: false,
            borderColor: "#000000",
          },
          {
            label: "A",
            data: [90, 90, 90, 90, 90, 90, 90, 90],
            fill: false,
            borderColor: "#0000FF",
          },
          {
            label: "B",
            data: [80, 80, 80, 80, 80, 80, 80, 80],
            fill: false,
            borderColor: "#006400",
          },
          {
            label: "C",
            data: [70, 70, 70, 70, 70, 70, 70, 70],
            fill: false,
            borderColor: "#FFA500",
          },
          {
            label: "D",
            data: [60, 60, 60, 60, 60, 60, 60, 60],
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
    <div class="subject-chart">
      <div id="chart-header">
      <h1>{header}</h1>
      <Button
          onClick={openModal}
          id="addNewGrade"
          type="button"
          title="Add Grade"
          dataTarget="#gradeModal"
        />
      </div>
        <div class="individual-chart">
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
