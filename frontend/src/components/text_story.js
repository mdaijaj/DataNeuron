import react from "react";
import '../App.css';
import './story.css'
import React, { useState, useEffect } from 'react';
import { ResizeConsumer } from "react-resize-context";
// import EditableRow from './edit_data'
const TextStory=()=>{
    const [storyList, setStoryList]= useState([]);

    const getStory=async()=>{
        const response= await fetch('/api/allContent')
        const postData= await response.json();
        const data=postData.data
        setStoryList([...data])
    }

    const getIdData= async ()=>{
        const response= await fetch(`/api/allContent`)
        const postData= await response.json();
        const data=postData.data
        console.log("data", data)
    }

    useEffect(() => {
        getStory()
    }, []);
    return(
        <>
        <h1>All Data List</h1>
        <ResizeConsumer className="flex-item">
        <table class="table table-striped">
            <thead>
                <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">First_Name</th>
                    <th scope="col">Last_Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Mobile</th>
                    <th scope="col">Title</th>
                    <th scope="col">Time</th>
                    <th scope="col">Action</th>
                </tr>
            </thead>
            <tbody>
            {storyList.map((elem,i)=>
                <tr>
                    <th scope="row">{i+1}</th>
                    <td>{elem.firstname}</td>
                    <td>{elem.lastname}</td>
                    <td>{elem.email}</td>
                    <td>{elem.mobile}</td>
                    <td>{elem.title}</td>
                    <td>{elem.time}</td>
                    <td>
                        <button type="button" data-toggle="modal" data-target="#exampleModal" className="btn btn-primary" onClick={getIdData()} ><i className="far fa-edit"></i></button>
                        <button class="btn btn-warning text-light" ></button>
                    </td>
                </tr>
            )}
            </tbody>
        </table>
    </ResizeConsumer>


    {/*model  */}

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">New message</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                <form>
                <div class="form-group">
                    <label for="recipient-name" class="col-form-label">Id:</label>
                    <input type="text" class="form-control" id="recipient-name"/>
                </div>
                <div class="form-group">
                    <label for="recipient-name" class="col-form-label">first_name:</label>
                    <input type="text" class="form-control" id="recipient-name"/>
                </div>
                <div class="form-group">
                    <label for="recipient-name" class="col-form-label">last_name:</label>
                    <input type="text" class="form-control" id="recipient-name"/>
                </div>
                <div class="form-group">
                    <label for="recipient-name" class="col-form-label">mobile:</label>
                    <input type="text" class="form-control" id="recipient-name"/>
                </div>
                <div class="form-group">
                    <label for="recipient-name" class="col-form-label">email:</label>
                    <input type="text" class="form-control" id="recipient-name"/>
                </div>
                <div class="form-group">
                     <label for="recipient-name" class="col-form-label">time:</label>
                     <input type="text" class="form-control" id="recipient-name"/>
                </div>
                <div class="form-group">
                     <label for="recipient-name" class="col-form-label">title:</label>
                     <input type="text" class="form-control" id="recipient-name"/>
                </div>
                <button>Submit</button>
                </form>
            </div>
            </div>
        </div>
        </div>

       </>
    )
}

export default TextStory;