import { Container, Typography, Button, Grid } from '@material-ui/core'
import React from 'react'
import styles from './styles';
import CartItem from './CartItem/CartItem';
import useStyles from "./styles.js";
const Cart = ({cart,handleUpdateCartQty,handleRemoveFromCart, handleEmptyCart}) => {
    const classes = useStyles();
    if(!cart.line_items) return("Loading...");
    const isEmpty = !(cart.line_items.length);
    const EmptyCart = ()=>(
        <Typography style = {{backgroundColor : 'rgb(231, 231, 231)'}} variant = "substitute1">You have no items in the cart...</Typography>
    );

    const FilledCart = () => (
        <>
        <Grid container spacing = {3} style = {{backgroundColor : 'rgb(231, 231, 231)'}}>
            {cart.line_items.map((item)=>(
                <><Grid item xs={12} sm={4} key={item.id}>
                    <CartItem item = {item} onUpdateCartQty = {handleUpdateCartQty} onRemoveFromCart = {handleRemoveFromCart}/>
                </Grid></>
                ))}
                <div className={classes.cardDetails}>
                        <Typography variant="h4">
                                Subtotal: {cart.subtotal.formatted_with_symbol}
                        </Typography>
                        <div>
                        <Button className={classes.emptyButton} size = "large" type="button" varaint= "contained" color = "secondary" onClick = {handleEmptyCart}>Empty Cart</Button>
                        <Button className={classes.CheckoutButton} size = "large" type="button" varaint= "contained" color = "primary">Checkout</Button>
                        </div>
                    </div>

            
        </Grid>
        </>
    );

    
    return (
        <Container>
            <div className = {classes.toolbar}/>
            <Typography className={classes.title} variant = "h3" gutterBottom>Your Shopping Cart</Typography>
            {isEmpty ? <EmptyCart/>:<FilledCart/>}
        </Container>
    )
}

export default Cart
