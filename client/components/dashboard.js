import React from 'react'
import { Link } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div id="title" className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
      Dashboard
      <div>
        <Link to="/dashboard/profile/672fae38-e505-49be-a36a-5fafea4cee89">Go To Profile</Link>
        <Link to="/dashboard/main">Go To Main</Link>
      </div>
    </div>
  )
}

Dashboard.propTypes = {}

export default Dashboard
