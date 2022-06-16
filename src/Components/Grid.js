import React from 'react'
import './Grid.css'
const Grid = () => {
  return (
    <>
      <h4 className="grid-heading">Offered Services</h4>
      <div className="main-grid">
        <div className="grid1">
          <i class="fa fa-ambulance"></i>
          <p className="icon">Ambulance</p>
        </div>
        <div className="grid2">
          <i class="fa fa-heartbeat"></i>
          <p className="icon">Heartbeat</p>
        </div>
        <div className="grid1">
          <i class="fa fa-hospital-o"></i>
          <p className="icon">Hospital</p>
        </div>
        <div className="grid2">
          <i class="fa fa-stethoscope"></i>
          <p className="icon">Stethoscope</p>
        </div>
        <div className="grid1">
          <i class="fa fa-user-md"></i>
          <p className="icon">User</p>
        </div>
        <div className="grid2">
          <i class="fa fa-wheelchair"></i>
          <p className="icon">Wheelchair</p>
        </div>
      </div>
      <div className="main-grid">
        <div className="grid1">
          <i class="fa fa-pie-chart"></i>
          <p className="icon">Chart</p>
        </div>
        <div className="grid2">
          <i class="fa fa-venus-double"></i>
          <p className="icon">People</p>
        </div>
        <div className="grid1">
          <i class="fa fa-refresh"></i>
          <p className="icon">Recycle</p>
        </div>
        <div className="grid2">
          <i class="fa fa-chain-broken"></i>
          <p className="icon">Chain</p>
        </div>
        <div className="grid1">
          <i class="fa fa-hand-stop-o"></i>
          <p className="icon">Stop</p>
        </div>
        <div className="grid2">
          <i class="fa fa-inr"></i>
          <p className="icon">Currency</p>
        </div>
      </div>
    </>
  );
}

export default Grid