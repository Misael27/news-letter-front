import React from 'react'
import { Link } from 'react-router-dom'
import Alert from 'react-bootstrap/Alert';


const NotFoundPage = () => {
    return (
        <>
            <Alert variant={'danger'} style={{textAlign:'center'}}>
                {'404 | The resource does not exist '}
                <Alert.Link to="/" as={Link}>Return to homepage</Alert.Link>. Give it a click if
                you like.
            </Alert>
        </>
    )
}

export default NotFoundPage