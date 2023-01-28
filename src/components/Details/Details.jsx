import React from "react";
import { NavLink, useParams } from "react-router-dom";
import { Container } from "@mui/material";
import Grid from '@mui/material/Grid';
import CardMedia from '@mui/material/CardMedia';
import store from '../../store/store';
import { routeStoreAction } from '../../store/routeStoreAction';

import './Details.scss';

let key_counter = 0;

const Details = () => {

  const navto = (prev_link) => {
        
    let funcName = routeStoreAction[prev_link];
    
    store.dispatch(funcName());
  }

  let {data: details} = store.getState().productReducer;

  return (  
    <>
        <div className="breadcrumb-area">
          <div className="container">
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb">
                <li className="breadcrumb-item">
                  <NavLink to="/">Home</NavLink>
                </li>
                <li className="breadcrumb-item"onClick={() => navto(details.prev_link)}>
                  <NavLink to={`/feed/product`} >{details.prev_name}</NavLink>
                </li>
                <li className="breadcrumb-item active" aria-current="page">Details</li>
              </ol>
            </nav>
          </div>
        </div>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <h1>{details.item.cateName}</h1>
              <ul className='product-gallery__thumbs list-unstyled'>
              {[1, 2, 3].map((innerItem, index) => {      
                key_counter++;
                  return ( 
                    <li key={key_counter}className='product-item'>
                      <a href='#' className='product-gallery__thumb-link' onClick={(e) => {e.preventDefault();}} >
                        <span className="fragment">
                          <CardMedia
                            component="img"
                            image={details.item.cateImg}
                            alt=""
                          />
                        </span>
                      </a>
                  </li>)
                 })}
              </ul>
              <figure className='product-gallery__big-img'> <img className="product-item-img" src={details.item.cateImg} /></figure>
            </Grid> 
            <Grid item xs={12} sm={6}>
            <div className='price-and-buy'>
            <p className={'price-and-buy__price'}>
              <span className={'price-and-buy__from'}>From:</span>
              <span className={'product-price'}>120KGS</span>
            </p>
              <hr />
              <div className=''>
                <b>{details.item.cateName}</b> <br/>
                {details.item.description}
              </div>
            </div>
            </Grid>
          </Grid>
        </Container>
    </>
  );
};


export default Details;