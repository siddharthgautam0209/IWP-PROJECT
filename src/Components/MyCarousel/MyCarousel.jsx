import { FormatAlignCenter } from '@material-ui/icons';
import React from 'react'
import { Carousel } from 'react-bootstrap'



var i = 0;
const MyCarousel = ({items}) => {
    
    console.log(items); 
    return (
        
        <Carousel variant = "dark" style={{ color: "black", position: "relative", marginTop: 65, }}>
            {items.map((item)=>(
            
            <Carousel.Item style={{ color: "black", alignItems:'center'}}>
            <img
                className = "rounded mx-auto d-block"
                style={{paddingTop:"10px", height:"600px", opacity: 0.75 }}
                src={item.image.url}
                alt={"Hello"}
            />

            <Carousel.Caption>
                <h3 style={{ color: "black" }}>{item.name}</h3>
                <p style={{ color: "black" }}> {item.price.formatted_with_symbol}</p>
            </Carousel.Caption>
        </Carousel.Item>
    
            ))}
            
        </Carousel>
    )
}

export default MyCarousel
