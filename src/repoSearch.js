import React from 'react';

// const App = () => <div>Main app</div>;

class RepoSearch extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: '', result: []};

      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      this.setState({value: event.target.value});
    }

    handleSubmit(event) {
      // alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
      this.setState({result: []});
      fetch(`https://api.github.com/search/repositories?q=${this.state.value}&sort=stars&order=desc`)
        .then((response) => {
            return response.json();
        })
        .then((myJson) => {
            this.setState({result: myJson.items});
        });
    }

    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
          {this.state.result.length ? 
                <ul>{this.state.result.map(item => <li>{`${item.name} - ${item.stargazers_count}`}</li>)}</ul>
                :
                null
          }
        </form>
      );
    }
  }

export default RepoSearch;