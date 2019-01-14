import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { history } from '../../router/historyRouter'

import './style.css'

export default class LectureList extends React.Component {
  render() {
    return(
      <div className="LectureListWrapper">
        <ul className="list-group list-group-flush">
          <li className="list-group-item active">Cras justo odio</li>
          <li className="list-group-item">Dapibus ac facilisis in</li>
          <li className="list-group-item">Morbi leo risus</li>
          <li className="list-group-item active">Porta ac consectetur ac</li>
          <li className="list-group-item">Vestibulum at eros</li>
        </ul>
      </div>
    )
  }
}
