import productAction from '../actions/product';

function productReducer (state = '', action) {

    if(action.type == "SHOW_DESCRIPTION"){
      return {
        ...state,
        data: action.data
      }
    }else{
      return {
        ...state,
        data: action.data || {title:'Drinks', data_code: 'drinks'}
      }
    }
    
  }

export default productReducer