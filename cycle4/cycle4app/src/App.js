import React, {Component} from 'react';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
library.add(faSearch);



class App extends React.Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Content />
            </div>
        )
    }
}

export default App;
