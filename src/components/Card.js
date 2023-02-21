import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropType from 'prop-types';

const CardExample = (props) => {
  return (
    <Card style={{ width: '18rem' }} className="text-center">
      <Card.Img variant="top" src={props.imageUrl} />
      <Card.Body>
        <Card.Title>
			Card Title
		</Card.Title>
        <Card.Text>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit,
			sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </Card.Text>
      </Card.Body>
	  <Card.Footer style={{ background: '#ffffff' }}>
        	<Button variant="primary">Find Out More!</Button>
		</Card.Footer>
    </Card>
  );
}

CardExample.propTypes = {
	imageUrl: PropType.string,
}

export default CardExample;
