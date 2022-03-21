import { useState ,useEffect} from 'react';
import DataTable from './components/DataTable';
import LineChart from './components/LineChart';
import DataButton from './components/DataButton';
import axios from 'axios';
import './App.css';

function App() {
  const [marketData, setMarkData] = useState()
  const getMarkData = ()=>{
    axios.get("https://api.loc-cse.fst.network/ken/market_data")
    .then((obj)=>{
      setMarkData(obj.data.market_data)
    })
  }
  useEffect(()=>{
    getMarkData()
  },[])
  return (
    <div className="App">
      <div className="App-button-area">
        <DataButton />
      </div>
      <div className="App-data-area">
        <DataTable />
        <LineChart />
      </div>
    </div>
  );
}

export default App;
