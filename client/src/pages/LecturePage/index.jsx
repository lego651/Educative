import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import LectureList from '../../containers/LectureList'
import LectureContent from '../../containers/LectureContent'

import './style.css'

class LecturePage extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      drawerClass: 'DrawerWrapper'
    }
  }
  onClick = () => {
    this.setState({
      drawerClass: this.state.drawerClass ? null : 'DrawerWrapper'
    })
  }
  render() {
    return(
      <div className="LecturePageWrapper">
        <div className="LectureListWrapper">
          <LectureList />
        </div>
        <div className="LectureContentWrapper">
          <LectureContent />
          <i className="fas fa-bars"> </i>
        </div>
      </div>
    )
  }
}

export default LecturePage
