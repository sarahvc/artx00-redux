// IMPORT PACKAGE REFERENCES

import React from 'react';
import Above from '../coreComponents/Above';
import Middle from '../coreComponents/Middle';
import Bottom from '../coreComponents/Bottom';
import Footer from '../shared/atoms/Footer';


// COMPONENT

const HomePage = () => (
    <div className='artx-gradient-bg'>
        <main className='container pt-5 mt-5'>
            <Above/>
            <Middle/>
            <Bottom/>
        </main>
        <Footer/>
    </div> 
);

export { HomePage };