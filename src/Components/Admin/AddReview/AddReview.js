import React, { useState } from 'react';
import HeaderMain from '../../Home/Header/HeaderMain/HeaderMain';
import Sidebar from '../Sidebar/Sidebar';
import "./AddReview.css";

const AddReview = () => {

    const [info, setInfo] = useState({});
    const [file, setFile] = useState(null);


    const handleBlur = event => {
        const newInfo = { ...info };
        newInfo[event.target.name] = event.target.value;
        setInfo(newInfo);
    }


    const handleFileChange = event => {
        const newFile = event.target.files[0];
        setFile(newFile);
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData()
        formData.append('file', file);
        formData.append('name', info.name);
        formData.append('designation', info.designation);
        formData.append('description', info.description);

        fetch('https://vast-ravine-84927.herokuapp.com/addReview', {
          method: 'POST',
          body: formData
        })
        .then(response => response.json())
        .then(data => {
          console.log(data)
        })
        .catch(error => {
          console.error(error)
        })
    }





    return (
        <div style={{width:"90%", margin: "auto"}}>
            <HeaderMain></HeaderMain>
            <div className="d-flex">
                <Sidebar></Sidebar>
                <div className="form-container">
                    <h1>Add Review</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Name</label>
                            <input onBlur={handleBlur} type="text" className="form-control" name="name" placeholder="Enter Name"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Designation</label>
                            <input onBlur={handleBlur} type="text" className="form-control" name="designation" placeholder="Enter Designation"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputPassword1">Description</label>
                            <textarea onBlur={handleBlur} className="form-control" name="description" rows="1"></textarea>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Upload Image</label>
                            <input onChange={handleFileChange} type="file" className="form-control" placeholder="Enter Title"/>
                        </div>
                        <button type="submit" className="btn btn-success">Submit</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;