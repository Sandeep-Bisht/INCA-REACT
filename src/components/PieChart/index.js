import React, { useEffect } from 'react'
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import '../../css/card.css'
am4core.useTheme(am4themes_animated);
// import { useTheme } from '@amcharts/amcharts4/core';


export let PieChart = (props) => {
let { data } = props 
    let createPieChart = () => {
        let chart = am4core.create("chartdiv", am4charts.PieChart);
        const updatedData = data.map(item => ({
            ...item,
            type: item.type.charAt(0).toUpperCase() + item.type.slice(1).toLowerCase()
          }));
        chart.data = updatedData
        var pieSeries = chart.series.push(new am4charts.PieSeries());
        pieSeries.dataFields.value = "counter";
        pieSeries.dataFields.category = "type";

        
    }

    useEffect(() => {
        createPieChart()
    }, [data])

    return(
    <>

     <section className='chart-plus-card py-3'>
       <div className='container'>
           <div className='row'>
<<<<<<< HEAD
               <div className='col-md-8'><div id="chartdiv" className='p-4' style={{ width: "100%", height: "417px" }}></div></div>
=======
               <div className='col-md-8'><div id="chartdiv" className='p-4' style={{ width: "100%", height: "480px" }}></div></div>
>>>>>>> 7cc31cea4e58e6dd1357dd45dae6e325e91b67f2
               <div className='col-md-4'>
               <div className="default-dashboard-view">
                <div className="container">
                    <div className="row">

                        {
                            data && data.length > 0 &&
                            data.slice(3,data.length).map((item, i) => {
                                return (
                                    <div className="col-md-12" key={i}>
                                        <div className={ `${item.type == "present" ? "conter-card one" : "conter-card five" }`}>
                                            <div className="left"><i className={`${item.type == "present" ? "fa-solid fa-user-plus" : "fa-solid fa-user-minus" }`}></i></div>
                                            <div className="right">
                                                <p className="counter-card-number">{item.counter}</p>
                                                <p className="counter-card-title">{item.type.charAt(0).toUpperCase() + item.type.slice(1)}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            }) 
                        }
                    </div>
                </div>
            </div>
               </div>
           </div>
       </div>
     </section>


    
    </>
    )
}