import _ from "lodash";
import React, { Component } from "react";
import { Search, Grid } from "semantic-ui-react";
import { connect } from "react-redux";
import * as actions from "../actions";

class SearchBar extends Component {
  componentWillMount() {
    this.resetComponent();
  }

  resetComponent = () =>
    this.setState({ isLoading: false, results: [], value: "" });

  handleResultSelect = (e, { result }) =>
    this.setState({ value: result.event_name_en });

  handleSearchChange = (e, { value }) => {
    console.log("EVENTS in search change handler: ", this.props.events);
    console.log("STATE in search change handler: ", this.state);
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

    return (
      <Grid>
        <Grid.Column width={8}>
          <Search
            loading={isLoading}
            onResultSelect={this.handleResultSelect}
            onSearchChange={this.handleSearchChange}
            results={results}
            value={value}
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
export default connect(mapStateToProps, null)(SearchBar);
