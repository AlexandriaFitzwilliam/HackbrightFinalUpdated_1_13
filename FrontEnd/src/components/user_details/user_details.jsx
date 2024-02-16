import React from 'react';
import './user_details.css';
import Figure from 'react-bootstrap/Figure';
import ListGroup from 'react-bootstrap/ListGroup';
import UserReviews from '../user_reviews/user_reviews'
import {useParams} from "react-router-dom"


const UserDetails = (props) => {
    const {user_id} = props;
    const [userInfo, setUserInfo] = React.useState({});
    let { id } = useParams();

    React.useEffect(() => {
        fetch(`/api/userid/${id}`)
          .then((response) => response.json())
          .then((result) => setUserInfo(result));
    }, [user_id]);

    console.log(userInfo.profile_pic)

    return (
        <div>
            <h1>{userInfo.username}</h1>
            <div className='user-details'>
                <img src={userInfo.profile_pic}></img>
            {/* <Figure>
                <Figure.Image
                    // width={171}
                    // height={180}
                    // alt="171x180"
                    src={userInfo.profile_pic}
                />
        </Figure> */}
        <ListGroup>
            <ListGroup.Item>Number of Ratings: {userInfo.num_rating}</ListGroup.Item>
            <ListGroup.Item>Average Rating: {userInfo.avg_rating}</ListGroup.Item>
            <ListGroup.Item>About Me: {userInfo.about_me}</ListGroup.Item>
        </ListGroup>
        <UserReviews user_id={userInfo.user_id}/>
        </div>

        </div>
    )
}

export default UserDetails
