import React, {Component} from 'react'
import PropTypes from 'prop-types'

import {Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {actions} from 'reducers'



class Container extends Component 
{
  componentWillUpdate(nextProps, nextState) {
    console.log(`${this.props.name} - Im updating!`)
  }

  render() 
  {
    const {visible, toggleVisibility} = this.props
    return (
      <div>
        <h2>Play peek a boo!</h2>
        <Route exact path="/redux/" component={() => (
          <div>
           <Link to="/redux/visible">Peek</Link>
           <img src="http://www.clipartkid.com/images/634/baby-goofy-peek-a-boo-WdVY5e-clipart.png" />
          </div>
        )} />
        <Route path="/redux/visible" component={() => (
          <div>
           <Link to="/redux/">Hide!</Link>
          <img src="https://dncache-mauganscorp.netdna-ssl.com/thumbseg/518/518148-bigthumbnail.jpg" />
          </div>
        )} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  visible: state.visible,
})

const mapDispatchToProps = (dispatch) => ({
  toggleVisibility: () => dispatch(actions.toggleVisibility()),
})

const ConnectedContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Container)


class FixedContainer extends Component
{
  static contextTypes = {
    router: PropTypes.object
  }
  render() 
  {
    return <ConnectedContainer router={this.context.router} name="Fixed" />
  }
}


export default class ReduxPage extends Component 
{ 
  render() 
  {
    return (
      <div>
        <h2>Redux</h2>
        <div id="redux-container">
          <div className="redux-example">
            <h3>Working</h3>
            <FixedContainer />
          </div>
          <div className="redux-example">
            <h3>Broken</h3>
            <ConnectedContainer name="Broken"/>
          </div>
        </div>
      </div>
    )
  }
}


