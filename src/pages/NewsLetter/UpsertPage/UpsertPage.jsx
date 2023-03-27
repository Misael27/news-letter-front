import React, { useState, useEffect, useCallback } from 'react'
import NewsLetterEdit from '../../../components/NewsLetterEdit/NewsLetterEdit';
import Toastm from '../../../components/Toast/Toastm'
import { getByIdApi, addOrUpdateNewsLetterApi } from '../../../api/NewsLetterApi'
import { useParams, useNavigate } from 'react-router-dom';
import Spinner from 'react-bootstrap/Spinner'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const UpsertPage = () => {
    const [newsLetterData, setNewsLetterData] = useState();
    const [loading, setLoading] = useState(false);
    let { id } = useParams();
    const navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState({
        title : '',
        message: '',
    })
    const [show, setShow] = useState(false)    

    const addOrUpdate = async (data) => {
        setLoading(true);
        try {
            data = await addOrUpdateNewsLetterApi(data);
            setNewsLetterData(data)
            navigate(`/newsletter/${data.id}`);
        }
        catch (err) {
            showError();
        }
        setLoading(false);
    }

    const fetchNewLetterData = useCallback(async (id) => {
        setLoading(true);
        try {
            const data = await getByIdApi(id);
            setNewsLetterData(data)
        }
        catch (err) {
            showError()
        }
        setLoading(false);
    }, []);

    const showError = () => {
        setErrorMessage({
            title : 'Error',
            message: 'An error has occurred, please try again'
        });
        setShow(true);  
    }

    useEffect(() => {
        if (id && !newsLetterData) {
            fetchNewLetterData(id);
        }
    }, [id, newsLetterData, fetchNewLetterData])

    return (
        <>
            <Container>
                <Row>
                    {loading && (
                        <Col className="mt-5 text-center">
                            <Spinner animation="border" variant="primary" />
                        </Col>)}
                    {!loading && (
                        <Col className="mt-1 text-justify">
                            <NewsLetterEdit newsLetterData={newsLetterData} addOrUpdate={addOrUpdate}/>
                        </Col>)}
                </Row>
                <Toastm title={errorMessage.title} message={errorMessage.message} show={show} setShow={setShow}/>
            </Container>
        </>
    )
}

UpsertPage.propTypes = {}

export default UpsertPage