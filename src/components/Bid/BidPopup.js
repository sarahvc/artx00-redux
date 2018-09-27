import React, { Component }  from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { placeBid } from '../state/actions/PlaceBidActions';
import { BidFormComponent } from './BidFormComponent';

class BidPopup extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            isOpen: false
        };

        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(values) {
        this.props.placeBid(values);
    }

    render() {
        return (
            <div>
                <button className='d-block ml-auto artx-btn text-white artx-type-twf py-3 apx-14' onClick={() => this.setState({isOpen: true})}>Bid <i className="fas fa-gavel"></i></button>
                { this.state.isOpen
                    ? <div className='artx-bid-container position-absolute artx-gradient-outter'>
                        <div className='artx-gradient-inner pt-4 apb-14 w-100'>
                            <BidFormComponent onSubmit={this.onSubmit}/>
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
    bid: PropTypes.string.isRequired
};

const mapStateToProps = state => {
    const bidState = state.placeBidTo;
    const bidPlaced = bidState.fetched;
    const bid = bidState.bid;
  
    return { bidPlaced, bid };
};
  
const mapDispatchToProps = dispatch => (
    bindActionCreators({ placeBid }, dispatch)
);
  
const hoc = connect(mapStateToProps, mapDispatchToProps)(BidPopup);
  
// EXPORT COMPONENT
  
export { hoc as BidPopup };