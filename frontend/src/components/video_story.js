import '../App.css';
import './story.css';
import React, { useState, useEffect } from 'react';

const ImageStory=()=>{
    const [storyList, setStoryList]= useState([]);

    const getStory=async()=>{
        const response= await fetch('/api/storyList')
        const postData= await response.json();
        const data=postData.data
        setStoryList([...data])
    }

    useEffect(() => {
        getStory()
    }, []);

    const dataList=storyList.filter((item)=> item.types=="video/mp4")
    return(
        <>
        <h1>hello Video Story</h1>
        <ul>
            {dataList.map((data)=>{
                return(
                    <li className="column">
                        <div className="card">
                            <video  controls>
                                <source src={data.imageVideo_url} type="video/mp4"/>
                                <h5>{data.name}</h5>
                            </video>
                        </div>
                    </li>
                )
            })}
        </ul>
        </>
    )
}

export default ImageStory;