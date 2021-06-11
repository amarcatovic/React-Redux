import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';

import { useHistory } from "react-router-dom";
import { useDispatch } from 'react-redux';
import * as carActions from '../actions/cars';

const Home = () => {
  const history = useHistory();
  const [carName, setCarName] = useState('');
  const dispatch = useDispatch();

  const addCar = _ => {
    dispatch(carActions.addCar(carName));
    setCarName('');
  }

  const addCarName = (e) => {
    const value = e.target.value;
    setCarName(value);
  }

  const carsRoute = () =>{ 
    let path = `cars`; 
    history.push(path);
  }

  const loginRoute = () =>{ 
    let path = `login`; 
    history.push(path);
  }

  return (
    <div>
      <Container>
        <Form.Group controlId="car">
          <Form.Label>Car</Form.Label>
          <Form.Control type="text" placeholder="Enter car name" value={carName} onChange={addCarName} />
        </Form.Group>
        <Button variant="success" type="submit" onClick={addCar}>
          Enter
        </Button>{' '}

        <Button variant="warning" onClick={carsRoute}>
          See Cars
        </Button>{' '}
        <Button variant="warning" onClick={loginRoute}>
          Login Page
        </Button>{' '}
      </Container>
    </div> 
  );
}

export default Home;