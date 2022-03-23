import React,{Fragment} from 'react'
import './DataTable.css'
const DataTable = ({marketData}) => {
  return (
    <div className="table-container">
      <table className="table table-striped">
      <thead>
        <tr>
          <th scope="col">time</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
          {marketData.time.map((data,index) => 
            <tr key={index}>
              <td>{data}</td>
              <td>{marketData.value[index] + "%"}</td>
          </tr>
          )
        }
      </tbody>
    </table>
    </div>
  )
}

export default DataTable