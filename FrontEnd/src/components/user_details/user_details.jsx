import React from 'react';
import './user_details.css';
import Figure from 'react-bootstrap/Figure';
import ListGroup from 'react-bootstrap/ListGroup';
import UserReviews from '../user_reviews/user_reviews'


const UserDetails = () => {
    const [userInfo, setUserInfo] = React.useState({})

    React.useEffect(() => {
        fetch(`/api/user/1`)
          .then((response) => response.json())
          .then((result) => setUserInfo(result));
      }, []);

    //   for (const [key, value] of Object.entries(userInfo)) {
    //     const key = value
    //     console.log(`key`)
    //   }

    // console.log(`object.entries(userInfo) = ${userInfo.username}`)




    return (
        <div>
            <h1>User Details go here. Are you updating?</h1>
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
        <UserReviews />
        </div>

        </div>
    )
}

export default UserDetails

// function UserInfo(props) {
//     const {username} = props;

//     return (
//         <div className='user-details'>
//             <Figure>
//         {/* <Figure.Image
//             width={171}
//             height={180}
//             alt="171x180"
//             src="holder.js/171x180"
//         /> */}
//         <Figure.Caption>
//             Username: {username}
//         </Figure.Caption>
//         </Figure>
//         </div>
//     )
// }