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
        this.handleSelect = this.handleSelect.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field) {
        return e => {
            this.setState({ [field]: e.target.value })
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.newSkill(this.state);
        this.props.push('/dashboard');
    }
    render() {
        return (
          <div>
            <form className="skill-form">
              <label>Title</label>
              <input
                type="text"
                value={this.state.title}
                onChange={this.handleInput("title")}
                placeholder="Give your skill a title"
              />

              <label>Category</label>
              <input
                type="text"
                value={this.state.category}
                onChange={this.handleInput("category")}
                placeholder="Give your skill a title"
              />
              <select onSelect={this.handleInput("category")}>
                <option value="">Select a category</option>
                <option value="Music & Entertainment">Music &amp; Entertainment</option>
                <option value="Culinary Arts">Culinary Arts</option>
                <option value="Art & Design">Art &amp; Design</option>
                <option value="Writing">Writing</option>
                <option value="Fitness & Well-Being">Fitness &amp; Well-Being</option>
                <option value="Foreign Language">Foreign Language</option>
                <option value="Science & Technology">Science &amp; Technology</option>
              </select>

              <label>Description</label>
              <textarea
                type="text"
                value={this.state.description}
                onChange={this.handleInput("description")}
                placeholder="Describe your new skill"
              />
            </form>
          </div>
        );
    }
}
