import React from 'react'
import { Router, Route, IndexRoute } from 'react-router'

import App from '../containers'
import Home from '../containers/Home'
import Me from '../containers/Me'
import Choice from '../containers/Choice'
import Discover from '../containers/Discover'
import NotFound from '../containers/404'

// 如果是大型项目，router部分就需要做更加复杂的配置
// 参见 https://github.com/reactjs/react-router/tree/master/examples/huge-apps

class RouterMap extends React.Component {
    render() {
        return (
            <Router history={this.props.history}>
                <Route path='/' component={App}>
                    <IndexRoute component={Home}/>
                    <Route path='/Discover' component={Discover}/>
                    <Route path='/Me' component={Me}/>
                    <Route path='/Choice' component={Choice}/>
                    <Route path='*' component={NotFound}/>
                </Route>
            </Router>
        )
    }
}

export default RouterMap
