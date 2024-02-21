import React from 'react';
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


    return (
        <div class='container'>
            <br></br>

            <div class='row'>

                <div className='col-4 user-details-pic'>
                    {/* <img src={`../${userInfo.profile_pic}`} /> */}
                    <Figure>
                        <Figure.Image
                            src={`../${userInfo.profile_pic}`}
                        />
                    </Figure>
                </div>

                <div className='col text-start'>
                    <br></br>
                    <h1 className='username'>{userInfo.username}</h1>
                    <p>
                        <h5>Number of Ratings: <span className='details'>{userInfo.num_rating}</span></h5>
                        <h5>Average Rating: <span className='details'>{userInfo.avg_rating}</span></h5>
                        <h5>About Me: <span className='details'>{userInfo.about_me}</span></h5>
                    </p>
                </div>

                {/* <div class='col'>
                    <ListGroup>
                        <ListGroup.Item>Number of Ratings: {userInfo.num_rating}</ListGroup.Item>
                        <ListGroup.Item>Average Rating: {userInfo.avg_rating}</ListGroup.Item>
                        <ListGroup.Item>About Me: {userInfo.about_me}</ListGroup.Item>
                    </ListGroup>
                </div> */}
        </div>
        <div class='row'>
            <UserReviews user_id={userInfo.user_id}/>
        </div>

        </div>
    )
}

export default UserDetails
