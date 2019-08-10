import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import Preloader from './Preloader/Preloader';
import Navbar from './Navbar/Navbar';
import './App.css';

const Login = lazy(()=>import('./Authentication/Login/Login'));
const Signup = lazy(()=>import('./Authentication/Signup/Signup'));
const CommentContainer = lazy(()=>import('./CommentContainer/CommentContainer'));

const App = ()=>{
    return (
        <div>
            <Router>
                <Navbar />
                <Container maxWidth="xl">
                    <Suspense fallback={<Preloader />}>
                        <Switch>
                            <Route exact path="/" component={CommentContainer} />
                            <Route path="/login" component={Login} />
                            <Route Path="/signup" component={Signup}/>
                        </Switch>
                    </Suspense>
                </Container>
            </Router>
        </div>
    )
}

export default App;