import React from 'react';
import './App.less';
import MyProfile from "./components/MyProfile";
import Banner from "./common/Banner";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div className='App'>
        <Banner />
        <MyProfile
          notify={this.notify}
        />
      </div>
    );
  }
}

export default App;