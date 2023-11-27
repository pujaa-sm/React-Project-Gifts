import React from "react";
import PersonIcon from '@mui/icons-material/Person';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import ContactMailIcon from '@mui/icons-material/ContactMail';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import './profilestyle.css'
export default function Profile(){
    return(
        <div className="Profile-Container">
            <div className="Profile-Info">
            <Card sx={{ maxWidth: 350 }}>
                <CardMedia
                    component="img" alt="Profile Photo"
                    height="370"
                    image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQR8K1NF78U8F0WnJVJgtZ7FE5E0xNFQkbPEg&usqp=CAU"
                />
                <CardContent>
                    <Typography gutterBottom variant="h5" component="div"> Pujaa </Typography>
                    <Typography variant="body2" color="text.secondary">our professional profile should be no more than four brief sentences.
                     You may write your profile as a list in bullet form or as a short paragraph.</Typography>
                     <Typography>Member Since :  Nov 15 2018</Typography>
                </CardContent>
                </Card>
            </div>
            <div className="Profile-About">
                <h4><PersonIcon/>General Information</h4>
                <table>
                    <tr><td>First Name</td>
                    <td>pujaa</td></tr>
                    <tr><td>Last Name</td>
                    <td></td></tr>
                    <tr><td>Gender</td>
                    <td>Female</td></tr>
                    <tr><td>Birthday</td>
                    <td>Nov 16, 2004</td></tr>
                </table>
                <h5><ContactMailIcon/> Contact Information</h5>
                <table>
                    <tr><td>Contact</td>
                    <td>9990267895</td></tr>
                    <tr><td>Email</td>
                    <td>pujaa@gmail.com</td></tr>
                </table>
                <h5><SettingsSuggestIcon/>Other Information</h5>
                <table>
                    <tr><td>Current Address</td>
                    <td>Green Street,Gandhipuram</td></tr>
                    <tr><td>Permanent Address</td>
                    <td>Green Street,Gandhipuram</td></tr>
                    
                </table>
            </div>
        </div>

    )
}