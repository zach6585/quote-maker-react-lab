import React, { Component } from 'react';
import uuid from 'uuid';
import { connect } from 'react-redux';
import { addQuote } from '../actions/quotes';

class QuoteForm extends Component {

  state = {
    content: '', 
    author: ''
  }

  handleOnChange = event => {
      if (event.target.name == 'content') {
        this.setState({content: event.target.value})
      }
      else {
        this.setState({author: event.target.value})
      }
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.props.dispatch({ type: 'ADD_QUOTE', payload: this.state });
    this.setState({content: '', author: ''})
  }

  
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-md-offset-2">
            <div className="panel panel-default">
              <div className="panel-body">
                <form className="form-horizontal" onSubmit={event => this.handleOnSubmit(event)}>
                  <div className="form-group">
                    <label htmlFor="content" className="col-md-4 control-label">Quote</label>
                    <div className="col-md-5">
                    </div>
                  </div>
                  <div className="form-group">
                    <label htmlFor="author" className="col-md-4 control-label">Author</label>
                    <div className="col-md-5">
                      <input name="author" value={this.state.author} onChange={event => this.handleOnChange(event)}></input>
                     
                    </div>
                  </div>
                  <textarea name="content" value={this.state.content} onChange={event => this.handleOnChange(event)}></textarea>
                  <div className="form-group">
                    <div className="col-md-6 col-md-offset-4">
                      <button type="submit" className="btn btn-default">Add</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}





export default connect()(QuoteForm);
