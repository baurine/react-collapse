import React from 'react'
import PropTypes from 'prop-types'
import "./Collapse.css"
import Collapse1 from './Collapse1'

export default class Collapse2 extends Collapse1 {
  renderHeadContent() {
    return (
      <span>Contain <a href="https://www.google.com" target="_blank" onClick={(e)=>e.stopPropagation()}>Link</a> in the head</span>
    )
  }

  renderBodyContent() {
    return (
      <p>
        <a href="https://www.google.com" target="_blank">Google Link</a>
        <br/>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    )
  }
}

Collapse2.propTypes = {
  autoCollapse: PropTypes.bool
}

Collapse2.defaultProps = {
  autoCollapse: false
}
