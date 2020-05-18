import React from 'react';
import {Paper, TextField,} from '@material-ui/core'

class SearchBar extends React.Component{
    constructor(props){
        super(props);
        this.state ={
            searchTerm: '',
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    render(){
        return (
          <Paper elevation={6} style={{padding: '25px'}}>
            <form onSubmit={this.handleSubmit}> 
              <TextField fullWidth label='Search...' onChange={this.handleChange.bind(this)} />
            </form>
          </Paper>
        );
    }
    handleSubmit(e){
      const {searchTerm} = this.state;
      const {onFormSubmit} = this.props;
      onFormSubmit(searchTerm);
      e.preventDefault();
    }
    handleChange(e){
      return this.setState({searchTerm: e.target.value})
    }
};

export default SearchBar;
