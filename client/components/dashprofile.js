import React from 'react'
import { Link, useParams } from 'react-router-dom'

import Head from './head'

const DashProfile = () => {
  const { user } = useParams()
  return (
    <div>
      <Head title="Hello" />
      <div id="title">Profile</div>
      <div id="username">{user}</div>
      <ul className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
        <li>
          <Link to="/dashboard">Go To Root</Link>
        </li>
        <li>
          <Link to="/dashboard/main">Go To Main</Link>
        </li>
      </ul>
    </div>
  )
}

DashProfile.propTypes = {}

export default DashProfile
