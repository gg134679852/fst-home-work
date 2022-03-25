import { useState, useEffect, Fragment } from 'react';
import DataTable from './components/DataTable';
import LineChart from './components/LineChart';
import DataButton from './components/DataButton';
import axios from 'axios';
import './App.css';

function App() {
  const [marketData, setMarkData] = useState()
  const [calculateData, setCalculateData] = useState()
  const [currentData, setCurrentData] = useState()
  const getMarkData = () => {
    axios.get("https://api.loc-cse.fst.network/ken/market_data")
      .then((obj) => {
        setMarkData(obj.data.market_data)
        setCalculateData(obj.data.calculate_data)
      })
  }
  const addCurrentData= (e) => {
    setCurrentData({ name: e.target.innerText,
      market_data:{
        time: Object.keys(marketData[e.target.innerText]), value: Object.values(marketData[e.target.innerText])
      },
      calculate_data:{
        time: Object.keys(calculateData[e.target.innerText]), value: Object.values(calculateData[e.target.innerText])
      }
    })
    }
  useEffect(() => {
    if (!marketData && !calculateData){
      getMarkData()
    }
    if (marketData && calculateData){
      setCurrentData({
        name: "3month_Tbill",
        market_data: {
          time: Object.keys(marketData["3month_Tbill"]), value: Object.values(marketData["3month_Tbill"])
        },
        calculate_data: {
          time: Object.keys(calculateData["3month_Tbill"]), value: Object.values(calculateData["3month_Tbill"])
        }
      })
    }
  }, [calculateData])
  return (
    <div className="App">
      {
        marketData && Object.keys(marketData).length && currentData && Object.keys(currentData).length ?
        <Fragment>
            <h1 className='data-label'>{currentData.name}</h1>
          <div className="App-button-area">
              <DataButton addCurrentData={addCurrentData}/>
          </div>
          <div className="App-data-area">
              <DataTable calculate_data ={currentData.calculate_data} />
              <LineChart marketData={currentData.market_data} />
          </div>
        </Fragment>: <h1>loading.....</h1>
      }
    </div>
  );
}

export default App;
