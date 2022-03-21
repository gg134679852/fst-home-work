import { useState, useEffect, Fragment } from 'react';
import DataTable from './components/DataTable';
import LineChart from './components/LineChart';
import DataButton from './components/DataButton';
import axios from 'axios';
import './App.css';

function App() {
  const [marketData, setMarkData] = useState()
  const [currentData, setCurrentData] = useState("3month_Tbill")
  const getMarkData = () => {
    axios.get("https://api.loc-cse.fst.network/ken/market_data")
      .then((obj) => {
        setMarkData(obj.data.market_data)
      })
  }
  const addCurrentData= (e) => {
    setCurrentData(e.target.innerText)
  }
  useEffect(() => {
    getMarkData()
  }, [])
  return (
    <div className="App">
      {
        marketData && Object.keys(marketData).length ?
        <Fragment>
          <div className="App-button-area">
              <DataButton addCurrentData={addCurrentData}/>
          </div>
          <div className="App-data-area">
              <DataTable marketDataName={currentData} marketData={marketData[currentData]} />
            <LineChart marketData={marketData[currentData]} />
          </div>
        </Fragment>: <h1>loading.....</h1>
      }
    </div>
  );
}

export default App;
