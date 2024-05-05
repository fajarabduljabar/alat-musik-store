
import React from 'react'
import Layout from '../Layout.js';
import Welcome from '../Welcome.js';

const Dashboard = () => {
  return (
    <div className='row mt-3'>
      <div class="col-3"> <Layout/></div>
      <div class="col-8"><Welcome/></div>  
    </div>
  )
}

export default Dashboard;
