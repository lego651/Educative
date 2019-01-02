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
          <div className="CollectionSummaryLeftData">
            Number
          </div>
          <div className="CollectionSummaryLeftDesc">
            Description
          </div>
        </div>
        <div className="CollectionSummaryRight col-sm-4">
          Right
        </div>
      </div>
    )
  }
}
