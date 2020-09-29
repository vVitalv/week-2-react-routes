import React, { useState } from 'react'

import Head from './head'

const CounterView = (props) => {
  return <div>{props.countResult}</div>
}

const ButtonPanel = (props) => {
  const inc = () => {
    props.setCount(Math.min(props.count + 1, 10))
  }

  const dec = () => {
    props.setCount(Math.max(0, props.count - 1))
  }

  const reset = () => {
    props.setCount(0)
  }

  return (
    <div>
      <button type="button" onClick={inc}>
        +
      </button>
      <button type="button" onClick={dec}>
        -
      </button>
      <button type="button" onClick={reset}>
        СБРОС
      </button>
    </div>
  )
}

const Counter = () => {
  const [counter, setCounter] = useState(0)

  return (
    <div>
      <Head title="Hello" />
      <div>
        <CounterView countResult={counter} />
        <ButtonPanel setCount={setCounter} count={counter} />
      </div>
    </div>
  )
}

Counter.propTypes = {}

export default Counter
