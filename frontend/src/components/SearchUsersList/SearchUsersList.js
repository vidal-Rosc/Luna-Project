import React, {Component} from 'react';
import {connect} from 'react-redux';
import UserItem from '../UserItem/UserItem';

import './SearchUsersList.css';

class SearchUsersList extends Component {
    render() {
        return (
            <div className='search-users-list'>
                {
                    this.props.usersList
                        ? this.props.usersList.map((user, index) => {
                            console.log(user)
                            return <UserItem user={user} key={index}/>;
                        })
                        : ("loading users...please wait")
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
  return({
    usersList: state.usersListReducer.listUsers
  })
}
export default connect(mapStateToProps)(SearchUsersList);