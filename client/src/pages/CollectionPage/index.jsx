import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import CollectionSummary from '../../containers/CollectionSummary'
import CollectionContent from '../../containers/CollectionContent'
import './style.css'

class CollectionPage extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
      <div className="CollectionPageWrapper">
        <div className="col-sm-8 offset-sm-2 col-xs-12">
          <CollectionSummary />
          <CollectionContent />
        </div>
      </div>
    )
  }
}

export default CollectionPage
