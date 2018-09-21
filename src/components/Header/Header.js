// IMPORT PACKAGE REFERENCES

import React from 'react';
import { NavLink } from 'react-router-dom';
import { Account } from '../Account/Account';

// COMPONENT

export const Header = () => (
    <nav className="navbar navbar-expand-lg artx-header py-3 position-fixed w-100">
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#menu">
            <i className="fas fa-bars artx-type-twf text-white"></i>
        </button>

        <div className="collapse navbar-collapse" id="menu">
            <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                    <div className="nav-link px-3">
                        <NavLink to='/' className='artx-type-twf' activeClassName='font-weight-bold' exact={true}>Play</NavLink>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link px-3">
                        <NavLink to='/guide' className='artx-type-twf' activeClassName='font-weight-bold'>Player Guide</NavLink>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link px-3">
                        <NavLink to='/about' className='artx-type-twf' activeClassName='font-weight-bold'>About ARTX</NavLink>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link px-3">
                        <NavLink to='https://t.me/joinchat/HimWUVCuDboToxV2Q-kOYQ' className='artx-type-twf' activeClassName='font-weight-bold'>Community</NavLink>
                    </div>
                </li>
                <li className="nav-item">
                    <div className="nav-link px-3">
                        <NavLink to='/zipcodes' className='artx-type-twf' activeClassName='font-weight-bold'>ZIP CODES</NavLink>
                    </div>
                </li>
            </ul>
        </div>
        <Account/>
    </nav>
);