import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { store, persist } from './config/store'
import { PersistGate } from 'redux-persist/integration/react'
import Nav from './config/route'

export default class App extends Component<{}, {}> {
    
    render() {
        return (
            <Provider store={store} >
                <PersistGate persistor={persist} >
                    <Nav/>
                </PersistGate>
            </Provider>
        )
    }
}