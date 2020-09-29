import React, {Component} from 'react';
import './myProfile.less';

class MyProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      gender: '',
      description: '',
      read: false
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { name, description, read } = this.state;
    if (!(name && description && read)) {
      console.log('Please fill all required fields');
    } else {
      console.log(this.state);
    }
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  toggleCheckbox = (event) => {
    this.setState({
      read: event.target.checked
    });
  };

  render() {
    return (
      <div className="my-profile">
        <h2>My Profile</h2>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name
            <br />
            <div className='input-wrapper'>
              <input
                type='text'
                name='name'
                className='normal'
                placeholder='Your name'
                onChange={this.handleChange}
                value={this.state.name} />
            </div>
          </label>
          <label>
            Gender
            <br />
            <div className='input-wrapper'>
              <select
                name='gender'
                onChange={this.handleChange}
                value={this.state.gender}>
                <option>Male</option>
                <option>Female</option>
              </select>
            </div>
          </label>
          <label>
            Description
            <br />
            <div className='input-wrapper'>
              <textarea
                name='description'
                placeholder='Description about yourself'
                onChange={this.handleChange}
                value={this.state.description}
              />
            </div>
          </label>
          <label className='terms-label'>
            <input
              type="checkbox"
              name="read"
              className='terms-checkbox'
              checked={this.state.read}
              onChange={this.toggleCheckbox} />
            <span className='terms-text'>&nbsp;I have read the terms of conduct</span>
          </label>
          <input type='submit' className='btn-submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default MyProfile;


