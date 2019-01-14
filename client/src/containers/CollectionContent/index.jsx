import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'

import { history } from '../../router/historyRouter'

import './style.css'

export default class CollectionContent extends React.Component {
  render() {
    return(
      <div className="CollectionContentWrapper">
        <ul className="nav nav-pills" role="tablist">
          <li className="nav-item">
            <a className="nav-link active" href="#contents" role="tab" data-toggle="tab">Contents</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#preview_lessons" role="tab" data-toggle="tab">Preview Lessons</a>
          </li>
        </ul>

        <div className="tab-content">
          <div role="tabpanel" className="tab-pane active" id="contents">
            <ul className="list-group list-group-flush">
              <li className="list-group-item active">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
              <li className="list-group-item">Morbi leo risus</li>
              <li className="list-group-item active">Porta ac consectetur ac</li>
              <li className="list-group-item">Vestibulum at eros</li>
            </ul>
          </div>
          <div role="tabpanel" className="tab-pane fade" id="preview_lessons">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">Cras justo odio</li>
              <li className="list-group-item">Dapibus ac facilisis in</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}
