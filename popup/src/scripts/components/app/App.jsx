import React, {Component} from 'react';
import {connect} from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentwillreceiveprops(){
    console.log("current Tab",this.props);
  }

  render() {
    return (
      <div>
        popup is under construction
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    count: state.count || 0,
    tabs: state.tabs || {},
    currentTab: state.currentTab || {},
    search: state.search || "",
    type:state.type || null
  };
};

export default connect(mapStateToProps)(App);
