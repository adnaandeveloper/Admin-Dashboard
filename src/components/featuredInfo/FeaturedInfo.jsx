import { ArrowDownward, ArrowUpward } from '@material-ui/icons';
import React from 'react';
import './featuredInfo.css';

const FeaturedInfo = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="feauturedTitle">Revanue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2.4585</span>
          <span className="featuredMoneyRate">
            -11 <ArrowDownward className="featuredIcon negative" />{' '}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="feauturedTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$5.585</span>
          <span className="featuredMoneyRate">
            -1.4 <ArrowDownward className="featuredIcon negative" />{' '}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>

      <div className="featuredItem">
        <span className="feauturedTitle">Cost</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2.585</span>
          <span className="featuredMoneyRate">
            +5.4 <ArrowUpward className="featuredIcon " />{' '}
          </span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  );
};

export default FeaturedInfo;
