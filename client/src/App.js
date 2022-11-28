import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import Landing from './components/layout/Landing';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Alert from './components/layout/Alert';
//Redux
import { Provider } from 'react-redux';
import store from './store';
import { loadUser } from './actions/auth';
import setAuthToken from './utils/setAuthToken';
import './App.css';

if (localStorage.token) {
    setAuthToken(localStorage.token);
}

const App = () => {

    useEffect(() => {
        store.dispatch(loadUser());
    },[]);

    return (
        <Provider store={store}>
            <Router>
                <Navbar />
                <Alert />
                <Routes>
                    <Route exact path='/' element={<Landing />}></Route>
                    <Route exact path='/Login' element={<Login />}></Route>
                    <Route exact path='/Register' element={<Register />}></Route>

                    {/* <Route exact path='/update' element={<Update />}>
                            <Route path = "courses" element={<herm/>}/>
                     </Route> */}
                    {/* <Route exact path="/hey" element={<Navigate replace to = "/update" />}></Route> */}
                </Routes>
            </Router>
        </Provider>
    );
}
export default App;