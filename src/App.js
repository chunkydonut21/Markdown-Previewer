import React from 'react';
import marked from 'marked';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      mark: '# Sample Markdown Heading\n\nEdit or replace this\n-----------\n\n### Another deeper heading\n\nParagraphs are separated by a blank line.\n\nLeave 2 spaces at the end of a line to do a  line break\n\nText attributes *italic*, **bold**,\n`monospace`, ~~strikethrough~~ .\n\n```python s = "Python syntax highlighting" print s```\n\n> Blockquotes are very handy in email to emulate reply text.\n\n<pre>Pre tag</pre>\n\n![React Logo w/ Text](https://goo.gl/Umyytc)\n\nUnordered list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\n---\n\n #### Created by:\n<a href="https://google.com/" target="_blank">Shivam Maheshwari</a>'
    };
  }
  render() {
    return (
      <div id="wrapper">
        <h1>Markdown Previewer</h1>
        <div id="inner">
          <textarea 
            name="editor" id="editor" cols="30" rows="10" 
            value={this.state.mark}
            onChange={(event) => this.setState({ mark: event.target.value })}
          >
          </textarea>
          <div id="preview" dangerouslySetInnerHTML={{__html: marked(this.state.mark) }}>
          </div>
        </div>
      </div>
    );
  }
}