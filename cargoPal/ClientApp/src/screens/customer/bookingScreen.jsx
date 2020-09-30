import React, { Component } from 'react';

import Screen from '../../components/screen';
import BookingForm from '../../components/bookingform';

class BookingScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    // get the current user detials
  }

  // handleSellerBidUpdate = (childData) => {
  //   const backupUpdate = this.state.sellerBids;
  //   backupUpdate.forEach((sellerBid) => {
  //     if (sellerBid.sellerBidId === childData.sellerBidId) {
  //       sellerBid.status = childData.status;
  //       sellerBid.bestPrice = childData.bestPrice;
  //     }
  //   });
  //   this.props.UpdateSellerBid(childData);
  //   if (this.props.sellerBids.hasError) {
  //     this.setState({ sellerBids: backupUpdate });
  //   }
  // };

  render() {
    return (
      <Screen title="Booking" subtitle="Make your bookings here.">
        <BookingForm schedule={this.state.schedule} />
      </Screen>
    );
  }
}

export default BookingScreen;
