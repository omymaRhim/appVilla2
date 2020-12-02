import React from 'react';
import moment from 'moment';
import {BASE_URL} from './Screen/utils/Constant';
import * as lodash from 'lodash';
const AppContext = React.createContext();
const AppProvider = (props) => {
  const [reservation, setReservation] = React.useState(null);
  const [currentUser, setCurrentUser] = React.useState(null);
  const [reservations, setReservations] = React.useState([]);
  const [activeLangment,setActiveLangement] =React.useState("Villa 1")
  const [objJson, setobjJson] = React.useState(null);
  


  function getDates(startDate, endDate) {
    var dates = [],
      currentDate = startDate,
      addDays = function (days) {
        var date = new Date(this.valueOf());
        date.setDate(date.getDate() + days);
        return date;
      };

    while (currentDate <= endDate) {
      dates.push(currentDate);
      console.log({currentDate});
      currentDate = addDays.call(currentDate, 1);
    }

    return dates;
  }

  function transformDate(date) {
    const [day, month, year] = date.split('-');
    return new Date(parseInt(year), parseInt(month) - 1, parseInt(day));
  }
  function isBetween(date,start,end){
    let ok =false
    if(moment(date).valueOf() >=moment(start) && moment(date).valueOf() <=moment(end).valueOf()){
        ok= true;
    }
    return ok;
    
  }
  function getColor({data,start}){
    let color ="#FF7221";
    data?.forEach((item,index) =>{
      if(isBetween(start,item.chekin,item.chekout)){
  
        if(item?.paid ===true){
          color ="red"
        }
      }});
      return color;
  }
 
  React.useEffect(() => {
    fetch(BASE_URL + '/customers/getreservation',{
      method: "post",
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
    
      body: JSON.stringify({
        logement: activeLangment,
      })
    })
      .then((response) => response.json())
      .then((data) => {
        
        let reservationsDates = data?.data?.map((res) => {
          return {
           
            start: res?.chekin?.split('-')?.reverse()?.join('-'), //11-11-2020 -> 2020-11-11
            end: res?.chekout?.split('-')?.reverse()?.join('-'),
          };
        });


        let allDates = reservationsDates
          ?.map((item) => {
            return getDates(
              transformDate(item?.start),
              transformDate(item?.end),
            );
          })
          ?.map((item) => item);
  
        allDates = lodash
          .flatten(allDates)
          ?.map((item) => moment(item).format('YYYY-MM-DD'));
        let finalDatesCalandar = allDates?.map((item) => {
          return {
            [item]: {
              disabled: true,
              //startingDay: true,
              //endingDay: true,
              //marked: true,
              color:getColor(
                {
                  data:data?.data,
                  start:item
                }
              ),
              selectedColor: '#000',
            },
          };
        });
  
        let obj = {};
        finalDatesCalandar?.forEach((item) => {
          obj = {...obj, ...item};
        });
        console.log({obj});
  
        setobjJson(obj);
      });
   
  }, [activeLangment]);
  
 

  return (
    <AppContext.Provider
      value={{
        reservation,
        currentUser,
        setCurrentUser,
        setReservation,
        objJson,
        activeLangment,
        setActiveLangement
      }}>
      {props.children}
    </AppContext.Provider>
  );
};
const useAppContext = () => React.useContext(AppContext);
export {AppProvider, useAppContext};
