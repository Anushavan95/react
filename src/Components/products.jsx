import FavoriteIcon from "@mui/icons-material/Favorite";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import ShareIcon from "@mui/icons-material/Share";
import Avatar from "@mui/material/Avatar";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import axios from "axios";
import * as React from "react";
import { useEffect, useState } from "react";
import TabsWrappedLabel from "./Tabs";
import { Button } from "@mui/material";
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
export default function Products({result,showalert, getCategoryItem, addTocart}) {
const [category, setCatgory] =     useState([])
useEffect(() => {
axios.get('https://fakestoreapi.com/products/categories').then(response => {
setCatgory(response.data)
})
}, [])

  return (
    <div className='products'>
       <Alert severity="success" className={`${showalert ? 'showalert': ""}`}>
  <AlertTitle>Success</AlertTitle>
  This is a success alert — <strong>check it out!</strong>
</Alert>
<TabsWrappedLabel category={category}  getCategoryItem={getCategoryItem}/>
      <div className="cards">
        {result.map((product, index) => {
            return  <Card sx={{ maxWidth: 345 }}>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  {product&& product.title.slice(0, 1)}
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title={product && product?.title}
              subheader="September 14, 2016"
            />
            <CardMedia
              component="img"
              height="194"
              image={product && product?.image}
              alt="Paella dish"
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {product && product.description}
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
           
            </CardActions>
             <Button variant="contained" onClick={() => addTocart(product)}>add to cart</Button>
          </Card> 
        })}

      </div>
    </div>
  )
}
