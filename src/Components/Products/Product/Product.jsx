import React from 'react'
import  {Card,CardMedia,CardContent,CardActions,Typography, IconButton} from '@material-ui/core';
import { AddShoppingCart } from '@material-ui/icons';
import useStyles from '../styles.js';

const Product = ({product,onAddToCart}) => {
    const classes = useStyles();
    

    return (
       <Card className = {classes.root}>
           <CardMedia style = {{height:"250px"}} component="img" className = {classes.media} image = {product.image.url} title = {product.name}/>
            <CardContent>
                <div className = {classes.cardContent}>
                    <Typography variant = "h5" gutterBottom>
                        {product.name}
                    </Typography>
                    <Typography variant = "h5" >
                        {product.price.formatted_with_symbol}
                    </Typography>
                    <Typography dangerouslySetInnerHTML={{__html:product.description}} variant = "body2" color= "textSecondary"/>
                       
                    <CardActions disableSpacing className={classes.CardActions}>
                        <IconButton aria-label="Add to Cart" onClick = {() => onAddToCart(product.id,1)}>
                            <AddShoppingCart/>
                        </IconButton>
                    </CardActions>

                </div>
            </CardContent>

       </Card>
    )
}

export default Product
