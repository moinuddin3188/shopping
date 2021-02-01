import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './AdminDashboard.css';
import DashboardHeader from './DashbordHeader/DashboardHeader';
import Earning from './Earning/Earning';
import Orders from './Orders/Orders';
import RevenueChart from './RevenueChart/RevenueChart';

const AdminDashboard = () => {
    return (
        <main className="row m-0">
            <Sidebar />
            <section className="col-10 dashboard">
                <h6 className="pl-2">Dashboard</h6>
                <DashboardHeader />
                <div className='revenue-chart-container'>
                    <RevenueChart />
                </div>
                <div className="row m-0 mt-3">
                    <div className="col-7 p-0 orders-container">
                        <div className='orders-header'>
                            <h6 className='m-0'>Orders</h6>
                        </div>
                        <Orders />
                    </div>
                    <div className="col-5 pl-3 pr-0">
                        <div className='earnings-container p-3'>
                            <Earning />
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default AdminDashboard;