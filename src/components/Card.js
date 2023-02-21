import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import PropType from 'prop-types';

const CardExample = (props) => {
  return (
	<div className='col-12 col-sm-3 overlay-text d-flex justify-content-center mb-4 p-2'>
		<Card className='col-10 col-sm-12 text-center'>
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
	</div>
  );
}

CardExample.propTypes = {
	imageUrl: PropType.string,
	title: PropType.string,
	description: PropType.string,
	buttonHref: PropType.string
}

export default CardExample;
