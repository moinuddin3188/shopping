import React from 'react';
import './Sidebar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTh, faChartLine, faListUl } from '@fortawesome/free-solid-svg-icons'
import logo from '../../../Images/logo.png';

const Sidebar = () => {
    return (
        <section className='col-2 pl-5 pr-0 sidebar'>
            <h5>Shopping</h5>
            <div>
                <li>
                    <FontAwesomeIcon className='mr-3' icon={faTh} />
                    Dashboard
                </li>
                <li>
                    <FontAwesomeIcon className='mr-3' icon={faChartLine} />
                    Charts
                </li>
                <li>
                    <FontAwesomeIcon className='mr-3' icon={faListUl} />
                    Orders
                </li>
            </div>
        </section>
    );
};

export default Sidebar;