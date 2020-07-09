import React, { Component } from 'react'

export default class SkillForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            category: '',
            description: '',
            user: this.props.userId,
        }
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.renderErrors = this.renderErrors.bind(this);
    }

    // takes in a field to choose which key in the state is being updated
    handleInput(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.newSkill(this.state)
    }

    handleCancel(e) {
      e.preventDefault();
      this.props.history.push('/dashboard');
    }

     // Render the form errors if there are any
    renderErrors() {
        return (
        <ul>
            {Object.keys(this.props.errors).map((error, i) => (
            <li className='error' key={`error-${i}`}>{this.props.errors[error]}</li>
            ))}
        </ul>
        );
    }

    render() {
      const errors = this.props.errors ? this.renderErrors() : null;

        return (
          <div className='new-skill-div'>
            <form className="skill-form" onSubmit={this.handleSubmit}>
              <h1>What skill would you like to master?</h1>
              <div className="skill-form-inputs">
                <label>Title</label>
                  <input
                    type="text"
                    value={this.state.title}
                    onChange={this.handleInput("title")}
                    placeholder="Give your skill a title"
                    className="skill-form-input"
                  />

                  <label>Category</label>
                  <select 
                    onSelect={this.handleInput("category")}
                    className='skill-form-input'
                  >
                    <option value="">Select a category</option>
                    <option value="Art & Design">Art &amp; Design</option>
                    <option value="Culinary Arts">Culinary Arts</option>
                    <option value="Education">Education</option>
                    <option value="Fitness & Well-Being">
                      Fitness &amp; Well-Being
                    </option>
                    <option value="Foreign Language">Foreign Language</option>
                    <option value="Music & Entertainment">
                      Music &amp; Entertainment
                    </option>
                    <option value="Science & Technology">
                      Science &amp; Technology
                    </option>
                    <option value="Self Improvement">Self Improvement</option>
                    <option value="Writing">Writing</option>
                    <option value="Other">Other</option>
                  </select>

                  <label>Description</label>
                  <textarea
                    type="text"
                    value={this.state.description}
                    onChange={this.handleInput("description")}
                    placeholder="Describe your new skill"
                    className="skill-form-description"
                  />
                <div className='skill-form-buttons'>
                  <button>Cancel</button>
                  <input type="submit" value="Start Skill" />
                </div>
              </div>
              {errors}
            </form>
          </div>
        );
    }
}
