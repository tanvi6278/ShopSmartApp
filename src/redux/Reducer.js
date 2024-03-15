import { combineReducers } from "redux"; 

const tanviInitialState = {
    tanviItems: []
}
const laptopInitialState =
{
    laptopItems : []
}

const fragrancesInitialState = {

    fragrancesItem : []
}

const skincareInitialState = {

    skincareItem : []
}

const groceriesInitialState = {

    groceriesItem : []
}

const homeDecorationInitialState = {

     homeDecorationItem : []
}

const tanviReducer = (state = tanviInitialState,action) =>
{
    switch(action.type) {
        case  'SET_TANVI':
        return {
            ...state,
            tanviItems : action.payload
        }
        default:
            return state
    }
}

const laptopReducer = (state = laptopInitialState,action) =>
{
    switch(action.type){
        case 'SET_LAPTOP' :
            return {
                ...state,laptopItems : action.payload
            }
            default :
            return state
    }
}

const fragrancesReducer = (state = fragrancesInitialState , action)=>
{

    switch(action.type)
    {

         case 'SET_FRAGRANCES':
         return{
                ...state,fragrancesItem : action.payload
         }
         default :

         return state
    }

}

const skincareReducer = (state = skincareInitialState,action) =>
{
    switch(action.type)
    {
        
        case  'SET_SKINCARE' :

        return {
            ...state ,skincareItem : action.payload
        }
        default :

        return state 
    }
}

 const groceriesReducer = (state = groceriesInitialState,action) =>
 {
    switch(action.type){

        case 'SET_GROCERIES' :
        return{
              ...state ,  groceriesItem : action.payload
        }
        default :
         
        return state

    }

 }

 const homeDecorationReducer = (state = homeDecorationInitialState,action) =>
 {

    switch(action.type){

        case 'SET_HOMEDECORATION' :
            return{
                ...state, homeDecorationItem : action.payload
            }

            default :

            return state
    }
     
 }

const rootReducer = combineReducers({
    tanvi: tanviReducer,
    laptop: laptopReducer,
    fragrances : fragrancesReducer,
    skincare : skincareReducer,
    groceries : groceriesReducer,
    homeDecoration : homeDecorationReducer

   
})
export default rootReducer;
