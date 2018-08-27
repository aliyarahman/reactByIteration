import React, {Component} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class Header extends Component {
    render() {
        return (
            <div className="header">
                <div className="bar"></div>

                <span className="title">FIND A SESSION</span>
                    
                <input
                    type="text"
                    className="searchInput"
                    placeHolder="Search ..." />

                <FontAwesomeIcon
                icon="search"/>
            </div>
        )
    }
}


export default Header;