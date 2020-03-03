import React from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from '../actions/index';
import { useFormik } from 'formik';
import { Input, Label, Segment, Button } from 'semantic-ui-react';
import * as Yup from 'yup';
import history from '../history';

const NewItem = () => {
	const dispatch = useDispatch();

	const { values, errors, touched, handleChange, handleSubmit } = useFormik({
		initialValues: { name: '', price: 0 },
		validationSchema: Yup.object().shape({
			name: Yup.string().required('Required'),
			price: Yup.number().positive('Price must be positive').required('Required')
		}),
		onSubmit: (values) => {
			dispatch(addItem(values));
		}
	});

	const { name, price } = values;

	return (
		<div>
			<h2>Add new item</h2>
			<Segment inverted className="addSegment">
				<Input labelPosition="right" type="text" placeholder="Amount">
					<Label>
						Name:
						<br />
						<div>
							<Input id="name-id" name="name" type="name" value={name} onChange={handleChange} />
							{touched.name && errors.name && <p>{errors.name}</p>}
						</div>
					</Label>
					<Label>
						Price:
						<br />
						<div>
							<Input id="price-id" name="price" type="number" value={price} onChange={handleChange} />
							{touched.price && errors.price && <p>{errors.price}</p>}
						</div>
					</Label>
				</Input>
				<Button primary floated="right" onClick={() => handleSubmit()}>
					Add
				</Button>
				<Button
					className="backBtn"
					positive
					floated="right"
					onClick={() => history.push('/')}
					style={{ position: 'relative', bottom: '35px', width: '68px' }}
				>
					Back
				</Button>
			</Segment>
		</div>
	);
};

export default NewItem;
