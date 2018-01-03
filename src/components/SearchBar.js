import _ from "lodash";
import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { Search, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { fetchCreateEvent } from "../actions";

// the error here is from a static router?

class SearchBar extends Component {
  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () =>
    this.setState({ isLoading: false, results: [], value: "" });

  handleResultSelect = (e, { result }) => {
    console.log(this.props.history);
    console.log(result);
    this.setState({ value: "" });
    this.props.fetchCreateEvent(result, this.props.history);
  };

  handleSearchChange = (e, { value }) => {
    this.setState({ isLoading: true, value });

    setTimeout(() => {
      if (this.state.value.length < 1) return this.resetComponent();

      const re = new RegExp(_.escapeRegExp(this.state.value), "i");
      const isMatch = result => re.test(result.event_name_en);

      this.setState({
        isLoading: false,
        results: _.filter(this.props.events, isMatch)
      });
    }, 500);
  };

  render() {
    const { isLoading, value, results } = this.state;
    console.log("PROPS in searchbar: ", this.props);

    return (
      <Grid>
        <Grid.Column width={8}>
          <Search
            placeholder="Search All Sample Sales"
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={this.handleSearchChange}
            results={results}
            value={value}
            size="large"
            {...this.props}
          />
        </Grid.Column>
      </Grid>
    );
  }
}

const mapStateToProps = state => {
  return {
    events: state.events
  };
};

const mapDispatchToProps = dispatch => {
  return bindActionCreators(
    {
      fetchCreateEvent: fetchCreateEvent
    },
    dispatch
  );
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(SearchBar)
);
