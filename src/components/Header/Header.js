import React from 'react';
import { Link } from 'react-router-dom';


export default function Header() {
    return (
        <div className='header'>
            <img className='icon' src='https://shelfie.devmountain.com/v2/part3/favicon.ico' />
            <h1>Shelfie</h1>
            <div className='header_nav'>
                <Link className='link' to='/'>Dashboard</Link>
                <Link className='link' to='/add'>Add Inventory</Link>
            </div>
        </div>
    )
}