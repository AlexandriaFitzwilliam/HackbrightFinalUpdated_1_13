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


    return (
        <div class='container-fluid'>
            <br></br>

            <div class='row'>

                <div class='col-4' className='user-details'>
                    <Figure>
                        <Figure.Image
                            // width={250}
                            // height={180}
                            src={`../${userInfo.profile_pic}`}
                        />
                    </Figure>
                </div>

                <div class='col text-start'>
                    <br></br>
                    <h1 className='username'>{userInfo.username}</h1>
                    <p>
                        <h5>Number of Ratings: <span>{userInfo.num_rating}</span></h5>
                        <h5>Average Rating: <span>{userInfo.avg_rating}</span></h5>
                        <h5>About Me: <span>{userInfo.about_me}</span></h5>
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
