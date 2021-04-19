import React, { useState } from 'react';
import './AddService.css';
import HeaderMain from '../../Home/Header/HeaderMain/HeaderMain';
import Sidebar from '../Sidebar/Sidebar';

const AddService = () => {
    
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
        formData.append('title', info.title);
        formData.append('price', info.price);
        formData.append('description', info.description);

        fetch('https://vast-ravine-84927.herokuapp.com/addService', {
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
                    <h1>Add Service</h1>

                    <form onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Service Title</label>
                            <input onBlur={handleBlur} type="text" className="form-control" name="title" placeholder="Enter Title"/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="exampleInputEmail1">Price</label>
                            <input onBlur={handleBlur} type="number" className="form-control" name="price" placeholder="Enter Price"/>
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

export default AddService;