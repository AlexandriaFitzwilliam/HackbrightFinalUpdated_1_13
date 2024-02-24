import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from "react-router-dom";

const AllUsers = () => {
    const [users, setUsers] = React.useState({});
    const userCards = [];

    React.useEffect(() => {
        fetch(`/api/all_users`)
          .then((response) => response.json())
          .then((result) => setUsers(result));
      }, []);

      for (const user of Object.values(users)) {
        const userCard = (
            <UserCard
            username={user.username}
            avg_rating={user.avg_rating}
            num_ratings={user.num_rating}
            profile_pic={user.profile_pic}
            user_id={user.user_id} // this needs to be user_id={user.user_id} -Thu
            />
        );
        userCards.push(userCard)
      }


    return (
        <div>
            <h1 className='search-title'>All Users</h1>
            <div className='row'>{userCards}</div>

        </div>
    )
}

export default AllUsers

function UserCard(props) {
    const {username, avg_rating, num_ratings, profile_pic, user_id} = props;

    return (
        <div className='col-4 usercard' id={user_id}>
    <Card className="ratingcard-details" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={profile_pic} />
      <Card.Body>
        <Card.Title className='ratingcard-title'>{username}</Card.Title>
        <Card.Text className='ratingcard-score'>
          Number of Ratings: {num_ratings}
        </Card.Text>
        <Card.Text className='ratingcard-score'>
          Average Rating: {avg_rating}
        </Card.Text>
        <Link className='ratingcard-text' to={`user/${user_id}`}>View User</Link>
      </Card.Body>
    </Card>
            <br />
        </div>
    )
}
