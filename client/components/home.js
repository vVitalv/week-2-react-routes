import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Header from './header'
import Dashboard from './dashboard'
import DashMain from './dashmain'
import DashProfile from './dashprofile'
import DashCounter from './dashCounter'

const Home = () => {
  return (
    <div>
      <Header />
      <div className="flex items-center justify-center h-screen">
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <Switch>
            <Route exact path="/dashboard/" component={() => <Dashboard />} />
            <Route exact path="/dashboard/main" component={() => <DashMain />} />
            <Route exact path="/dashboard/profile/:user" component={() => <DashProfile />} />
            <Route exact path="/dashboard/counter" component={() => <DashCounter />} />
          </Switch>
        </div>
      </div>
    </div>
  )
}

Home.propTypes = {}

export default React.memo(Home)
