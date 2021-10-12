import React from "react";
import {Grid} from "@material-ui/core";
import Product from "./Product/Product";
import useStyles from './styles';

const Products = ({prods,onAddToCart}) =>{
    const classes = useStyles();
    if(!prods)
    return((<h3 className='text-center'>
        No products
    </h3>
        ))
    return(
<main className = {classes.content}>
    <div className = {classes.toolbar}/>
    <Grid container justify ="center" spacing = {4}>
        {prods.map((pp)=>(
            <Grid item key={pp.key} xs = {12} sm ={6} md = {4} lg = {3}>
                <Product product = {pp}  onAddToCart = {onAddToCart}/>
            </Grid>
        ))
}
    </Grid>
</main>
)}
export default Products;
