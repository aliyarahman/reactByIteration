import React, { Component } from 'react';
import logo from './logo.svg';
import './timeline.css';
import ReactDOM from 'react-dom';

class App extends Component {
    render() {
        return (
            <div className="App">
                <Header />
                <Content />
            </div>
        )
    }
}

class Header extends React.Component {
    render() {
        return (
            <div className="header">
                <div className="fa fa-more"></div>

                <span className="title">Timeline</span>

                <input
                    type="text"
                    className="searchInput"
                    placeHolder="Search ..." />

                <div className="fa fa-search searchIcon"></div>
            </div>
        )
    }
}


class Content extends React.Component {
    render() {
        return (
            <div className="content">
                <div className="line"></div>

                {/* Timeline item */}

                <div className="item">
                    <div className="avatar">
                        <img
                        alt='Aliya'
                        src="https://otb.cachefly.net/wp-content/uploads/2018/02/DACA-Prootest-2-256x256.jpg" height="100px" />
                        After Arpaio: AZ state law
                    </div>

                    <span className="time">
                        Starts at 1pm, Today
                    </span>
                    <p>Immigration caucus seeded session 1</p>
                    <div className="commentCount">
                        2
                    </div>
                </div>

                {/* ... */}

            </div>
        )
    }
}


export default App;
