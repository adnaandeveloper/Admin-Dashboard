import React from 'react';
import Chart from '../../components/chart/Chart';
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo';
import WidgetLg from '../../components/widgetLg/WidgetLg';
import WidgetSm from '../../components/widgetSm/WidgetSm';
import { Userdata } from '../../dummyData';
import './home.css';
const Home = () => {
  console.log({ Userdata });
  return (
    <div className="home">
      <FeaturedInfo />
      <Chart
        data={Userdata}
        title="Sales Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
};

export default Home;
