import {createStore,combineReducers,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

import {productListReducer,productDetailsReducer,productDeleteReducer, productCreateReducer,productUpdateReducer,} from './reducers/productReducers'
import { cartReducer } from './reducers/cartReducer'
import {userLoginReducer,userRegisterReducer,userListReducer,userDeleteReducer,userUpdateReducer,userDetailsReducer} from './reducers/userReducer'
import {orderCreateReducer,orderDetailsReducer,orderDeliverReducer,orderListMyReducer,orderListReducer} from './reducers/orderReducer'


const reducer=combineReducers({
    productList:productListReducer,
    productDetails:productDetailsReducer,
    productDelete: productDeleteReducer,
    productCreate: productCreateReducer,
    productUpdate: productUpdateReducer,

    cart: cartReducer,
    userLogin: userLoginReducer,
    userRegister:userRegisterReducer,
    usersList:userListReducer,
    userDelete: userDeleteReducer,
    userUpdate: userUpdateReducer,
    userDetails:userDetailsReducer,

    orderCreate: orderCreateReducer,
    oderDetails:orderDetailsReducer,
    orderDeliver: orderDeliverReducer,
    orderListMy:orderListMyReducer,
    orderList: orderListReducer,

    

})

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
    JSON.parse(localStorage.getItem('cartItems')) : []

const shippingAddressFromStorage = localStorage.getItem('shippingAddress') ?
    JSON.parse(localStorage.getItem('shippingAddress')) : {}


const userInfoFromStorage = localStorage.getItem('userInfo') ?
    JSON.parse(localStorage.getItem('userInfo')) : null
const initalstate={
    cart: {
        cartItems: cartItemsFromStorage,
        shippingAddress: shippingAddressFromStorage,
    },
    userLogin: { userInfo: userInfoFromStorage }
}

const middleWare =[thunk]

const store=createStore(reducer,initalstate,composeWithDevTools(applyMiddleware(...middleWare)))



export default store