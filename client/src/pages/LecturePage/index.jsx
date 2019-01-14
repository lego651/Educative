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
      hideDrawer: false
    }
  }
  onClick = () => {
    this.setState({
      hideDrawer: this.state.hideDrawer ? false : true
    })
  }
  render() {
    return(
      <div className="LecturePageWrapper">
        <div className={this.state.hideDrawer ? "HideIcon" : "ToggleIcon"}
             onClick={this.onClick.bind(this)}>
          <i className="fas fa-bars"></i>
        </div>
        <div className={this.state.hideDrawer ? "LectureListWrapperHidden" : "LectureListWrapper"}>
          <LectureList />
        </div>
        <div className="LectureContentWrapper">
          <LectureContent />
        </div>
      </div>
    )
  }
}

export default LecturePage
