import React, { useState, useEffect, useCallback } from 'react'
import NewsLetter from '../../../components/NewsLetter/NewsLetter';
import { getByIdApi } from '../../../api/NewsLetterApi'
import { useParams, useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const ShowPage = () => {
    const [newsLetterData, setNewsLetterData] = useState();
    const [loading, setLoading] = useState(false);
    let { id } = useParams();
    const navigate = useNavigate();

    const fetchNewLetterData = useCallback( async (id) => {
        setLoading(true);
        try {
            const data = await getByIdApi(id);
            setNewsLetterData(data)
        }
        catch (err) {
            navigate("/not-found");
        }
        setLoading(false);
      }, [navigate])

    useEffect(() => {
        if (!newsLetterData && !loading) {
            fetchNewLetterData(id);
        }
    }, [id, newsLetterData, loading, fetchNewLetterData])

    return (
        <>
            <Container> 
                <Row>       
                    {loading && (
                    <Col className="mt-5 text-center">
                        <Spinner animation="border" variant="primary" />
                    </Col>)}
                    {!loading && newsLetterData && (
                    <Col className="mt-1 text-justify">
                        <NewsLetter {...newsLetterData} />
                    </Col>)}
                </Row>
            </Container>
        </>
    )
}

ShowPage.propTypes = {}

export default ShowPage