import React from 'react'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';
import logo from "../../assets/logo.png";
import useStyles from "./styles.js";
import styles from '../../../../iwp_project/src/Components/Products/styles';
import SearchBar from "material-ui-search-bar";
import { Link, useLocation } from 'react-router-dom'
import { Button } from 'react-bootstrap'

const Navbar = ({ totalItems ,fetchSearchedItems,fetchMouses,fetchKeyboards,fetchHeadphones,fetchMonitors}) => {
    const classes = useStyles();
    const location = useLocation();

    return (
        <>
            <AppBar position="fixed" className={classes.appBar} color="inherit" style={{backgroundColor : "rgb(231, 231, 231)"}}>
                <Toolbar>
                    <Typography component={Link} to="/" variant="h6" className={classes.title} color="inherit">
                        <img src={logo} alt="Logo" height="25px" className={classes.image} />
                        E-COMMERCE
                    </Typography>
                    <Button onClick = {() => fetchMouses()} variant="outline-secondary" style={{marginLeft:'100px', color:"black"}}>MOUSE</Button>
                    <Button onClick = {() => fetchKeyboards()} variant="outline-secondary" style={{marginLeft:'50px', color:"black"}}>KEYBOARD</Button>
                    <Button onClick = {() => fetchHeadphones()} variant="outline-secondary" style={{marginLeft:'50px', color:"black"}}>HEADPHONES</Button>
                    <Button onClick = {() => fetchMonitors()} variant="outline-secondary" style={{marginLeft:'50px', color:"black"}}>MONITORS</Button>
                    <div className={classes.grow} />
                    <div className={classes.button} />
                    <SearchBar
                        id="search"
                        onChange={() =>  console.log("Query",document.getElementById('search').value)}
                        onRequestSearch={() => fetchSearchedItems()}
                        style={{
                            margin: "0 auto",
                            maxWidth: 800
                        }}
                    />
                    {location.pathname === '/' ? (
                        <IconButton component={Link} to="/cart" area-label="Show Cart" color="inherit">
                            <Badge badgeContent={totalItems} color="secondary">
                                <ShoppingCart />
                            </Badge>

                        </IconButton>) : null}

                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar
