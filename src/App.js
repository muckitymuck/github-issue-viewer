import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
//import ReactGA from 'react-ga';
import Layout from './components/Layout';
import Routes from './routes'


//Unecessary...  We do not need to track this web traffic.
// const trackingCode = process.env.REACT_APP_GOOGLE_TRACKING_ID;
// let trackPage = () => { };

// if (trackingCode) {

//   ReactGA.initialize(trackingCode);
//   trackPage = page => {
//     if (trackingCode){
//       ReactGA.set({ page });
//       ReactGA.pageview(page);
//     }
//   };
// }

class App extends Component {
  static PropTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string.isRequired,
    }).isRequired,
  }
  componentDidMount() {
    const { location } = this.props;
    const page = `${location.pathname}${location.search}`;
 //   trackPage(page);
  }
  componentDidUpdate(prevProps) {
    const { location: prevLocation } = prevProps;
    const { location: nextLocation } = this.props;
    const currentPage = `${prevLocation.pathname}${prevLocation.search}`;
    const nextPage = `${nextLocation.pathname}${nextLocation.search}`;

    // if (currentPage !== nextPage) {
    //   trackPage(nextPage);
    // }
  }

  render() {
    return (
      <Layout>
        <Routes />
      </Layout>
    )
  }
}
export default withRouter(App);




//Default react App
//
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

//export default App;
