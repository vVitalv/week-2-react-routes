import React from 'react'
import { Link } from 'react-router-dom'

import Head from './head'

const DashMain = () => {
  return (
    <div>
      <Head title="Hello" />
      <div id="title">Main</div>
      <ul className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
        <li>
          <Link to="/dashboard/profile/672fae38-e505-49be-a36a-5fafea4cee89">Go To Profile</Link>
        </li>
        <li>
          <Link to="/dashboard">Go To Root</Link>
        </li>
      </ul>
    </div>
  )
}

DashMain.propTypes = {}

export default DashMain
