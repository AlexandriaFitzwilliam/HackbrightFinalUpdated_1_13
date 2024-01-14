import React from 'react';
import './all_users.css';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const AllUsers = () => {
    const [users, setUsers] = React.useState({})
    const userCards = []

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
            num_ratings={user.num_ratings}
            profile_pic={user.profile_pic}
            />
        );
        userCards.push(userCard)
      }


    return (
        <div>
            <h1>All Users - glance goes here</h1>
            <span>{userCards}</span>

        </div>
    )
}

export default AllUsers

function UserCard(props) {
    const {username, avg_rating, num_ratings, profile_pic} = props;


    return (
        <div className='usercard'>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="holder.js/100px180" />
      <Card.Body>
        <Card.Title>{username}}</Card.Title>
        <Card.Text>
          Number of Ratings: {num_ratings}
          Average Rating: {avg_rating}
        </Card.Text>
        <Button variant="primary">View User</Button>
      </Card.Body>
    </Card>
            <br />
        </div>
    )
}