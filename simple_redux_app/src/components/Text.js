import React, { PropTypes } from 'react'

const Text = ({ text }) => (
  <li>
    {text}
  </li>
)

Text.propTypes = {
  text: PropTypes.string.isRequired
}

export default Text