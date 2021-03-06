import React from 'react'
import classNames from 'classnames'
import PropTypes from 'prop-types'
import "./Collapse.css"

// ref: https://www.w3schools.com/howto/howto_js_collapsible.asp
export default class Collapse1 extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      maxHeight: '0px'
    }
  }

  componentWillUnmount() {
    if (this.props.autoCollapse) {
      document.removeEventListener('click', this.handleGlobalClick)
    }
  }

  clickHead = () => {
    this.setState({active: !this.state.active})
    if (!this.state.active) {
      this.setState({maxHeight: this._collapse_body.scrollHeight + 'px'})

      if (this.props.autoCollapse) {
        document.addEventListener('click', this.handleGlobalClick)
      }
    } else {
      this.setState({maxHeight: '0px'})

      if (this.props.autoCollapse) {
        document.removeEventListener('click', this.handleGlobalClick)
      }
    }
  }

  handleGlobalClick = (event) => {
    if (!event.target.classList.contains('collapse-head')) return
    // console.log(this._collapse_body.parentNode.parentNode)
    // console.log(event.target.parentNode.parentNode)
    // <div>
    //   <div class="collapsible">...</div>
    //   <div class="collapsible">...</div>
    // </div>
    const sameParentContainer =
      this._collapse_body.parentNode.parentNode === event.target.parentNode.parentNode
    if (sameParentContainer) {
      this.setState({active: false, maxHeight: '0px'})
      document.removeEventListener('click', this.handleGlobalClick)
    }
  }

  renderHeadContent() {
    return 'Open Collapsible'
  }

  renderBodyContent() {
    return (
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit,
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        Ut enim ad minim veniam,
        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
      </p>
    )
  }

  render() {
    return (
      <div className='collapsible'>
        <div className={classNames('collapse-head', {active: this.state.active})}
             onClick={this.clickHead}>
          { this.renderHeadContent() }
        </div>
        <div className='collapse-body'
             style={{maxHeight: this.state.maxHeight}}
             ref={ref => this._collapse_body=ref}>
          { this.renderBodyContent() }
        </div>
      </div>
    )
  }
}

Collapse1.propTypes = {
  autoCollapse: PropTypes.bool
}

Collapse1.defaultProps = {
  autoCollapse: false
}
