import React, { Component } from 'react';
import isEmail from 'validator/lib/isEmail'

class App extends Component {
  state = {
    fields: {
      name: '',
      email: ''
    },
    fieldErrors: {},
    people: []
  }
  onFormSubmit = evt => {
    const people = [...this.state.people]
    const person = this.state.fields
    const fieldErrors = this.validate(person)
    this.setState({ fieldErrors })
    evt.preventDefault()

    if(Object.keys(fieldErrors).length) return

    this.setState({
      people: people.concat(person),
      fields: {
        name: '',
        email: ''
      }
    })
  }

  onInputChange = evt => {
    const fields = this.state.fields
    fields[evt.target.name] = evt.target.value
    this.setState({ fields })
  }

  validate = person => {
    const errors = {}
    if(!person.name) errors.name = 'Name Required'
    if(!person.email) errors.email = 'Email Required'
    if(person.name && !isEmail(person.email)) errors.email = "Invalid Email"
    return errors
  }
  render() {
    return (
      <div 
        className='flex flex-col items-center justify-between'>
        <form
          className='flex flex-col items-center p-20 justify-between space-y-5 w-full'
          onSubmit={this.onFormSubmit}
        >
          <div className=' box-border w-[350px] space-x-1'>
            <input 
              className='bg-slate-200 px-5 py-3 border-transparent 
              focus:outline-none text-black w-[230px]'
              type="text"
              name='name'
              placeholder='Username'
              value={this.state.fields.name}
              onChange={this.onInputChange}  
            />
            <span className='text-red-500'>{this.state.fieldErrors.name}</span>
          </div>
          
          <div className=' box-border w-[350px] space-x-1'>
            <input 
              className='bg-slate-200 px-5 py-3 border-transparent 
              focus:outline-none text-black w-[230px]'
              type="text"
              name='email'
              placeholder='Email'
              value={this.state.fields.email}
              onChange={this.onInputChange} 
            />
            <span className=' text-red-500'>{this.state.fieldErrors.email}</span>
          </div>
          
          <div className='flex items-center w-[350px]'>
            <input 
              className=' bg-slate-900 w-[230px] text-lg text-slate-300 
              hover:bg-slate-700 hover:text-slate-200 px-5 py-3 
              active:bg-slate-600 transition-all'
              type="submit" 
            />
          </div>
        </form>
        <div className='flex flex-col items-center justify-between'>
          <h2 className='text-lg text-slate-900 font-bold'>People</h2>
          <ul>
            {this.state.people.map(({name, email}, i) => 
            <li key={i}>{name} ({email})</li>)}
          </ul>
        </div>
      </div>
    );
  }
}

export default App;