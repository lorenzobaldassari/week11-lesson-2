import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Job from "./Job";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {

  getCompanyAction,
} from "../redux/action";

const CompanySearchResults = () => {
  const params = useParams();
  const jobs = useSelector((state) => state.company.content);
  const baseEndpoint =
    "https://strive-benchmark.herokuapp.com/api/jobs?company=";
  useEffect(() => {
    getCompanyAction(params);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
    <Container>
      <Row>
        <Col className="my-3">
          <h1 className="display-4">Job posting for: {params.company}</h1>
          {jobs.map((jobData) => (
            <Job key={jobData._id} data={jobData} />
          ))}
        </Col>
      </Row>
    </Container>
  );
};

export default CompanySearchResults;
