import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import {compose} from 'redux';
import { withStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import ResultsCard from '../../templates/ResultsCard'; 



const style = theme => ({
    root: {
        flexGrow: 1,
        margin: '2%',
    },
})

class Result extends React.Component {
    
    showResults() {
        if(this.props.results.length >0)
        {
            const resultArray = this.props.results;
            return resultArray.map((item,i) => {
                return (
                    <Grid item xs={12} sm={3}>
                        <ResultsCard 
                            key={i}
                            data={item}
                        />
                    </Grid>
                    )
            });
        }
        else {
            
        }
    }
    
    render() {
        const { classes } = this.props;
        return (
            <div className={classes.root}>
                <Grid container justify = "center" alignItems = "center" spacing={32}>
                    {this.showResults()}
                </Grid> 
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
    results: state.results.resultData
});

export default compose(
    connect(mapStateToProps),
    withRouter,
    withStyles(style)
)(Result);