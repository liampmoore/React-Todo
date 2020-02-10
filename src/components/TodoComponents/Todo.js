import React from 'react';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';


class Todo extends React.Component {
    constructor() {
        super()
    }


    render() {
    return (
    <Card style={{marginBottom: '20px'}} color='primary'>
    <CardActionArea>
        <CardContent>
            <Typography variant='h5' color={this.props.item.completed ? 'primary':''} >{this.props.item.task}</Typography>
        </CardContent>
        <CardActions>
            <Button onClick={() => {this.props.toggleItem(this.props.item.id)}} color={this.props.item.completed ? 'primary' : ''}>Done</Button>
        </CardActions>
    </CardActionArea>
    </Card>
    )
    }
}


export default Todo;