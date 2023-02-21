import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropType from 'prop-types';

const CardExample = (props) => {
  return (
    <Card style={{ width: '18rem' }} className="text-center">
      <Card.Img variant="top" src={props.imageUrl} />
      <Card.Body>
        <Card.Title>
			{props.title}
		</Card.Title>
        <Card.Text>
			{props.description}
        </Card.Text>
      </Card.Body>
	  <Card.Footer style={{ background: '#ffffff' }}>
        	<Button variant="primary" href={props.Button}>Find Out More!</Button>
		</Card.Footer>
    </Card>
  );
}

CardExample.propTypes = {
	imageUrl: PropType.string,
	title: PropType.string,
	description: PropType.string,
	buttonHref: PropType.string
}

export default CardExample;
