import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

class FileUpload extends Component {
  state = {
    documents: [],
  };

  deleteDocument = (id) => {
    axios.delete("/api/document/" + id).then(() => {
      this.setState({
        documents: this.state.documents.filter(
          (document) => document._id !== id
        ),
      });
    });
    document.location.reload(true);
  };

  componentDidMount() {
    axios.get("/api/document").then((res) => {
      this.setState({ documents: res.data });
    });
  }

  render() {
    return (
      <div className="profile-section">
        {this.state.documents.map((document) => (
            <div>
              <img className="profile-img" src={document.fileLink} target="_blank"/>
              <button
                  onClick={this.deleteDocument.bind(this,document._id)}
                  className=""
              >
                Delete
              </button>
            </div>
        ))}
      </div>
    );
  }
}

export default FileUpload;
