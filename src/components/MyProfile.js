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
            Name:
            <br />
            <input
              type='text'
              name='name'
              onChange={this.handleChange}
              value={this.state.name} />
          </label>
          <label>
            Gender:
            <br />
            <select
              name='gender'
              onChange={this.handleChange}
              value={this.state.gender}>
              <option>Male</option>
              <option>Female</option>
            </select>
          </label>
          <label>
            Description:
            <br />
            <textarea
              name='description'
              onChange={this.handleChange}
              value={this.state.description} />
          </label>
          <label>
            <input
              type="checkbox"
              name="read"
              checked={this.state.read}
              onChange={this.toggleCheckbox} />
            I have read the terms of conduct
          </label>
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default MyProfile;


