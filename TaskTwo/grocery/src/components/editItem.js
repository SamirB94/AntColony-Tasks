import React, { useEffect } from 'react';

import { useParams, useHistory } from 'react-router';
import { useDispatch } from 'react-redux';
import { editItem } from '../actions/index';
import { useFormik } from 'formik';
import { useSelector } from 'react-redux';
import { Input, Label, Segment, Button } from 'semantic-ui-react';
import * as Yup from 'yup';

export const EditItem = () => {
	let { id } = useParams();
	const dispatch = useDispatch();
	const history = useHistory();

	const { itemToUpdate, itemsList } = useSelector((state) => state.items);

	useEffect(
		() => {
			if (itemsList.length === 0) {
				history.push('/');
			}
		},
		[ itemsList, history ]
	);

	const { values, errors, touched, handleChange, handleSubmit } = useFormik({
		initialValues: itemToUpdate ? { name: itemToUpdate.name, price: itemToUpdate.price } : { name: '', price: 0 },
		validationSchema: Yup.object().shape({
			name: Yup.string().required('Required'),
			price: Yup.number().positive('Price must be positive').required('Required')
		}),
		onSubmit: (values) => {
			dispatch(editItem(id, values));
		}
	});

	return (
		<div>
			<h2 className="editTitle">Edit new item</h2>
			<Segment inverted className="editSegment">
				<Input labelPosition="right" type="text" placeholder="Amount">
					<Label>
						Name:
						<br />
						<div>
							<Input id="name-id" name="name" type="name" value={values.name} onChange={handleChange} />
							{touched.name && errors.name && <p>{errors.name}</p>}
						</div>
					</Label>
					<Label>
						Price:
						<br />
						<div>
							<Input id="price-id" name="price" type="number" value={values.price} onChange={handleChange} />
							{touched.price && errors.price && <p>{errors.price}</p>}
						</div>
					</Label>
				</Input>
				<Button
					primary
					floated="right"
					type="submit"
					onClick={() => {
						handleSubmit();
					}}
				>
					Update
				</Button>
				<Button className="backBtn" positive floated="right" onClick={() => history.push('/')} style={{}}>
					Back
				</Button>
			</Segment>
		</div>
	);
};

export default EditItem;
