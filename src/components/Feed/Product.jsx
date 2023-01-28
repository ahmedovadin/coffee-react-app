import {React, Component} from 'react';
import Grid from '@mui/material/Grid';
import Categories from './Categories';
import { NavLink } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PageviewIcon from '@mui/icons-material/Pageview';
import './Feed.scss';
import store from '../../store/store';
import {info} from '../../static-data/product-data';
import {showDescription} from '../../store/actions/product';

let key_counter = 0;

class Product extends Component {
    constructor(){
        super();

        let {data} = store.getState().productReducer;

        this.state = {
            title: data.title,
            code: data.data_code
        }
    }

    componentDidMount(){
        store.subscribe(() => {
        
            let {data} = store.getState().productReducer;
            this.setState({
                title: data.title,
                code: data.data_code
            })
        })
    }

    navto(item){
        store.dispatch(showDescription({item, prev_link: this.state.code, prev_name: this.state.title}));
    }

    render(){
        return (
            <div>
              <h3>{this.state.title}</h3>
              <div className='container d_flex'>
                <Categories />
                <Grid container spacing={0.5}>
                  {info[this.state.code].map((value, index) => {
                    key_counter++;
                    return (
                        <NavLink to="/details" key={key_counter}>
                            <Grid xs={4} item  onClick={()=> this.navto(value)}>
                            {/* <Grid xs={4} item onClick={()=> this.navto("/details/")} key={key_counter}> */}
                                <Card sx={{ maxWidth: 345 }}>
                                    <CardActionArea>
                                        <CardMedia
                                            component="img"
                                            height="140"
                                            image={value.cateImg}
                                            alt=""
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="h5" component="div">
                                            {value.cateName}
                                            </Typography>
                                            <Typography variant="body2" color="text.secondary">
                                            {value.description ? value.description : 
                                            ` Lizards are a widespread group of squamate reptiles, with over 6,000
                                            species, ranging across all continents except Antarctica`}
                                            
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button size="small" color="primary">Share</Button>
                                    </CardActions>
                                    <div className="item-action">
                                        <button className="active" disabled="" title="Added to cart">
                                            <ShoppingCartIcon></ShoppingCartIcon>
                                        </button>
                                        <button title="Quick View">
                                            <PageviewIcon />
                                        </button>
                                    </div>
                                </Card>
                            </Grid>
                        </NavLink>
                    )
                  })}
                  </Grid>
              </div>
            </div>
        )
    }
}

export default Product
