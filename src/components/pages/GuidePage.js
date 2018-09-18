import React from 'react';
import Quote from '../shared/atoms/Quote';
import { Subscribe } from '../Subscribe/Subscribe';
import Footer from '../shared/atoms/Footer';

const GuidePage = () => (
    <div className='artx-gradient-bg'>
        <main className='pt-5 mt-5'>
            <div className='container'>
                <h1 className='artx-type-fs artx-gradient-text text-center amt-18'>DArt Player Guide</h1>
                <h2 className='artx-type-ths artx-gradient-text amt-18'>Summary</h2>
                <p className='artx-type-twf text-white font-weight-bold mt-3'>This is the first decentralized art creation and auction project on the Ethereum blockchain, in which a DArt, <i>Genesis</i>, is created and auctioned simultaneously.</p>
                <ul className='artx-type-twf text-white mt-3'>
                    <li className='artx-type-twf text-white'>A digital visual art will be created by ARTX AI using transaction data from the auction. The process will be entirely autonomous and conducted without human intervention.</li>
                    <li className='artx-type-twf text-white'>During the auction, people can purchase shares of the <i>Genesis</i> DArt and receive dividend income from the auction sale. Dividends are accumulated in real time as shares are bought and can be withdrawn at any time.</li>
                    <li className='artx-type-twf text-white'>Every purchase gives the player a chance to enter an appraisal of the auction’s final Hammer Price. When the auction ends, the 3 closest appraisers win the Appraisal Jackpot.</li>
                    <li className='artx-type-twf text-white'>At the end of the game, the <i>Genesis</i> DArt will be listed on ARTX, a decentralized art gallery and exchange.</li>
                </ul>
                <h2 className='artx-type-ths artx-gradient-text mt-5'>Rules</h2>
                <ul className='artx-type-twf text-white mt-3'>
                    <li className='artx-type-twf text-white'>Each time a new share is purchased, all shareholders receive a portion of that sale (i.e. dividends) proportionate to the number of shares held.</li>
                    <li className='artx-type-twf text-white'>You can use your personal referral link to recruit other people to the auction. Both of you will receive 10%  of the referral’s purchase as bonus.</li>
                    <li className='artx-type-twf text-white'>The auction starts with a very high Hammer Price that decreases over time. The auction ends once the accumulated sales of <i>Genesis</i> shares reach or exceed the Hammer Price.</li>
                    <li className='artx-type-twf text-white'>Every share purchase freezes the Hammer Price decay for 60 seconds and increases the share price slightly.</li>
                    <li className='artx-type-twf text-white'>At the end of the auction, 90% of the Appraisal Jackpot is distributed among the first 3 closest appraisers proportionate to the number of shares bought when they enter their appraisals. 10% of the pot is distributed to the DArt community.</li>
                </ul>
                <h2 className='artx-type-ths artx-gradient-text mt-5'>Auction Sale Allocation</h2>
                <p className='artx-type-twf text-white mt-3'>During the auction, each purchase has a different sale distribution between Dividends and Jackpot. The allocation to Dividends starts at 10% for the first <i>Genesis</i> share and will increase slightly overtime to a maximum of 70% as shares are bought. The allocation to Appraisal Jackpot moves in reverse from 70% to 10%. The remaining ETH is reserved for the referral bonus. If there’s no referral, the referral bonus will be distributed to all players as Dividends.</p>
                <h2 className='artx-type-ths artx-gradient-text mt-5'>Details (internal)</h2>
                <ul className='artx-type-twf text-white mt-3'>
                    <li className='artx-type-twf text-white'>All purchase and withdrawals are initiated by the players, so they pay for the gas. Dividends, bonus and jackpot will be credited to each player’s vault prior to withdrawal.</li>
                    <li className='artx-type-twf text-white'>Token price formula: TBD (see fomo3d)</li>
                    <li className='artx-type-twf text-white'>The cap decay is calculated as such:</li>
                </ul> 
            </div>
            <Quote/>
            <Subscribe/>
        </main>
        <Footer/>
    </div>
);

export { GuidePage };