import React from 'react'

export default class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ''
    }
  }

  handleSubmit = event => {
    event.preventDefault();
    this.props.handleAdd(this.state.input);
    this.setState({
      input: ''
    });
  }

  handleInputChange = e => {
    this.setState({
      ...this.state,
      input: e.target.value
    })
  }

  render() {
    return (
    <div>
      <form>
        <input type='text' placeholder='Add to do' value={this.state.input} onChange={this.handleInputChange}/>
        <button onClick={this.handleSubmit}>Add</button>
      </form>
    </div>
    )
  }
}
