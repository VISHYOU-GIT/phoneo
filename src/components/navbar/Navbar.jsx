
import './Navbar.css'
import { DownOutlined, ShopOutlined, HomeOutlined, ContactsOutlined, PushpinOutlined, HeartOutlined, SafetyOutlined, QuestionCircleOutlined, UserOutlined, AimOutlined, EnvironmentOutlined, MoreOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import { Button, Flex } from 'antd';
import { Link } from 'react-router-dom';


import Search from '../search/search';

import { useEffect, useState } from 'react';

export default function Navbar() {
    const items = [
        {
            key: '1',
            label: (
                <a target="_blank" rel="noopener noreferrer"  >
                    The Mobile Store
                </a>
            ),
            icon: <ShopOutlined />,

        },
        {
            key: '2',
            label: (
                <a target="_blank" rel="noopener noreferrer"  >
                    Kabir Mobile
                </a>
            ),
            icon: <ShopOutlined />,

        },
        {
            key: '3',
            label: (
                <a target="_blank" rel="noopener noreferrer"  >
                    Samsung Mobile
                </a>
            ),
            icon: <ShopOutlined />,
        },
        {
            key: '4',
            label: (
                <a target="_blank" rel="noopener noreferrer"  >
                    Nokia Mobile
                </a>
            ),
            icon: <ShopOutlined />,
        }

    ];
    
    const items2 = [
        {
            key: '11',
            label: (
                <a target="_blank" rel="noopener noreferrer"  >
                    About
                </a>
            ),
            icon: <ShopOutlined />,

        },
        {
            key: '21',
            label: (
                <a target="_blank" rel="noopener noreferrer"  >
                    Contact Us
                </a>
            ),
            icon: <ContactsOutlined />,

        },
        {
            key: '31',
            label: (
                <a target="_blank" rel="noopener noreferrer"  >
                    Careers
                </a>
            ),
            icon: <PushpinOutlined />,
        },
        {
            key: '41',
            label: (
                <a target="_blank" rel="noopener noreferrer"  >
                    Health
                </a>
            ),
            icon: <HeartOutlined />,
        },
        {
            key: '51',
            label: (
                <a target="_blank" rel="noopener noreferrer"  >
                    Privacy & Policy
                </a>
            ),
            icon: <SafetyOutlined />,
        },
        {
            key: '61',
            label: (
                <a target="_blank" rel="noopener noreferrer"  >
                    FAQ
                </a>
            ),
            icon: <QuestionCircleOutlined />,
        }

    ];


    const [location, setLocation] = useState({
        city: '',
        state: '',
        country: '',
        latt:'',
        longg:''
    });
    const [loading, setloading] = useState(false);
    const handleClick = () => {
        setloading(true);
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords;
                fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`)
                    .then(response => response.json())
                    .then(data => {
                        setLocation({
                            city: data.address.city ?? '',
                            state: data.address.state ?? '',
                            country: data.address.country ?? '',
                            latt:latitude,
                            longg:longitude
                        });
                    },
                        setloading(false));
            });
        }
    };

    

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords;
                fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`)
                    .then(response => response.json())
                    .then(data => {
                        setLocation({
                            city: data.address.road ?? data.address.residential ?? '',
                            state: data.address.state ?? '',
                            country: data.address.country ?? ''
                        },
                        setloading(false))
                    console.log(data.address.road)
                    });
            });
        }
    }, []);   
    
    
    return (

        <>
            <nav className="navbar  navbar-expand-lg             bg-navbar pt-0 pb-0 border-bottom border  w-100">
                <div className="container-fluid">
                    <Link to={'/'} className="navbar-brand order-2" href="#">
                        <img className="logo " src="/logo.webp" alt="logo" />
                    </Link>
                    <button className="navbar-toggler shadow-none border-0 mx-0 px-0" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <MoreOutlined className='fw-bold' />


                    </button>
                    <div className="collapse navbar-collapse order-4 " id="navbarNav">
                        <ul className="navbar-nav mx-auto">
                            <li className="nav-item">
                                <Link to='/about' className="nav-link active" aria-current="page" role='button' href="#"><EnvironmentOutlined /> {location.latt} , {location.longg}</Link>
                            </li>
                            <li className="nav-item d-none d-md-grid">
                                <Search />
                            </li>
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" role='button'>
                                    <Button loading={loading} icon={<AimOutlined />} onClick={handleClick} size="large">
                                         {loading ? 'Loading Location...' : location.city ? `${location.city}` : 'Get Location'}
                                    </Button>

                                </a>
                            </li>


                            <li className="nav-item" role='button'>
                                <Dropdown className='nav-link'
                                    menu={{
                                        items: items2,
                                    }}
                                >
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            <HomeOutlined className='icons' />More
                                            <DownOutlined style={{ fontSize: '10px' }} />
                                        </Space>
                                    </a>
                                </Dropdown>
                            </li>
                            <li className="nav-item" role='button'>
                                <Dropdown className='nav-link'
                                    menu={{
                                        items,
                                    }}
                                >
                                    <a onClick={(e) => e.preventDefault()}>
                                        <Space>
                                            <ShopOutlined className='icons' />By Shop
                                            <DownOutlined style={{ fontSize: '10px' }} />
                                        </Space>
                                    </a>
                                </Dropdown>
                            </li>


                        </ul>

                    </div>
                        <span className="order-2 order-lg-last order-md-3   ">
                        <Button shape='circle' className=' d-md-none' icon={<UserOutlined />} /> 
                        <Button className='d-none d-md-inline-block' icon={<UserOutlined />} >
                            Login
                        </Button>
                    </span>
                    <nav className='d-lg-none d-inline order-3 order-md-2 py-1'>
                      
                        <Search />
                    </nav>
                </div>
            </nav>
          
        </>
    )
}