// IMPORT PACKAGE REFERENCES

import React from 'react';
import FirstIntro from '../core/FirstIntro';
//import { BidPopup } from './BidPopup';
import AuctionDetails from '../core/AuctionDetails';
import Middle from '../core/Middle';
import SecondIntro from '../core/SecondIntro';
import Subscribe from '../shared/atoms/Subscribe';
import Footer from '../shared/atoms/Footer';

// COMPONENT

const HomePage = () => (
    <div className='artx-gradient-bg'>
        <main className='container pt-5 mt-5'>
            <FirstIntro/>
            <button className='d-block ml-auto artx-btn text-white artx-type-twf py-3 apx-14'>Bid <i className="fas fa-gavel"></i></button>
            <AuctionDetails/>
            <Middle/>
            <SecondIntro/>
            <Subscribe/>
        </main>
        <Footer/>
    </div> 
);

export { HomePage };