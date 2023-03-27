import React, { useState } from 'react'
import PropTypes from 'prop-types'
import ReactHtmlParser from 'react-html-parser';
import { Card, Stack, Button, Row, Col } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import moment from "moment"
import { BsFillPencilFill, BsFillTrashFill } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';
import Toastm from '../Toast/Toastm';
import { removeNewsLetterApi } from '../../api/NewsLetterApi';

const NewsLetter = ({ id, title, htmlBody, createdAt }) => {

    const navigate = useNavigate();
    const onHandleEdit = () => {
        navigate(`/newsletter/upsert/${id}`);
    }

    const onHandleRemove = () => {
        removeNewsLetter(id);
    }

    const [message, setMessage] = useState({
        title : '',
        message: '',
    })
    const [showMessage, setShowMessage] = useState(false)    
    const showError = () => {
        setMessage({
            title : 'Error',
            message: 'An error has occurred, please try again',
            bg: 'danger'
        });
        setShowMessage(true);  
    }
    const showSucc = () => {
        setMessage({
            title : 'Success',
            message: 'Newsletter successfully removed',
            bg: 'success'
        });
        setShowMessage(true);  
    }

    const removeNewsLetter = async (id) => {
        try {
            await removeNewsLetterApi(id);
            showSucc();
            navigate('/');
        }
        catch (err) {
            showError();
        }
    }

    return (
        <Container fluid>
            <Toastm title={message.title} message={message.message} show={showMessage} setShow={setShowMessage} bg={message.bg}/>
            <Card>
                <Card.Body>
                    <Card.Title><h1>{title}</h1></Card.Title>
                    <Card.Subtitle className="mb-3 text-muted">{moment(createdAt).format("YYYY-MM-DD h:mm a")}</Card.Subtitle>
                    <Stack className="text-center">
                        <Row>
                            <Col md={{ span: 3, offset: 10 }}>
                                <Stack direction='horizontal' gap={2}>
                                    <Button variant="primary" onClick={() => onHandleEdit()}><BsFillPencilFill /> Edit</Button>
                                    <div className="vr" />
                                    <Button variant="danger" onClick={() => onHandleRemove()}><BsFillTrashFill /> Remove</Button>
                                </Stack>
                            </Col>
                        </Row>
                        <div>{ReactHtmlParser(htmlBody)}</div>
                    </Stack>
                </Card.Body>
            </Card>
        </Container>
    )
}

NewsLetter.propTypes = {
    title: PropTypes.string.isRequired,
    htmlBody: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired
}

export default NewsLetter