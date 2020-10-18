import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Head from './head'
import Main from './main'
import RepoList from './repolist'
import Text from './text'

const Dummy = () => {
  return (
    <div>
      <Head title="Hello" />
      <Switch>
        <Route exact path="/" component={() => <Main />} />
        <Route exact path="/:userName" component={() => <RepoList />} />
        <Route exact path="/:userName/:repositoryName" component={() => <Text />} />
      </Switch>
    </div>
  )
}

Dummy.propTypes = {}

export default Dummy
