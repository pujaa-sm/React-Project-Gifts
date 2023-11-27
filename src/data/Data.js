import christmasmug from "../images/christmasmug.jpg";
import glassball from "../images/glassball.jpg";
import ledacrylic from "../images/ledacrylic.jpg";
import magicmirror from "../images/magicmirror.jpg";
import photoframe from "../images/photoframe.jpg";
import tlight from "../images/tlight.jpeg";
import polaraid from "../images/minipolaraid.jpeg";
import Mug from "../images/cup.jpeg";
import coasters from "../images/coasters.webp";
import hamper from "../images/Hamper.webp";
import Frames from "../images/Wooden.webp";
import Skins from "../images/LaptopSkins.webp";
import power from "../images/Encharge powerbank.webp";
import passport from "../images/Passport Cover.webp";
import magnet from "../images/photomagnet.webp";
import Cal from "../images/Callander.webp";
import pen from "../images/pendrive.webp";
import { CardContent } from "@mui/material";
//import Navbar from './Navbar';
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
export const MenuList = [
  {
    name: "ChristmasMug",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    image: christmasmug,
    price: 200,
    
  },
  {
    name: "GlassBall",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    image: glassball,
    price: 250,
  },
  {
    name: "LED Acrylic",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    image: ledacrylic,
    price: 300,
  },
  {
    name: "Magic Mirror",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    image: magicmirror,
    price: 100,
  },
  {
    name: "Photo Frame",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    image: photoframe,
    price: 400,
  },
  {
    name: "T Light",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    image: tlight,
    price: 500,
  },
  
  {
    name: "Polaraid",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    image: polaraid,
    price: 500,
  },
  {
    name: "Customized Mug",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    image: Mug,
    price: 500,
  },
  {
    name: "Coasters",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    image: coasters,
    price: 500,
  },
  {
    name: "Hampers",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    image: hamper,
    price: 500,
  },
  {
    name: "Wooden Frames",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    image: Frames,
    price: 500,
  },
  {
    name: "Laptop Skins",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    image: Skins,
    price: 500,
  },
  {
    name: "Wall Calendar",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    image: Cal,
    price: 500,
  },
  {
    name: "PowerBank",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    image: power,
    price: 500,
  },
  {
    name: "Pendrive",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    image: pen,
    price: 500,
  },
  {
    name: "Fridge Magnet",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, ab!",
    image: magnet,
    price: 500,
  },
  
];
export default function Product1(){
 

  return(

    <>
        {/* <Navbar/>   
        <Slider/> */}
         <div className='Container'>
         
        1<Card1
        img="https://ik.imagekit.io/9um5tdigihm/8/storage/catalog/campaign/5571/1/5571_157_881486b2ea96a7a7c6462c7d42d4b2a9_.png?tr=n-w576:n-q80"
        title="Personalized Mug"
        alt="green iguana"
        handleLogin="/Vegetables"/>
        <Card1
        img="https://img.freepik.com/free-photo/fresh-fruit-salad-healthy-gourmet-delight-generated-by-ai_188544-22495.jpg?t=st=1700668432~exp=1700672032~hmac=9a86bc40e9c561c865552d31d3ac8ec6dcf3e92bfdf4c952989abeac8ae6ca3b&w=1060"
        title="Fresh Farm Fruits"
        handleLogin="/Fruits"/>
        <Card1
        img="https://img.freepik.com/free-photo/elegant-kitchen-utensils-set-harmonious-fusion-practicality-style-meet-your-culinary-requirements_157027-2322.jpg?t=st=1700668564~exp=1700672164~hmac=c543f6edeaf8c6a4451f7aa51334fcd539633c27b923a667053884eeb39ba816&w=1380"
        title="Kitchen Accessories"
        handleLogin="/Kitchen"/>
        <Card1
        img="https://img.freepik.com/free-vector/modern-blue-professional-business-stationery-set_1017-15301.jpg?w=900&t=st=1700668955~exp=1700669555~hmac=9846d88d1fa4458a47b017532d0824f0caf5e275986b0b02a36704d749ca8a6e"
        title="Stationery Items"
        handleLogin="/Stationery"/>
        <Card1
        img="https://img.freepik.com/free-photo/close-up-japanese-street-food_23-2149287802.jpg?w=996&t=st=1700670200~exp=1700670800~hmac=78d3d66740fc1f6bb1e3e84179c4659ed607757d6dc80ce17276c3b840e3c115"
        title="Frozen Meats"
        handleLogin="/Meat"/>
        <Card1
        img="https://img.freepik.com/premium-vector/splash-juice-sweet-tropical-fruits-mango-banana-pineapple-papaya-orange-3d-realistic-vector_163454-1281.jpg?size=626&ext=jpg&uid=R127822682&ga=GA1.1.244610712.1700506720&semt=ais"
        title=" Fresh Juice"
        handleLogin="/Juice"/>
        <Card1
        img="https://img.freepik.com/free-photo/front-view-chocolate-with-cocoa-powder_23-2148549909.jpg?size=626&ext=jpg&uid=R127822682&ga=GA1.1.244610712.1700506720&semt=sph"
        title="Chocolates"
        handleLogin="/chocolates"/>
        </div> 
        </>
    )
  }
  function Card1(props){
     const navigate=useNavigate();
    return(
    <div className='card'>
        <Card sx={{maxWidth: 300,padding:5}}>
      <CardMedia className="image"image={props.img}
        sx={{height: 250 }}
      />
      <CardContent>
        <Typography sx={{fontWeight:'bold'}} className='title' gutterBottom variant="h6" component="div">{props.title}
        </Typography>
      </CardContent>
      <CardActions>
        <div style={{display:'flex' , flexDirection:'column'}}>
        <Button variant="contained" sx={{color:'white',backgroundColor:'black',marginBottom:'10px'}} size='normal' onClick={()=>{navigate(props.handleLogin)}}>Buy Now</Button>
        <Button variant="contained" sx={{color:'white',backgroundColor:'black'}} size='normal' onClick={()=>{navigate(props.handleLogin)}}>Add To Cart</Button>
        </div>
      </CardActions>

    </Card>
     </div>
     
    )
    }