import React from 'react'

const DataButton = ({addCurrentData}) => {
  return (
    <div>
      <button type="button" className="btn btn-primary m-1" onClick={(e)=>addCurrentData(e)}>3month_Tbill</button>
      <button type="button" className="btn btn-primary m-1" onClick={(e)=>addCurrentData(e)}>5year_Tnote</button>
      <button type="button" className="btn btn-primary m-1" onClick={(e)=>addCurrentData(e)}>10year_Tbond</button>
      <button type="button" className="btn btn-primary m-1" onClick={(e)=>addCurrentData(e)}>EuropeETF_VGK</button>
      <button type="button" className="btn btn-primary m-1" onClick={(e)=>addCurrentData(e)}>EuropeETF_BBEU</button>
      <button type="button" className="btn btn-primary m-1" onClick={(e)=>addCurrentData(e)}>EuropeETF_EZU</button>
      <button type="button" className="btn btn-primary m-1" onClick={(e)=>addCurrentData(e)}>3monthGovernmentBond_Mexican</button>
      <button type="button" className="btn btn-primary m-1" onClick={(e)=>addCurrentData(e)}>3monthGovernmentBond_Brazil</button>
      <button type="button" className="btn btn-primary m-1" onClick={(e)=>addCurrentData(e)}>DJCI_Gas</button>
      <button type="button" className="btn btn-primary m-1" onClick={(e)=>addCurrentData(e)}>DJCI_Gold</button>
      <button type="button" className="btn btn-primary m-1" onClick={(e)=>addCurrentData(e)}>DJCI_Oil</button>
      <button type="button" className="btn btn-primary m-1" onClick={(e)=>addCurrentData(e)}>LowCarbonStock_TESLA</button>
      <button type="button" className="btn btn-primary m-1" onClick={(e)=>addCurrentData(e)}>LowCarbonStock_NVIDIA</button>
      <button type="button" className="btn btn-primary m-1" onClick={(e)=>addCurrentData(e)}>LowCarbonStock_HOMEDEPOT</button>
      <button type="button" className="btn btn-primary m-1" onClick={(e)=>addCurrentData(e)}>conversion_rate</button>
      <button type="button" className="btn btn-primary m-1" onClick={(e)=>addCurrentData(e)}>China_growthGDP</button>
    </div>
  )
}

export default DataButton