import React, { useEffect, useState } from 'react'
import { useDispatch } from "react-redux";
import { login } from "../../slices/auth";
import { clearMessage } from "../../slices/message";
import { useForm } from "react-hook-form";
import Form from 'react-bootstrap/Form';
import Toastm from '../Toast/Toastm';
import { useNavigate } from 'react-router-dom';

export const Login = ({ changeAuthMode }) => {

    const dispatch = useDispatch();
	const navigate = useNavigate();
    
    useEffect(() => {
        dispatch(clearMessage());
    }, [dispatch]);

    const onSubmit = (data) => {
        dispatch(login(data))
            .unwrap()
            .then(() => {
                navigate("/");
            })
            .catch(() => {
                showError()
            });
    };

    const initState = {
        email: "",
        password: "",
    };

    const [initialValues] = React.useState(initState);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({
        mode: "onTouched",
        reValidateMode: "onSubmit",
        defaultValues: initialValues
    });

    const [errorMessage, setErrorMessage] = useState({
        title: '',
        message: '',
    })
    const [show, setShow] = useState(false)

    const showError = () => {
        setErrorMessage({
            title: 'Error',
            message: 'Invalid credentials, please try again'
        });
        setShow(true);
    }

    return (
        <>
            <Toastm title={errorMessage.title} message={errorMessage.message} show={show} setShow={setShow} bg={'danger'} />
            <div className="Auth-form-container">
                <Form onSubmit={handleSubmit(onSubmit)} className="Auth-form">
                    <div className="Auth-form-content">
                        <h3 className="Auth-form-title">Sign In newsletter manager</h3>
                        <div className="text-center">
                            Not registered yet?{" "}
                            <span className="link-primary" onClick={changeAuthMode} style={{ cursor: 'pointer' }}>
                                Sign Up
                            </span>
                        </div>
                        <div className="form-group mt-3">
                            <label>Email address</label>
                            <Form.Control
                                type="email"
                                className="form-control mt-1"
                                placeholder="Email Address"
                                {...register("email", { required: "email is required" })}
                            />
                            {errors.email && (
                                <Form.Text className="text-danger">
                                    {errors.email.message}
                                </Form.Text>
                            )}
                        </div>
                        <div className="form-group mt-3">
                            <label>Password</label>
                            <Form.Control
                                type="password"
                                className="form-control mt-1"
                                placeholder="Password"
                                {...register("password", { required: "password is required" })}
                            />
                            {errors.password && (
                                <Form.Text className="text-danger">
                                    {errors.password.message}
                                </Form.Text>
                            )}
                        </div>
                        <div className="d-grid gap-2 mt-3">
                            <button type="submit" className="btn btn-primary">
                                Submit
                            </button>
                        </div>
                    </div>
                </Form>
            </div>
        </>

    )
}