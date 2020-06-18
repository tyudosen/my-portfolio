import React from 'react'
import { Route, Switch } from 'react-router-dom'
import MainPage from '../components/MainPage'
import Contact from '../components/Contact'
import Projects from '../components/Projects'
import Resume from '../components/Resume'


const AppRouter = () => (
    <Switch>
        <Route
            path='/'
            component={MainPage}
            exact={true}
        />
        <Route
            path='/contact'
            component={Contact}
            exact={true}
        />
        <Route
            path='/projects'
            component={Projects}
            exact={true}
        />
        <Route
            path='/resume'
            component={Resume}
            exact={true}
        />
    </Switch>
)

export default AppRouter