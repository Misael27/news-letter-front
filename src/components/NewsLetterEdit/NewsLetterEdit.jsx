import React, { useEffect } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Container from 'react-bootstrap/Container';
import Editor from '../Editor/Editor';
import { BsSave } from "react-icons/bs";
import { useForm } from "react-hook-form";

const NewsLetterEdit = ({ newsLetterData, addOrUpdate }) => {

    const onSubmit = (data) => {
        addOrUpdate(data);
    };

    const initState = {
        id: newsLetterData?.id,
        title: newsLetterData?.id ? newsLetterData.title : '',
        htmlBody: newsLetterData?.id ? newsLetterData.htmlBody : '',
    };
    
    const [initialValues] = React.useState(initState);

    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors }
    } = useForm({
        mode: "onTouched",
        reValidateMode: "onSubmit",
        defaultValues: initialValues
    });

    useEffect(() => {
        register("htmlBody", { required: true, minLength: 12 });
    }, [register]);

    const onEditorStateChange = (editorState) => {
        setValue("htmlBody", editorState);
    };

    const htmlBody = watch("htmlBody");

    return (
        <Container fluid className='mt-5'>
            <div className='text-center text-primary'>
                <h1>{newsLetterData?.id ? "Edit newsletter" : "Create newsletter"}</h1>
            </div>
            <Form onSubmit={handleSubmit(onSubmit)} className='mt-4'>
                {newsLetterData?.id && <Form.Group className="mb-3" controlId="newsLetterForm.ControlId">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Id"
                        className="mb-3">
                        <Form.Control type="text" placeholder="id" readOnly
                            {...register("id")} />
                    </FloatingLabel>
                </Form.Group>}
                <Form.Group className="mb-3" controlId="newsLetterForm.ControlTitle">
                    <FloatingLabel
                        controlId="floatingInput"
                        label="Title"
                        className="mb-3">
                        <Form.Control type="text" placeholder="title"
                            {...register("title", { required: "Title is required" })}
                        />
                    </FloatingLabel>
                    {errors.title && (
                        <Form.Text className="text-danger">
                            {errors.title.message}
                        </Form.Text>
                    )}
                </Form.Group>
                <Form.Group className="mb-3" controlId="newsLetterForm.ControlBody">
                    <Form.Label>Body</Form.Label>
                    <Editor value={htmlBody} onChange={onEditorStateChange} />
                </Form.Group>
                <p className="text-danger">{errors.htmlBody && "Enter valid content for Newsletter"}</p>
                <div className='text-center'>
                    <Button type="submit"><BsSave /> {newsLetterData?.id ? "Update" : "Create"}</Button>
                </div>
            </Form>
        </Container>
    )
}

NewsLetterEdit.propTypes = {}

export default NewsLetterEdit