import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import AllCourse from '../../containers/AllCourse'
import './style.css'

class AllCoursePage extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
      <div className="AllCoursePageWrapper">
        <div className="col-sm-8 offset-sm-2 col-xs-12">
          <AllCourse />

        </div>
      </div>
    )
  }
}

export default AllCoursePage
