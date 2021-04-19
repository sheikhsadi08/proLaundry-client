import React from 'react';
import HeaderMain from '../../Home/Header/HeaderMain/HeaderMain';
import Sidebar from '../Sidebar/Sidebar';

const ManageService = () => {
    return (
        <div style={{width:"90%", margin: "auto"}}>
            <HeaderMain></HeaderMain>
            <div className="d-flex">
                <Sidebar></Sidebar>
                <div>
                    <h1>this is ManageService list</h1>
                </div>
            </div>
        </div>
    );
};

export default ManageService;