import Header from './components/Header'
import Footer from './components/Footer'
import MainScreen from './screens/MainScreen'
import HomeScreen from './screens/HomeScreen'
import HomeScreen1 from './screens/HomeScreen1'
import HomeScreen2 from './screens/HomeScreen2'
import ProductScreen from './screens/ProductScreen'
import CartScreen from './screens/CartScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ShippingScreen from './screens/ShippingScreen'
import PaymentScreen from './screens/PaymentScreen'
import PlaceOrderScreen from './screens/PlaceOrderScreen'
import OrderScreen from './screens/OrderScreen'
import ProfileScreen from './screens/ProfileScreen'
import UserListScreen from './screens/UserListScreen'
import UserEditScreen from './screens/UserEditScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'
import OrderListScreen from './screens/OrderListScreen'

import {Container} from 'react-bootstrap'
import {BrowserRouter as Router,Route,Routes} from 'react-router-dom'


function App() {
  return (
    <Router>
      
      <Header/>
      <main className='py-3'>
        <Container>
        <Routes>
        <Route path='/' element={<MainScreen />} exact />
        <Route path='Tech/product/' element={<HomeScreen />}  />
        <Route path='Fashion/product/' element={<HomeScreen1 />}  />
        <Route path='Food/product/' element={<HomeScreen2 />}  />
        <Route path='/product/:id' element={<ProductScreen />}  />
        <Route path='/cart/:id?' element={<CartScreen />}  />
        <Route path='/login' element={<LoginScreen />}  />
        <Route path='/register' element={<RegisterScreen/>} />
        <Route path='/shipping' element={<ShippingScreen/>} />
        <Route path='/payment' element={<PaymentScreen/>} />
        <Route path='/placeorder' element={<PlaceOrderScreen/>} />
        <Route path='/order/:id' element={<OrderScreen/>} />
        <Route path='/profile' element={<ProfileScreen/>} />
        <Route path='/admin/userlist' element={<UserListScreen/>} />
        <Route path='/admin/user/:id/edit' element={<UserEditScreen />} />
        <Route path='/admin/productlist' element={<ProductListScreen/>} />
        <Route path='/admin/product/:id/edit' element={<ProductEditScreen/>} />
        <Route path='/admin/orderlist' element={<OrderListScreen/>} />
        </Routes>
        </Container>
        
      </main>
      <Footer/>
    </Router>
  );
}

export default App;
