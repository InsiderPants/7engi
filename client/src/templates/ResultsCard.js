import React from 'react'
import { withStyles } from '@material-ui/core/styles';
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";


const styles = theme => ({
    card: {
        maxWidth: 300,
    },
    media: {
        height: 120,
        objectFit: 'cover',
    },
});

const ResultsCard = (props) => {
    const name = props.data.Name.toUpperCase().split(' ',3);
    const cgpa = props.data.CGPA;
    const rollno = props.data.RollNo;
    const showName = () => {
        let newName = [];
        if(name.length >2) {
            newName = [name[0],name[2]]
        }
        else {
            newName = name;
        }
        return newName.map(item => {
            return item+" ";
        });
    }
    const { classes } = props;

    return (
        <Card className={classes.card}>
            <CardMedia
                className={classes.media}
                image = "https://picsum.photos/300/120?image=1068&gravity=north" //"https://picsum.photos/300/120?image=903"
                title="Similar Students"
            />
            <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
                {showName()}
            </Typography>
            <Typography component="p">
                Roll No. : {rollno}
            </Typography>
            <Typography component="p">
                CGPA : {cgpa}
            </Typography>
            </CardContent>
            <CardActions>
                <Button size="small" color="primary">
                    More Info
                </Button>
            </CardActions>
        </Card>
    )
}

export default withStyles(styles)(ResultsCard)