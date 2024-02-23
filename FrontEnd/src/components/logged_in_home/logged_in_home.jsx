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
            <br></br>
        <div className="row user-details-full">
            <Figure className="col-4 ">
                <Figure.Image
                    src="../../src/static/open_book.jpg"
                    className='border-double'
                />
            </Figure>
            <div className='col user-details text-start'>
                <h1 className='username'>{userInfo.username}</h1>
                <div className='border-double'>
                    <h5>Number of Ratings: <span className='details'>{userInfo.num_rating}</span></h5>
                    <h5>Average Rating: <span className='details'>{userInfo.avg_rating}</span></h5>
                    <h5>About Me: <span className='details'>{userInfo.about_me}</span></h5>
                </div>
        </div>
        </div>
        <AllShelfs className="row all-shelves-home" user_id={userInfo.user_id}/>
        {/* <ShelfDetails shelf_id={userInfo.user_id}/> */}
        <UserReviews className="row" user_id={userInfo.user_id}/>
        
        </div>
    )
}

export default LoggedInHome