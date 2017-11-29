import React, { Component } from 'react';
import { connect } from 'react-redux'
import { Field, reduxForm, reset } from 'redux-form';
import _ from 'lodash';

class App extends Component {
  render() {
    return (
      <div>
      </div>
    );
  }
}

let form = reduxForm({
  form: 'New Post'
})(App);

form = connect(state => ({
  posts: state.posts
}), {})(form);

export default form;

