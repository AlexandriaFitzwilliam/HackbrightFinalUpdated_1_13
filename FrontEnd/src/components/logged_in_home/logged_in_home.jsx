import React from 'react';
import './logged_in_home.jsx';
import ShelfDetails from '../about/shelf_details.jsx';
import UserDetails from '../user_details/user_details.jsx';

const LoggedInHome = () => {

    return (
        <div>
            <UserDetails />
            <ShelfDetails />
        </div>
    )
}

export default LoggedInHome