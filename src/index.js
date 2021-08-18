// Third Party Imports
import React from 'react'
import ReactDOM from 'react-dom'

// Local Imports
import BasicInfo from './components/BasicInfo'

const App = () => {
    return (
        <BasicInfo />
    )
}

ReactDOM.render(<App />, document.getElementById('app'))