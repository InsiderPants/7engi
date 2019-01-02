import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    maxWidth: '100%',
  },
  media: {
    height: 350,
  },
  root: {
    flexGrow: 1,
    margin: '2%',
  },
};

const AboutOurProject = (props) => {
    const { classes } = props
    return (
        <div className={classes.root}> 
            <Card className={classes.card}>
                <CardMedia
                className={classes.media}
                image = "https://picsum.photos/1920/350?image=515&gravity=center"
                title="Contemplative Reptile"
                />
                <CardContent>
                <Typography gutterBottom variant="h2" component="h1">
                    7Engi
                </Typography>
                <Typography component="p">
                    something about our project blah blah balh
                </Typography>
                <Typography component="p">
                    something about our project blah blah balh line 2
                </Typography>
                </CardContent>
                <CardActions>
                    <Button size="medium" color="primary" href="https://github.com/InsiderPants/7engi">
                        Github (manish)
                    </Button>
                    <Button size="medium" color="primary" href="https://github.com/dabasajay/7engi">
                        Github (ajay)
                    </Button>
                </CardActions>
            </Card>
        </div>
    );
}

export default withStyles(styles)(AboutOurProject);