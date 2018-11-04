import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { placeBid } from '../state/actions/PlaceBidActions';
import { BidFormComponent } from './BidFormComponent';
import { fetchBidDetails } from '../state/actions/BidDetailsActions';

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
        this.props.fetchBidDetails();
        this.setState({isOpen: true});
    }

    componentDidMount() {
        this.props.fetchBidDetails();
    }

    componentWillUnmount() {
        this.props.fetchBidDetails();
    }

    render() {
        return (
            <div>
                <button className='d-block ml-auto artx-btn text-white artx-type-twf py-3 apx-14' onClick={this.openBid}>Bid <i className="fas fa-gavel"></i></button>
                { this.state.isOpen
                    ? <div className='artx-bid-container position-absolute artx-gradient-outter'>
                        <div className='artx-gradient-inner pt-4 apb-14 w-100'>
                            <BidFormComponent onSubmit={this.onSubmit} buyprice={this.props.details.price + ''} rfcode={this.props.details.rfcode}/>
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

    fetchBidDetails: PropTypes.func.isRequired,
    failed: PropTypes.bool.isRequired,
    fetching: PropTypes.bool.isRequired,
    fetched: PropTypes.bool.isRequired,
    details: PropTypes.object.isRequired,

    code: PropTypes.string
};

const mapStateToProps = state => {
    const bidState = state.placeBidTo;
    const bidPlaced = bidState.fetched;
    const code = bidState.code;

    const { failed, fetching, fetched, details } = state.bidDetails;
  
    return { bidPlaced, bid, failed, fetching, fetched, details };
};
  
const mapDispatchToProps = dispatch => (
    bindActionCreators({ placeBid, fetchBidDetails }, dispatch)
);
  
const hoc = connect(mapStateToProps, mapDispatchToProps)(BidPopup);
  
// EXPORT COMPONENT
  
export { hoc as BidPopup };