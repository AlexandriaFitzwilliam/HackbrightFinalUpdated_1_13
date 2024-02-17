import React from 'react';
import './logged_in_home.jsx';
import Figure from 'react-bootstrap/Figure';
import ListGroup from 'react-bootstrap/ListGroup';
import UserReviews from '../user_reviews/user_reviews'
import ShelfDetails from '../about/shelf_details.jsx';
import AllShelfs from '../all_shelfs/all_shelfs.jsx';


const LoggedInHome = (props) => {
    const {user_id} = props;
    const [userInfo, setUserInfo] = React.useState({});


    React.useEffect(() => {
        fetch(`/api/userid/${user_id}`)
          .then((response) => response.json())
          .then((result) => setUserInfo(result));
    }, [user_id]);

    return (
        <div>
            <div className='user-details'>
                <h1>{userInfo.username}</h1>
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
            <ListGroup.Item>Number of Ratings: {userInfo.num_rating}</ListGroup.Item>
            <ListGroup.Item>Average Rating: {userInfo.avg_rating}</ListGroup.Item>
            <ListGroup.Item>About Me: {userInfo.about_me}</ListGroup.Item>
        </ListGroup>
        <AllShelfs user_id={userInfo.user_id}/>
        {/* <ShelfDetails shelf_id={userInfo.user_id}/> */}
        <UserReviews user_id={userInfo.user_id}/>
        </div>

        </div>
    )
}

export default LoggedInHome