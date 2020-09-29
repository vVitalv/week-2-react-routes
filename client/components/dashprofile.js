import React from 'react'
import { Link, useParams } from 'react-router-dom'

const DashProfile = () => {
  const { user } = useParams()
  return (
    <div id="title">
      Profile
      <div>
        <Link to="/dashboard">Go To Root</Link>
        <Link to="/dashboard/main">Go To Main</Link>
      </div>
      <div id="username">{user}</div>
    </div>
  )
}

DashProfile.propTypes = {}

export default DashProfile
