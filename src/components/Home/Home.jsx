import React from 'react'

import { Button } from '@mui/material';
import Grid from '@mui/material/Grid'; // Grid version 1
import { useNavigate } from 'react-router-dom';

import './Home.scss'

import store from '../../store/store';
import { routeStoreAction } from '../../store/routeStoreAction';
import {info} from '../../static-data/product-data';

let key_counter = 0;

function Home() {
    const navigate = useNavigate();
    const navto = (path, name) => {
        
        let funcName = routeStoreAction[name];
        
        store.dispatch(funcName());
        navigate(path);
    }

    
  return (
    <>
        <div className='banner'>
            <div className='banner-shadow'></div>
            <div className='slogan'>
                <h1>Coffee Lover?</h1>
                <p>Let's choose what you want!</p>

                <div className='choose-panel'>
                    <Grid container spacing={12}>
                        {info.options.map(item => {
                            key_counter++;
                            return (
                                <Grid item xs key={key_counter}>
                                    <Button className='button-white'
                                        size="large" 
                                        variant="outlined"
                                        onClick={()=> navto("/feed/product/", item.toLowerCase())}
                                    >
                                        {item}
                                    </Button>
                                </Grid>
                            )
                        })}
                    </Grid>
                </div>
            </div>
        </div>
    </>
    
    
  )
}

export default Home
