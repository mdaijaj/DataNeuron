import axios from 'axios'
import react from "react";
const ImageModel=()=>{

    const fileChangedHandler = (event) => {
        const file = event.target.files[0]
      }
      
    const uploadHandler = () => {}

    const state = { selectedFile: null }
    fileChangedHandler = event => {
        this.setState({ selectedFile: event.target.files[0] })
    }
    
    var formData;
    uploadHandler = () => {
        formData = new FormData()
        formData.append(
          'myFile',
          this.state.selectedFile,
          this.state.selectedFile.name
        )
        axios.post('my-domain.com/file-upload', formData)
    }
    uploadHandler = () => {
        axios.post('my-domain.com/file-upload', formData, {
            onUploadProgress: progressEvent => {
            console.log(progressEvent.loaded / progressEvent.total)
            }
        })
    }
    return (
        <>
            <input type="file" onChange={this.fileChangedHandler}/>
            <button onClick={this.uploadHandler}>Upload!</button>
        </>
    )
}

export default ImageModel;