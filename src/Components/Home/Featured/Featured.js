import React from 'react';
import './Featured.css';
import SwiperCore, { Navigation, A11y, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import img from '../../../Images/Group 33092.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


SwiperCore.use([Navigation, A11y, Autoplay]);

const Featured = () => {

    const a = [1, 1, 1];

    return (
        <div className='featured'>
            <Swiper
                slidesPerView={1}
                navigation
                autoplay
            >
                {
                    a.map(a =>
                        <SwiperSlide>
                            <div className="row p-0 py-5">
                                <div className="col-6 d-flex align-items-center">
                                    <div>
                                        <h1> <span className="color"> LOREM IPSUM OUR </span> <br />
                                            <span> DUMMY TEXT </span>
                                        </h1>
                                        <p className="pr-4 mt-2">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ut deserunt repellendus officia nesciunt.</p>
                                        <button className='buy-now-btn my-4'>
                                            <FontAwesomeIcon className="mr-2" icon={faShoppingCart} />
                                            BUY NOW
                                        </button>
                                    </div>
                                </div>
                                <div className="col-6">
                                    <img width="80%" src={img} alt="" />
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>
    );
};

export default Featured;