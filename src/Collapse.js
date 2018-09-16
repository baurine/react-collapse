import React from 'react'
import classNames from 'classnames'
import "./Collapse.css"

// ref: https://www.w3schools.com/howto/howto_js_collapsible.asp
export default class Collapse extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      maxHeight: '0px'
    }
  }

  clickHead = () => {
    this.setState({active: !this.state.active})
    if (!this.state.active) {
      this.setState({maxHeight: this._collapse_body.scrollHeight + 'px'})
    } else {
      this.setState({maxHeight: '0px'})
    }
  }

  render() {
    return (
      <div className='collapsible'>
        <div className={classNames('collapse-head', {active: this.state.active})}
             onClick={this.clickHead}>
          Open Collapsible
        </div>
        <div className='collapse-body'
             style={{maxHeight: this.state.maxHeight}}
             ref={ref => this._collapse_body=ref}>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit,
            sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam,
            quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>
      </div>
    )
  }
}
