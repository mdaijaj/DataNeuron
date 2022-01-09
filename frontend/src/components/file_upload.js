import React from 'react'
import axios from 'axios';
import { ResizeConsumer } from "react-resize-context";
import "./story.css";

class ReactUploadImage extends React.Component {
    constructor(props) {
        super(props);
        this.state ={file: null};
        this.state = {value: ''};
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }
    onFormSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('myImage',this.state.file);
        formData.append('fname', this.state.value)
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        console.log("formData", formData)
        axios.post("/api/uploadStory", formData, config)
        .then((response) => {
            console.log("response", response)
            alert("The file is successfully uploaded");
        }).catch((error) => {
            console.log(error.message)  
            console.log("error while uploading image...")
        });
    }
    onChange(e) {
        this.setState({file:e.target.files[0]});
    }
    handleChange(event) {  
        console.log("event.target.value", event.target.value)  
        this.setState({value: event.target.value});  
    }
   
    render() {
        return (
        <ResizeConsumer className='flex-item-right'>
            <form onSubmit={this.onFormSubmit}>
                <h1>File Upload</h1>
                <label> Username:
                    <input type="text" name="fname" value={this.state.value} onChange={this.handleChange} />        
                </label> <br/><br/>
                <input type="file" name="myImage" onChange= {this.onChange} />
                <button type="submit">Upload</button>
            </form>
        </ResizeConsumer>
        )
    }
}

export default ReactUploadImage;

