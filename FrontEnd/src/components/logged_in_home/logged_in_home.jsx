import React from 'react';
import './logged_in_home.jsx';
import ShelfDetails from '../about/shelf_details.jsx';
import UserDetails from '../user_details/user_details.jsx';

const LoggedInHome = () => {
    const user_id = 9;

    return (
        <div>
            <h1>Logged in homepage</h1>
            <UserDetails user_id={user_id}/>
            <ShelfDetails user_id={user_id}/>
        </div>
    )
}

export default LoggedInHome