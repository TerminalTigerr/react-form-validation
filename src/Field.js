import React, { Component } from 'react';
import PropTypes from 'prop-types'

class Field extends Component {
  static PropTypes = {
    placeholder: PropTypes.string,
    name: PropTypes.string.isRequired,
    value: PropTypes.string,
    validate: PropTypes.func,
    onchange: PropTypes.func.isRequired
  }
  render() {
    return (
      <div>
        
      </div>
    );
  }
}

export default Field;