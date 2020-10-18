import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom'

import Header from './header'

const RepoList = () => {
  const { userName } = useParams()
  const [value, setValue] = useState([])
  useEffect(() => {
    axios(`https://api.github.com/users/${userName}/repos`).then((it) => {
      const repos = it.data.map((rec) => rec.name)
      setValue(repos)
    })
  }, [userName])
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-black font-bold rounded-lg border shadow-lg p-10">
          Repository list:
          <ul>
            {value.map((repo) => {
              return (
                <li key={repo}>
                  <Link to={`${userName}/${repo}`}>{repo}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

RepoList.propTypes = {}

export default RepoList
