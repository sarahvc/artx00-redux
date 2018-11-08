import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { placeBid } from '../state/actions/PlaceBidActions';
import { BidFormComponent } from './BidFormComponent';
import { fetchAuctionPrice } from '../state/actions/AuctionPriceActions';
import { fetchReferLink } from '../state/actions/ReferLinkActions';

class BidPopup extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            isOpen: false
        };

        this.onSubmit = this.onSubmit.bind(this);
        this.openBid = this.openBid.bind(this);
    }

    onSubmit(values) {
        this.props.placeBid(values);
    }

    openBid(){
        this.props.fetchAuctionPrice();
        this.setState({isOpen: true});
    }

    componentDidMount() {
        this.props.fetchAuctionPrice();
        this.props.fetchReferLink();
    }

    render() {
        let rfcodeValid = this.props.rfcode.length!=0?true:false;
        return (
            <div>
                <button className='d-block ml-auto artx-btn text-white artx-type-twf py-3 apx-14' onClick={this.openBid}>Bid <i className="fas fa-gavel"></i></button>
                { this.state.isOpen
                    ? <div className='artx-bid-container position-absolute artx-gradient-outter'>
                        <div className='artx-gradient-inner pt-4 apb-14 w-100'>
                            {
                                rfcodeValid
                                    ?<BidFormComponent onSubmit={this.onSubmit} buyprice={this.props.price} rfcode={this.props.rfcode}/>
                                    :<BidFormComponent onSubmit={this.onSubmit} buyprice={this.props.price}/>
                            }
                            {
                                this.props.bidPlaced && <p className='text-white'>Bid placed and your referral code is {this.props.code}</p>
                            }
                        </div>
                    </div>
                    : null}
            </div>
        );
    }
}

BidPopup.propTypes = {
    placeBid: PropTypes.func.isRequired,
    bidPlaced: PropTypes.bool.isRequired,

    fetchAuctionPrice: PropTypes.func.isRequired,
    failed: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    fetched: PropTypes.bool.isRequired,
    price: PropTypes.string.isRequired,

    fetchReferLink: PropTypes.func.isRequired,
    rffailed: PropTypes.bool,
    rffetching: PropTypes.bool,
    rffetched: PropTypes.bool,
    rfcode: PropTypes.string,

    code: PropTypes.string
};

const mapStateToProps = state => {
    const bidState = state.placeBidTo;
    const bidPlaced = bidState.fetched;
    const code = bidState.code;

    const { failed, fetching, fetched, price } = state.auctionPrice;

    const referLinkState = state.referLink;
    const rffetched = referLinkState.fetched;
    const rfcode = referLinkState.rfcode;
  
    return { bidPlaced, code, failed, fetching, fetched, price, rffetched, rfcode };
};
  
const mapDispatchToProps = dispatch => (
    bindActionCreators({ placeBid, fetchAuctionPrice, fetchReferLink }, dispatch)
);
  
const hoc = connect(mapStateToProps, mapDispatchToProps)(BidPopup);
  
// EXPORT COMPONENT
  
export { hoc as BidPopup };