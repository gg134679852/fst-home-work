import React,{Fragment} from 'react'
import './DataTable.css'
const DataTable = ({calculate_data}) => {
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
          {calculate_data.time.map((data,index) => 
            <tr key={index}>
              <td>{data}</td>
              <td>{calculate_data.value[index] + "%"}</td>
          </tr>
          )
        }
      </tbody>
    </table>
    </div>
  )
}

export default DataTable