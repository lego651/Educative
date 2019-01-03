import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { history } from '../../router/historyRouter'

import './style.css'

export default class CollectionSummary extends React.Component {
  render() {
    return(
      <div className="CollectionSummaryWrapper row">
          <div className="CollectionSummaryLeft col-sm-8">
            <div className="CollectionSummaryLeftTitle row">
              <div className="CollectionSummaryLeftImage col-sm-6">
                <img src="https://i.ibb.co/BsLM5Vj/JS-Course-Img.png"/>
              </div>
              <div className="CollectionSummaryLeftName col-sm-6">
                Data Structures for Coding Interviews in Java: From Soup to Nuts 2.0
              </div>
            </div>
            <div className="CollectionSummaryLeftNumber">
              <div className="NumberSnipppet">
                <div className="NumberCircle">50</div>
                Lessons
              </div>
              <div className="NumberSnipppet">
                <div className="NumberCircle">20</div>
                Quizzes
              </div>
              <div className="NumberSnipppet">
                <div className="NumberCircle">120</div>
                Snippets
              </div>
            </div>
            <div className="CollectionSummaryLeftDesc">
              Data structures are amongst the fundamentals of Computer Science and an important decision in every program. Consequently, they are also largely categorized as a vital benchmark of computer science knowledge when it comes to industry interviews. This course contains a detailed review of all the common data structures and provides implementation level details in Java to allow readers to become well equipped.
            </div>
          </div>
          <div className="CollectionSummaryRight col-sm-4">
            <div className="CollectionSummaryRightStudents">
              ❤️ <span> 3,200 </span>  students entrolled
            </div>
            <div className="CollectionSummaryRightBox">
              <div className="CollectionSummaryRightDiscount">
                <span> 61 </span> % OFF
              </div>
              <div className="CollectionSummaryRightPrice">
                <span className="OldPrice"> 99 </span> Now
                <strong> $39 </strong>
              </div>
              <div className="CollectionSummaryRightBuyBtn">
                BUY NOW
              </div>
              <div className="CollectionSummaryRightPreviewBtn">
                PREVIEW
              </div>
            </div>
            <div className="CollectionSummaryRightList">
              <div className="RightListItem">
                ✅ FREE Preview Lessons
              </div>
              <div className="RightListItem">
                ✅ Lifetime Access 
              </div>
              <div className="RightListItem">
                ✅ 30 Day Returns
              </div>
              <div className="RightListItem">
                ✅ Self-Paced Course
              </div>
            </div>
          </div>
      </div>
    )
  }
}
