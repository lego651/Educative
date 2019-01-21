import React from 'react'

import Markdown from '../../containers/MarkdownPreview'
import './style.css'

class MarkdownPage extends React.Component {
  constructor(props){
    super(props)
  }
  render() {
    return(
      <div className="MarkdownPageWrapper">
        <Markdown />
      </div>
    )
  }
}

export default MarkdownPage
