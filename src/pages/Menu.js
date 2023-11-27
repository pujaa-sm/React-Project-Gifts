import React ,{useState}from "react";

import { MenuList } from "../data/Data";
import Layout from "./../components/Layout/Layout";
import {
  Box,
  Card,CardActions,
  CardActionArea,
  CardContent,
  CardMedia,Button,
  Typography,
} from "@mui/material";

const Menu = () => {
  const [count,setCount] = useState(0);
  return (
    <Layout>
      <Box sx={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}>
        {MenuList.map((menu) => (
          <Card sx={{ maxWidth: "250px", display: "flex", m: 2 }}>
            <CardActionArea>
              <CardMedia
                sx={{ minHeight: "300px" }}
                component={"img"}
                src={menu.image}
                alt={menu.name}
                
                
              />
              <CardContent>
                <Typography variant="h5" gutterBottom component={"div"}>
                  {menu.name}
                </Typography>
                <Typography variant="body2">{menu.description}</Typography>
                <h2 style={{textAlign:'right'}}>₹{menu.price}</h2>
              </CardContent>

              <Button variant="contained" sx={{color:'white',backgroundColor:'black',marginBottom:'10px',alignContent:'right'}} size='normal'onClick={() =>setCount(count+1)} >Add To Cart</Button>
              <Button variant="contained" sx={{color:'white',backgroundColor:'black',marginBottom:'12px',marginLeft:'10px'}} size='normal' >Buy Now</Button>

            </CardActionArea>
            <CardActions>
            </CardActions>
          </Card>
        ))}
      </Box>
    </Layout>
  );
};

export default Menu;