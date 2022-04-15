import React, {useRef,useState, useEffect} from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
am4core.useTheme(am4themes_animated);

export let PieChart = () => {
    let createPieChart = () => {
        let chart = am4core.create("chartdiv", am4charts.PieChart);
        chart.data =  [
          {
              "type": "user",
              "counter": 4
          },
          {
              "type": "sponser",
              "counter": 3
          },
          {
              "type": "registred",
              "counter": 2
          }
      ]
        var pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "counter";
        pieSeries.dataFields.category = "type";
    }

    useEffect(() => {
        createPieChart()
    }, [])

    return(
    <>
        <div id="chartdiv" style={{ width: "100%", height: "500px" }}></div>
    </>
    )
}