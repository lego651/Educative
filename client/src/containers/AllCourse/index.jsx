import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { history } from '../../router/historyRouter'

import './style.css'

export default class AllCourse extends React.Component {
  render() {
    return(
      <div className="AllCourseWrapper row">
        <div className="CollectionSummaryRightBox col-sm-4 col-lg-3">
          <div className="CollectionSummaryLeftImage">
            <img src="https://i.ibb.co/BsLM5Vj/JS-Course-Img.png"/>
          </div>
          <div className="CollectionSummaryRightDiscount">
            <span> 40 </span> % OFF
          </div>
          <div className="CollectionSummaryRightPrice">
            <span className="OldPrice"> 40 </span> Now
            <strong> $40 </strong>
          </div>

          <div className="CollectionSummaryRightPreviewBtn">
            PREVIEW
          </div>
        </div>

        <div className="CollectionSummaryRightBox col-sm-4 col-lg-3">
          <div className="CollectionSummaryLeftImage">
            <img src="https://i.ibb.co/BsLM5Vj/JS-Course-Img.png"/>
          </div>
          <div className="CollectionSummaryRightDiscount">
            <span> 40 </span> % OFF
          </div>
          <div className="CollectionSummaryRightPrice">
            <span className="OldPrice"> 40 </span> Now
            <strong> $40 </strong>
          </div>

          <div className="CollectionSummaryRightPreviewBtn">
            PREVIEW
          </div>
        </div>

        <div className="CollectionSummaryRightBox col-sm-4 col-lg-3">
          <div className="CollectionSummaryLeftImage">
            <img src="https://i.ibb.co/BsLM5Vj/JS-Course-Img.png"/>
          </div>
          <div className="CollectionSummaryRightDiscount">
            <span> 40 </span> % OFF
          </div>
          <div className="CollectionSummaryRightPrice">
            <span className="OldPrice"> 40 </span> Now
            <strong> $40 </strong>
          </div>

          <div className="CollectionSummaryRightPreviewBtn">
            PREVIEW
          </div>
        </div>


    Data structures are amongst the fundamentals of Computer Science and an important decision in every program. Consequently


      </div>
    )
  }
}
