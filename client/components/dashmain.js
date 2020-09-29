import React from 'react'
import { Link } from 'react-router-dom'

const DashMain = () => {
  return (
    <div id="title">
      Main
      <div>
        <Link to="/dashboard/profile/672fae38-e505-49be-a36a-5fafea4cee89">Go To Profile</Link>
        <Link to="/dashboard/main">Go To Root</Link>
      </div>
    </div>
  )
}

DashMain.propTypes = {}

export default DashMain
