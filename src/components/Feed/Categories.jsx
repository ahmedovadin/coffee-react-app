import React from "react";
import { useNavigate } from 'react-router-dom';
import HomeIcon from '@mui/icons-material/Home';

import store from '../../store/store';
import { routeStoreAction } from '../../store/routeStoreAction';
import {info} from '../../static-data/product-data';

const Categories = () => {

  const navigate = useNavigate();

  const navto = (value) => {
      
      let path = `/feed/product/`;
      
      if(value?.isHome == true){
        path = `/`;
      } else{
        
        let funcName = routeStoreAction[value.cateName.toLowerCase()];

        store.dispatch(funcName());
      }
      
      navigate(path);
  }

  return (
    <>
      <div className='panel'>
        {info.categories.map((value, index) => {
          return (
            <div className='row f_flex' key={index} onClick={()=> navto(value)}>
              {(value?.isHome == true) ? <HomeIcon /> : <img src={value.cateImg} alt='' /> }
              <span className={(value?.isHome == true) ? "item-name-icon" : "item-name"}>{value.cateName}</span>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default Categories;
