import React from 'react'
import { connect } from 'react-redux'
import axios from 'axios'
import marked,{ Renderer } from 'marked'
import hljs from 'highlight.js/lib/highlight';
import javascript from 'highlight.js/lib/languages/javascript';

import 'highlight.js/styles/github.css'

import { history } from '../../router/historyRouter'

import './style.css'

hljs.registerLanguage('javascript', javascript);

export default class LectureContent extends React.Component {

  rawMarkup() {
    const input = '```let v = [1, 10, -1, 11, 5, 0, -7, 0, 25, -35]; ```'
  	marked.setOptions({
  		renderer: new marked.Renderer(),
  		gfm: true,
  		tables: true,
  		breaks: false,
  		pedantic: false,
  		sanitize: true,
  		smartLists: true,
  		smartypants: false,
  		highlight: function (code) {
  			return hljs.highlightAuto(code).value
  		}
      // highlight: function(code) {
      //   return require('highlight.js').highlightAuto(code).value;
      // },
  	})

  	var rawMarkup = marked(input, {sanitize: true})
  	return {
  		__html: rawMarkup
  	}
  }
  render() {

    return(
      <div className="LectureContentWrapper">
        <span dangerouslySetInnerHTML={this.rawMarkup()} />
      </div>
    )
  }
}
