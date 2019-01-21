import React from 'react'
import marked,{ Renderer } from 'marked'
import hljs from 'highlight.js';

import './style.css'
import { text } from './initialMarkdown.js'

class MarkdownTut extends React.Component {
  constructor(props){
    super(props)
    // const text ="# Header1"
    this.state = {
      markdown: text
    }
  }
  rawMarkup(markdown) {
  	marked.setOptions({
  		renderer: new marked.Renderer(),
  		gfm: true,
  		tables: true,
  		breaks: true,
  		pedantic: false,
  		sanitize: true,
  		smartLists: true,
  		smartypants: false,
  		highlight: function (code) {
  			return hljs.highlightAuto(code).value
  		}
  	})

  	var rawMarkup = marked(markdown, {sanitize: true})
  	return {
  		__html: rawMarkup
  	}
  }
  handleChange(e) {
    this.setState({
      markdown: e.target.value
    })
  }
  render() {
    const markdown = this.state.markdown
    return(
      <div className="MarkdownPreviewWrapper row">
        <div className="col-xs-12 col-sm-6 MarkdownTextInput">
          <textarea id="editor"
                    className="editor"
                    value={markdown}
                    onChange={this.handleChange.bind(this)} />
        </div>
        <div className="col-xs-12 col-sm-6 MarkdownPreview">
          <span dangerouslySetInnerHTML={this.rawMarkup(markdown)} />
        </div>
      </div>
    )
  }
}
export default MarkdownTut
