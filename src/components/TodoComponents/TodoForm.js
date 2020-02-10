import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Grid from '@material-ui/core/Grid';
import { TextField, Button } from '@material-ui/core';

class TodoForm extends React.Component {
    constructor() {
        super();
        this.state = {
          newItem: ""
        };
      }

      handleChanges = e => {
        this.setState({
          newItem: e.target.value
        });
      };

      handleSubmit = e => {
        e.preventDefault()
        this.props.addNewItem(this.state.newItem);
        this.setState({ newItem: "" });
      };

      handleClear = e => {
          e.preventDefault()
          this.props.clearCompleted();

      }

    render() {
        return (
            <AppBar position='relative' style={{marginBottom: '25px', borderRadius: '2.5px'}}>
                <Grid container direction='row' alignItems='center'>

       <form onSubmit={this.handleSubmit}><Grid container direction='row' alignItems='center'><TextField
        variant='outlined'
          type="text"
          name="newItem"
          value={this.state.newItem}
          onChange={this.handleChanges}
        />
        <Button type='submit' size='small'>Add</Button></Grid></form>
        <Button size='small' onClick={this.handleClear}>Clear complete</Button>

      </Grid>
      </AppBar>
        )
    }
}

export default TodoForm;