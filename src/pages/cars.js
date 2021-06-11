import { useSelector } from 'react-redux';
import { useHistory } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CarList from './cars-list';
import LoginLog from './loginLog';

const Cars = () => {
    const history = useHistory();
    const cars = useSelector(state => state.cars.cars);
    const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

    const routeChange = () =>{ 
        let path = `/`; 
        history.push(path);
      }

    return (
        <div>
            {isLoggedIn ? (<CarList />) : <LoginLog />}
            <Button variant="warning" onClick={routeChange}>Go Back...</Button>{' '}
        </div>
    )
}

export default Cars;