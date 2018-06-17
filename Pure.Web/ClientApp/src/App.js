import React, { PureComponent } from 'react'
import { Switch, Route } from 'react-router-dom'
import Layout from './Components/Layout/Layout'
import Home from './Composers/Home/Home'

class App extends PureComponent {
  render() {
    return (
      <Switch>
        <Layout>
          <Route path='/' exact component={Home} />
        </Layout>
      </Switch>
    );
  }
}

export default App;
