import React, {Component} from 'react';
import {connect} from 'react-redux';
import { withRouter } from 'react-router'
import pinguin2 from '../../Assets/pinguin2.png'

import './UserItem.css'

class UserItem extends Component {
    userProfileHandler = event => {
        event.preventDefault();
        this.props.history.push("/userprofile")
    }

    render() {
        return (
            <div className='user-card-main-container' onClick={this.userProfileHandler}>
                <div className="userCardTop">
                    <img src={pinguin2} alt="" className="userPinguinAvatar"/>
                    <div className="userCardTopRight">
                        <p className="username">{this.props.user.username}</p>
                        <p>6 Reviews in total</p>
                    </div>
                </div>
                <div className="userCardBottomDesciption">
                    <p>Im professional photographer with an eye for details in every thing I do in my live. Every time a pass by a nice restaurant i have to stop and take notes...  read more</p>
                </div>
            </div>
        );
    }
}

export default connect()(withRouter(UserItem));
