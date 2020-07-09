import React, { Component } from "react";
import axios from "axios";

class NewFileUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedFile: null,
    };
  }

  handleSelectedFile = (e) => {
    e.preventDefault();
    this.setState({
      description: e.target.value,
      selectedFile: e.target.files[0],
    });
  };

  onChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleUpload = (event) => {
    event.preventDefault();
    const data = new FormData(event.target);
    data.append("file", this.state.selectedFile, this.state.description);

    axios
      .post("/api/document/upload", data)
      .then(() => {
        document.location.reload(true);
      })
  
  };

  // componentDidMount(){
  //   let user = this.props.fetchUser(this.props.currentUser.id);
  //   console.log(user);
  // }

  render() {
    const { selectedFile } = this.state;

    return (
      <div>
         <div>
            <div>
              Upload a new profile picture
            </div>
            
            <form onSubmit={this.handleUpload}>
              <div className="form-group">
                <input
                  type="file"
                  name=""
                  id=""
                  onChange={this.handleSelectedFile}
                />
              </div>
              <button type="submit">
                Upload
              </button>
            </form>
        </div>  
      </div>
    );
  }
}

export default NewFileUpload;
