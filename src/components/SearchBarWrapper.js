import PropTypes from "prop-types";
import React from "react";
import { Label } from "semantic-ui-react";

import SearchBar from "./SearchBar";

const resultRenderer = ({ event_name_en }) => <Label content={event_name_en} />;

resultRenderer.propTypes = {
  event_name_en: PropTypes.string,
  event_id: PropTypes.string
};

const SearchBarWrapper = () => <SearchBar resultRenderer={resultRenderer} />;

export default SearchBarWrapper;
