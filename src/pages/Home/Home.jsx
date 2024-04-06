import React from "react";
import "./home.scss";
import Topbox from "../../components/Topbox/Topbox";
import ChartBox from "../../components/ChartBox/ChartBox";
import {
  chartBoxUser,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxConversion,
  barChartBoxRevenue,
  barChartBoxVisit,
} from "../../data";
import BarChartBox from "../../components/BarChartBox/BarChartBox";
import PiChartBox from "../../components/PiChartBox/PiChartBox";
import BigChartBox from "../../components/BigChart/BigChartBox";
const Home = () => {
  return (
    <div className="home">
      <div className="box box1">
        {" "}
        <Topbox />{" "}
      </div>
      <div className="box box2">
        {" "}
        <ChartBox {...chartBoxUser} />{" "}
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct} />
      </div>
      <div className="box box4">
        <PiChartBox />
      </div>
      <div className="box box5">
        <ChartBox {...chartBoxRevenue} />
      </div>
      <div className="box box6">
        <ChartBox {...chartBoxConversion} />
      </div>
      <div className="box box7">
        {" "}
        <BigChartBox />{" "}
      </div>
      <div className="box box8">
        {" "}
        <BarChartBox {...barChartBoxVisit} />{" "}
      </div>
      <div className="box box9">
        {" "}
        <BarChartBox {...barChartBoxRevenue} />{" "}
      </div>
    </div>
  );
};

export default Home;
