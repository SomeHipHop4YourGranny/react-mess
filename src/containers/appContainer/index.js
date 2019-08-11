import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import { App } from 'components'

function AppContainer (props) {
  const { isAuth } = props
  return <App isAuth={isAuth} />
}

const mapStateToProps = state => {
  return {
    isAuth: state.userReducer.isAuth
  }
}
const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer)
