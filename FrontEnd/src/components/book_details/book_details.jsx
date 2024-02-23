import React from 'react';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';


function BookCard(props) {
    const {
      id, 
      title, 
      author, 
      // overview, 
      // publish_date, 
      cover_pic,
      avg_rating,
      // num_ratings
                    } = props;

                    return (
                        <div className='box bookcard' id={`bookcard_id`}>
                          <div className='body'>
                              <img className='imgContainer' src={cover_pic} />
                              <div class="content d-flex flex-column align-items-center justify-content-center">
                                  <div>
                                      <a className='text-white fs-5' href={`/book/${id}`}>Average Rating:<br></br>{avg_rating} Stars</a>
                                  </div>
                              </div>
                            </div>
                        </div>
                    )
                }
//       return (
//           <div className='row bookcard' id={`bookcard_id`}>


//             <img className='col-2' src={cover_pic} />
//             <h5 className='col' ><a href={`/book/${id}`}>{title}</a></h5>


//               <Card style={{ width: '12rem' }}>
//               <Card.Img variant="top" src={cover_pic} />
//               <Card.Body>
//                   <Card.Title>
//                   <Card.Link href={`/book/${id}`}>{title}</Card.Link>
//                     </Card.Title>
//                   <Card.Text>
//                   {author}
//                   </Card.Text>
//               </Card.Body>
//               <ListGroup className="list-group-flush p-3">
//                   <ListGroup.Item>Average Rating: {avg_rating}</ListGroup.Item>
//                   <ListGroup.Item>
//                   <Card.Link href={`/add_book/${id}`}>Add to Shelf</Card.Link>
//                   </ListGroup.Item>
//               </ListGroup>
//               </Card>
  
//           </div>
//       )
//   }

  export default BookCard