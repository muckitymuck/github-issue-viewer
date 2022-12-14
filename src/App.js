import React, { Component } from "react";
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
//import ReactGA from 'react-ga';
import Layout from './components/Layout';
import Routes from './routes'

let trackPage = () => { };

class App extends Component {
  static propTypes = {
    location: PropTypes.shape({
      pathname: PropTypes.string.isRequired,
      search: PropTypes.string.isRequired,
    }).isRequired,
  }
  componentDidMount() {
    const { location } = this.props;
    const page = `${location.pathname}${location.search}`;
    trackPage(page);
  }
  componentDidUpdate(prevProps) {
    const { location: prevLocation } = prevProps;
    const { location: nextLocation } = this.props;
    const currentPage = `${prevLocation.pathname}${prevLocation.search}`;
    const nextPage = `${nextLocation.pathname}${nextLocation.search}`;

    if (currentPage !== nextPage) {
      trackPage(nextPage);   
    }
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