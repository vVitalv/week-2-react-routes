import React, { useState } from 'react'
import { history } from '../redux'

import Header from './header'

const Main = () => {
  const [value1, setValue] = useState('')
  const onChangeF = (e) => {
    setValue(e.target.value)
  }
  const onClickF = () => {
    history.push(`/${value1}`)
  }
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-black font-bold rounded-lg border shadow-lg p-10">
          <input type="text" id="input-field" value={value1} onChange={onChangeF} />
          <button className="m-2" type="button" id="search-button" onClick={onClickF}>
            Tap!
          </button>
        </div>
      </div>
    </div>
  )
}

Main.propTypes = {}

export default Main
