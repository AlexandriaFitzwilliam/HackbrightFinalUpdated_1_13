import React from 'react';
import './user_details.css';
import Figure from 'react-bootstrap/Figure';
import ListGroup from 'react-bootstrap/ListGroup';
import UserReviews from '../user_reviews/user_reviews'
// import {useParams, useRouteMatch} from "react-router-dom"


const UserDetails = () => {
    const [userInfo, setUserInfo] = React.useState({})
    // const {user_id} = useParams();
    // console.log(`user_id=${user_id}`)

    // React.useEffect(() => {
    //     fetch(`/api/user/${user_id}`)
    //       .then((response) => response.json())
    //       .then((result) => setUserInfo(result));
    // }, [user_id]);

    // console.log(`userInfo.user_id=${userInfo.user_id}`)
    // console.log(userInfo, 'line 18')
    return (
        <div>
            <h1>User Details go here.</h1>
            <div className='user-details'>
            <Figure>
                <Figure.Image
                    width={171}
                    height={180}
                    alt="171x180"
                    src="holder.js/171x180"
                />
                <Figure.Caption>
                    Username: {userInfo.username}
                </Figure.Caption>
        </Figure>
        <ListGroup>
            <ListGroup.Item>Number of Ratings: {userInfo.num_ratings}</ListGroup.Item>
            <ListGroup.Item>Average Rating: {userInfo.avg_rating}</ListGroup.Item>
            <ListGroup.Item>About Me: {userInfo.about_me}</ListGroup.Item>
        </ListGroup>
        <h4>The below user ratings are done through the user_details page.</h4>
        <UserReviews user_id={userInfo.user_id}/>
        </div>

        </div>
    )
}

export default UserDetails
