import { useSelector } from 'react-redux';
import Card from 'react-bootstrap/Card';

const CarList = () => {
    const cars = useSelector(state => state.cars.cars);

    return (
        <div>
            {cars.map((car, index) => {
                return (
                    <Card>
                        <Card.Body>{car}</Card.Body>
                    </Card>
                )
            })}
        </div>
    )
}

export default CarList;