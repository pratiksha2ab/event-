import '../styles/globals.css'
import 'antd/dist/antd.css';
import {AuthContext} from '../utils/authcontext';
import Header from '../Components/Header';

function MyApp({ Component, pageProps }) {
  return <AuthContext> <Header/> <Component {...pageProps} /></AuthContext> 
}

export default MyApp
