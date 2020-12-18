import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';


import Avatar from "@material-ui/core/Avatar";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Divider from "@material-ui/core/Divider";


const useStyles = makeStyles((theme) => ({
    root: {
      maxWidth: '100%',
    }
}));

export default function ProductCards ({ slug, name, image}){
  const classes = useStyles();

  console.log ('Props', slug, name, image)
return (
    <>       
      <Card className={classes.root}>
        <CardMedia
          component="img"
          className={classes.media}
          image={image}
        />
        {console.log('IMage', image)}
        <CardContent className={classes.content}>
          <Typography
            className={"MuiTypography--heading"}
            variant={"h6"}
            gutterBottom
            >
            {name}
          </Typography>
          <Typography
            className={"MuiTypography--subheading"}
            variant={"caption"}
          >
            We are going to learn different kinds of species in nature that live
            together to form amazing environment.
          </Typography>
          
        </CardContent>
      </Card>
    </>
    )}