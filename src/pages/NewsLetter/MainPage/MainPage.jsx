import React, { useState } from 'react'
import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { Col, Row, Container } from 'react-bootstrap';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const MainPage = () => {

	const [val, setVal] = useState('');
	const navigate = useNavigate();

	const onHandleSearch = () => {
		navigate(`/newsletter/${val}`);
	}

	return (
		<Container className="mt-5 text-center">
		<h2 className='text-primary'>Welcome news letter management</h2>
			<Row className="mt-5">
				<Col md={{ span: 4, offset: 4 }} className="mt-1 text-justify">
				<p>Write an id to search for a newsletter or <Link to='/newsletter/upsert'><strong>Create NEW here</strong></Link></p>
					<Stack className="mt-5 mb-5" direction="horizontal" gap={1}>
						<Form.Control className="me-auto" placeholder="Find by ID here..."
							value={val}
          					onChange={e => setVal(e.target.value)} />
						<div className="vr" />
						<Button variant="primary" onClick={() => onHandleSearch()}>Search</Button>
					</Stack>
					<img src={process.env.PUBLIC_URL+"/newsletter_icon.png"} width='200'/>
				</Col>
			</Row>
		</Container>
	)
}

MainPage.propTypes = {}

export default MainPage