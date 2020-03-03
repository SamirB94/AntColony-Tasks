import React, { useEffect } from 'react';

import { useParams } from 'react-router';
import { useDispatch } from 'react-redux';
import { deleteItem, getItem } from '../actions/index';

import { Button } from 'semantic-ui-react';
import Modal from './modal/modal';
import history from '../history';

const DeleteItem = () => {
	const dispatch = useDispatch();
	const { id } = useParams();
	useEffect(
		() => {
			dispatch(getItem(id));
		},
		[ id, dispatch ]
	);

	const renderActions = () => {
		return (
			<React.Fragment>
				<Button negative onClick={() => dispatch(deleteItem(id))}>
					Delete
				</Button>
				<Button positive onClick={() => history.push('/')}>
					Cancel
				</Button>
			</React.Fragment>
		);
	};

	return (
		<Modal
			content="Are you sure you want to delete this item?"
			actions={renderActions()}
			onDismiss={() => history.push('/')}
		/>
	);
};

export default DeleteItem;
