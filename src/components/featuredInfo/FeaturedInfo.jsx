import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import React from 'react';
import './featuredInfo.css';
const featuredInfoData = [
  {
    title: 'Revanue',
    money: '$2.4585',

    situation: '-11',
    icon: <ArrowDownward className="featuredIcon negative" />,
  },
  {
    title: 'Sales',
    money: '$5.85',

    situation: '-11',
    icon: <ArrowDownward className="featuredIcon negative" />,
  },
  {
    title: 'Cost',
    money: '$5.85',
    situation: '+11',
    icon: <ArrowUpward className="featuredIcon " />,
  },
];

const FeaturedInfo = () => {
  return (
    <div className="featured">
      {featuredInfoData.map((item, index) => (
        <div className="featuredItem">
          <span className="feauturedTitle">{item.title}</span>
          <div className="featuredMoneyContainer">
            <span className="featuredMoney">{item.money}</span>
            <span className="featuredMoneyRate">
              {item.situation}
              {item.icon}
            </span>
          </div>
          <span className="featuredSub">Compared to last month</span>
        </div>
      ))}
    </div>
  );
};

export default FeaturedInfo;
