import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { history } from '../../router/historyRouter'

import './style.css'

export default class LectureContent extends React.Component {
  render() {
    return(
      <div className="LectureContentWrapper">
        Lecture Content
      </div>
    )
  }
}
