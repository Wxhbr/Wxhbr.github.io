import React, { Component } from 'react';
import PropTypes, { object } from 'prop-types';
import { connect } from 'react-redux';
import './Table.css';

import { fetchSWplanets } from '../store/actions';

class Table extends Component {
  componentDidMount() {
    const { getCurrentSwPlanets } = this.props;

    getCurrentSwPlanets();
  }

  indexContent() {
    const { results } = this.props;
    const residentsIndex = Object.keys(results[0]).findIndex((element) => element === 'residents');

    return (
      results.map((elements) => (
        <tbody key={elements.name}>
          <tr>
            {Object.values(elements).map((values, i) => {
              if (i !== residentsIndex) {
                return (
                  <td className="table-values-content" key={values}>{values}</td>
                );
              }
              return null;
            })}
          </tr>
        </tbody>
      ))
    );
  }

  render() {
    const { isFetching, results } = this.props;

    if (isFetching) return <div>LOADING...</div>;
    return (
      <div>
        <table className="table-content">
          <caption>STAR WARS PLANETS</caption>
          <thead>
            <tr>
              {Object.keys(results[0]).map((keys) => {
                if (keys !== 'residents') {
                  return (
                    <th className="table-index-content" key={keys}>{keys}</th>
                  );
                }
                return null;
              })}
            </tr>
          </thead>
          {this.indexContent()}
        </table>
      </div>
    );
  }
}

const mapStateToProps = ({
  swPlanets: {
    isFetching,
    results,
  },
}) => ({
  isFetching,
  results,
});

const mapDispatchToProps = (dispatch) => ({
  getCurrentSwPlanets: () => dispatch(fetchSWplanets()),
});

Table.propTypes = {
  getCurrentSwPlanets: PropTypes.func.isRequired,
  isFetching: PropTypes.bool.isRequired,
  results: PropTypes.instanceOf(Array),
};

Table.defaultProps = {
  results: null,
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);
