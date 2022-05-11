import React from 'react';
import './widgetLg.css';

const WidgetLg = () => {
  const Button = ({ type }) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetlgTitle">Latest transactions</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          {['Customer', 'Date', 'Amount', 'Status'].map((item, index) => (
            <th className="widgetLgTh" key={index}>
              {item}
            </th>
          ))}
        </tr>

        {new Array(5).fill().map((item) => (
          <tr className="widgetLgTr">
            <td className="widgetLgUser">
              <img
                src="https://www.biography.com/.image/t_share/MTE4MDAzNDEwNzg5ODI4MTEw/barack-obama-12782369-1-402.jpg"
                alt=""
                className="widgetLgImg"
              />
              <span className="widgetLgName">Zeyd Adnaan</span>
            </td>

            <td className="widgetLgDate"> 2 jun 2022</td>
            <td className="widgetLgAmount"> $122.23</td>
            <td className="widgetLgStatus">
              <Button type="Declined" />
            </td>
          </tr>
        ))}
      </table>
    </div>
  );
};

export default WidgetLg;
