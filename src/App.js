import React, { Component } from 'react';

class App extends Component {
  state = {
    fields: {
      name: '',
      email: ''
    },
    people: []
  }
  onFormSubmit = evt => {
    const people = [...this.state.people, this.state.fields]
    this.setState({
      people,
      fields: {
        name: '',
        email: ''
      }
    })
    evt.preventDefault()
  }

  onInputChange = evt => {
    const fields = this.state.fields
    fields[evt.target.name] = evt.target.value
    this.setState({ fields })
  }
  render() {
    return (
      <div>
        <form
          className='flex flex-col items-center p-20 justify-between'
          onSubmit={this.onFormSubmit}
        >
          <input 
            className='bg-slate-200 px-5 py-3 border-transparent focus:outline-none text-black w-56'
            type="text"
            name='name'
            placeholder='Username'
            value={this.state.fields.name}
            onChange={this.onInputChange}  
          />
          <br />
          <input 
            className='bg-slate-200 px-5 py-3 border-transparent focus:outline-none text-black w-56'
            type="text"
            name='email'
            placeholder='Email'
            value={this.state.fields.email}
            onChange={this.onInputChange} 
          />
          <br />
          <input 
            className=' bg-slate-900 w-56 text-lg text-slate-300 hover:bg-slate-700 
            hover:text-slate-200 px-5 py-3 active:bg-slate-600 transition-all'
            type="submit" 
          />
        </form>
      </div>
    );
  }
}

export default App;