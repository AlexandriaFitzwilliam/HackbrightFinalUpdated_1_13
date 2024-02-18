import React from 'react';
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
        </Figure>
        <ListGroup>
            <ListGroup.Item>Number of Ratings: <span className='details'>{userInfo.num_rating}</span></ListGroup.Item>
            <ListGroup.Item>Average Rating: <span className='details'>{userInfo.avg_rating}</span></ListGroup.Item>
            <ListGroup.Item>About Me: <span className='details'>{userInfo.about_me}</span></ListGroup.Item>
        </ListGroup>
        <AllShelfs user_id={userInfo.user_id}/>
        {/* <ShelfDetails shelf_id={userInfo.user_id}/> */}
        <UserReviews user_id={userInfo.user_id}/>
        </div>

        </div>
    )
}

export default LoggedInHome