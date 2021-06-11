import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import { useSelector, useDispatch } from 'react-redux';
import * as authActions from '../actions/auth';

const Login = () => {
    const history = useHistory();

    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);
    const dispatch = useDispatch();

    const routeChange = () =>{ 
        let path = `/`; 
        history.push(path);
    }

    const login = _ => {
        dispatch(authActions.logIn());
    }

    const logout = _ => {
        dispatch(authActions.logOut());
    }

    return (
        <div>
            {!isLoggedIn ? (<Button variant="success" onClick={login}>Login</Button>) : ''}
            {isLoggedIn ? (<Button variant="danger" onClick={logout}>Logout</Button>) : ''}
            <Button variant="warning" onClick={routeChange}>Go Back...</Button>{' '}
        </div>
    )
}

export default Login;