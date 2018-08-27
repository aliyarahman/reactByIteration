import React, {Component} from 'react';

class Content extends Component {
    render() {
        return (
           <div className="content">
                <div className="line"></div>

                {/* Session block */}

                <div className="item">
                    <div className="avatar">
                        <img
                        alt='Immigration rally'
                        src="https://otb.cachefly.net/wp-content/uploads/2018/02/DACA-Prootest-2-256x256.jpg" height="100px" />
                        After Arpaio: AZ state law and immigrant families
                    </div>

                    <span className="time">
                        Starts at 1pm, Today
                    </span>
                    <p>Immigration caucus seeded session 1</p>
                    <div className="numInterested">
                        2
                    </div>
                </div>

                {/* ... */}

            </div>
        )
    }
}


export default Content;