import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { connect } from 'react-redux'

import { AppHeader } from './cmps/app-header.jsx'
import { HomePage } from './pages/home-page.jsx'
import {UserFeedback} from './pages/user-feedback.jsx'
import { toggleModal } from './store/modal.action.js'

// import { AppFooter } from './cmps/app-footer.jsx'

export class _RootCmp extends React.Component {

  render() {
    return (
      <>
        <AppHeader />
        <Switch>
          <Route component={UserFeedback} path="/my-feedback"/>
          <Route component={HomePage} exact path="/" />
        </Switch>
        <div onClick={() => { this.props.toggleModal() }} className={this.props.isModalOpen ? "screen open" : "screen"}></div>
      </>
    )
  }
}

function mapStateToProps(state) {
  return {
    isModalOpen: state.modalModule.isModalOpen
  }
}

const mapDispatchToProps = {
  toggleModal
}

export const RootCmp = connect(
  mapStateToProps,
  mapDispatchToProps
)(_RootCmp)