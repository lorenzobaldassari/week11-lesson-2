import { Row, Col,Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import FavouriteJob from "./FavouriteJob";


const Favourites = () => {
  const jobs= useSelector((state)=>state.favourites.content)
  return (
    <>
  <Container>
      <Row>
        <Col className="my-3">
          {jobs.map(jobData => (
            <FavouriteJob key={jobData._id} data={jobData}/>
          ))}
        </Col>
      </Row>
    </Container>
    </>
  );
};


export default Favourites