import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import React from "react";
import { Label } from "semantic-ui-react";
import SearchBar from "./SearchBar";

const resultRenderer = ({ event_name_en, event_id }) => (
  <Label key={event_id} content={event_name_en} />
);

resultRenderer.propTypes = {
  event_name_en: PropTypes.string,
  event_id: PropTypes.string
};

const SearchBarWrapper = props => {
  console.log("%c>> Inside render SearchBarWrapper \n", "color: #bada55");
  console.log("PROPS: ", props);
  console.log("----------------------- \n");
  return <SearchBar resultRenderer={resultRenderer} />;
};

export default withRouter(SearchBarWrapper);
