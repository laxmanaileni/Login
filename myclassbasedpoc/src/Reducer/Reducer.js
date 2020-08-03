/**
* Author: Laxman Reddy
* Reducer 
*/


import axios from 'axios';

const initialState={
    dailyconfirmed:0,
    dailydeceased:0,
    dailyrecovered:0
};
  
const reducer=(state=initialState)=>{
   
axios.get("http://api.covid19india.org/data.json")
    .then((res) => {
      console.log("Entered Axios");
      const dailyConfirmed = res.data.cases_time_series[0].dailyconfirmed;
     const dailyDeath = res.data.cases_time_series[0].dailydeceased;
     const dailyRecovered = res.data.cases_time_series[0].dailyrecovered;
     console.log(dailyConfirmed,dailyDeath,dailyRecovered);
     var x=state;
     x.dailyconfirmed=dailyConfirmed;
     x.dailydeceased=dailyDeath;
     x.dailyrecovered=dailyRecovered
     state=x;
     console.log(state);
     return state;
    })
    .catch((err) => {
      console.log(err);
    })
    
    
    return state;
}
export default reducer;