import React, { useEffect, useState } from "react";
import Chart from "chart.js";
import Button from "../Button/Button";
import GradeModal from "../GradeModal/GradeModal";

function GradeChart({data, header, handleFormSubmit, handleInputChange, newGrade, setNewGrade}) {

const [modalStatus, setModalStatus] = useState({
    open: false,
  });


  const openModal = () => setModalStatus({ open: true });
  const closeModal = () => setModalStatus({ open: false });

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
        labels: ["Aug 15", "Aug 16", "Aug 17", "Aug 18", "Aug 19"],
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
      <>
    <div>
      <h1>{header}</h1>
      <Button
          onClick={openModal}
          id="addNewGrade"
          type="button"
          title="Add Grade"
          dataTarget="#gradeModal"
        />
      <canvas id="myChart" ref={chartRef} />
    </div>
    <GradeModal 
    onClick={() => closeModal()}
    //THESE 3 THINGS I WILL NEED TO CHANGE
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
