import React from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import './Editor.css'

const Editor = ({value, onChange}) => {

    const modules = {
        toolbar: [
            [{ 'font': [] }],
            [{ 'align': [] }],
            [{ 'header': [1, 2, 3, 4, false] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [{ 'color': [] }],
            [{ 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' }],
            ['link', 'image'],
            ['clean']
        ],
    }
    const formats = [
        'font',
        'align',
        'header',
        'bold', 'italic', 'underline', 'strike', 'blockquote', 'color',
        'list', 'bullet', 'indent',
        'link', 'image'
    ]

    return (
        <div className="text-editor">
            <ReactQuill theme="snow"
                modules={modules}
                formats={formats}
                value={value}
                onChange={(value) => onChange(value)}>
            </ReactQuill>
        </div>
    )
}

Editor.propTypes = {}

export default Editor