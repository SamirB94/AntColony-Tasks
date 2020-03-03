import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { itemsList, getItem } from '../actions/index';
import { Button, Icon, List, Segment } from 'semantic-ui-react';
import history from '../history';

const ItemsList = () => {
	const dispatch = useDispatch();

	const foundList = useSelector((state) => state.items.itemsList);

	useEffect(
		() => {
			dispatch(itemsList());
		},
		[ dispatch ]
	);

	const onCLickSetItem = (id) => {
		dispatch(getItem(id));
		history.push(`/edit/${id}`);
	};

	return (
		<div>
			<h2 className="lof">List of items</h2>
			<Segment className="lofsegment" inverted>
				<Button primary onClick={() => history.push('/add')}>
					Add
				</Button>

				{foundList &&
					foundList.map((item) => {
						const { id, name, price } = item;
						return (
							<List divided inverted relaxed verticalAlign="middle" key={id}>
								<List.Item>
									<List.Content floated="right">
										<Button positive onClick={() => onCLickSetItem(id)}>
											Edit
										</Button>
										<Button negative onClick={() => history.push(`/delete/${id}`)}>
											Delete
										</Button>
									</List.Content>
									<Icon name="clipboard outline" />
									<List.Content>
										{name} - {price} $
									</List.Content>
								</List.Item>
							</List>
						);
					})}
			</Segment>
		</div>
	);
};

export default ItemsList;
