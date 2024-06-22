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

  state = {
    value: this.props.value,
    errors: false
  }

  getDerivedStateFromProps(nextProps) {
    return {value: nextProps.value}
  }

  onChange = evt => {
    const name = this.props.name
    const value = evt.target.value
    const error = this.props.validate ? this.props.validate(value) : false

    this.setState({ value, error })

    this.props.onChange({name, value, error})
  }
  render() {
    return (
      <div>
        <input
          placeholder={this.props.placeholder}
          value={this.state.value}
          onChange={this.onChange} 
        />
      </div>
    );
  }
}

export default Field;