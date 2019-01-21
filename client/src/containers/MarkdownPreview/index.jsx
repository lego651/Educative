import React from 'react'
import { connect } from 'react-redux'
import marked,{ Renderer } from 'marked'
// import hljs from 'highlight.js/lib/highlight';
import hljs from 'highlight.js';
import { MarkdownPreview } from 'react-marked-markdown';
import { text } from './initialMark.js'

import './style.css'

class Markdown extends React.Component {

  constructor(props){
    super(props)
    // const initialMarkdown =
    // `
    //   ### Headers1
    //   # Another Header
    // `
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
    // console.log("Changed")
    // console.log(e.target.value)
    this.setState({
      markdown: e.target.value
    })
  }
  render() {
    const markdown = this.state.markdown
    console.log(markdown)
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

// const mapDispatchToProps = (dispatch) => ({
//   addTask: (text) => dispatch(addTask(text))
// })
// export default connect(
//   null,
//   mapDispatchToProps
// )(AddTodo)
export default Markdown
