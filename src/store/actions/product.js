export const SHOW_DRINKS  = 'SHOW_DRINKS';
export const SHOW_BEANS   = 'SHOW_BEANS';
export const SHOW_TOOLKIT = 'SHOW_TOOLKIT';
export const SHOW_DESCRIPTION= 'SHOW_DESCRIPTION';

export const showDrinks = () => {
    return { type: SHOW_DRINKS, data: {title: 'Drinks', data_code: 'drinks'}} 
}

export const showBeans = () => {
    return { type: SHOW_BEANS, data: {title: 'Beans', data_code: 'beans'}} 
}

export const showToolkit = () => {
    return { type: SHOW_TOOLKIT, data: {title: 'Toolkit', data_code: 'toolkit'}}  
}

export const showDescription = ({item, prev_link, prev_name}) => {
    return { type: SHOW_DESCRIPTION, data: {item, prev_link, prev_name}}  
}