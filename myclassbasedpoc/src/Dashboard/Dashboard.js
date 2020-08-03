/**
* Author: Laxman Reddy
* Welcome Page
*/

import React, { Component } from "react";
import { connect } from "react-redux";

// const axi=()=>{axios
//   .get("https://api.covid19india.org/data.json")
//   .then((res) => {
//     // alert(res.cases_time_series.dailyconfirmed);
//     const dailyConfirmed = res.data.cases_time_series[0].dailyconfirmed;
//   //  this.setState({dailyconfirmed:daily});
//    const dailyDeath = res.data.cases_time_series[0].dailydeceased;
//   //  this.setState({dailydeceased:dailyDeath});
//    const dailyRecovered = res.data.cases_time_series[0].dailyrecovered;
//   //  this.setState({dailyrecovered:dailyRecovered});

//   })
//   .catch((err) => {
//     console.log(err);
//   })}
class Dashboard extends Component {
  //   state={
  //     dailyconfirmed:0,
  //     dailydeceased:0,
  //     dailyrecovered:0,
  //     // axi:axi(this.bind)
  // }

  render() {
    return (
      <div>
        <h2 style={{ margin: 1 + "em" }}>Covid Cases in India</h2>
        <a href="https://www.mygov.in/covid-19/" target="blank">
          Covid19 in INDIA
        </a>
        <hr />
        <table className="table">
          <thead>
            <tr>
              <th scope="col">S.No</th>
              <th scope="col">Daily Confirmed</th>
              <th scope="col">Daily Deaseased</th>
              <th scope="col">Daily Recovered</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">1</th>
              <td>{this.props.dailyConfirm}</td>
              <td>{this.props.dailyDied}</td>
              <td>{this.props.dailyRecovered}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    dailyConfirm: state.dailyconfirmed,
    dailyDied: state.dailydeceased,
    dailyRecovered: state.dailyrecovered,
  };
};

export default connect(mapStateToProps, null)(Dashboard);
