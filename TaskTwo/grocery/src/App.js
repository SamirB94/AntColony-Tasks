import React from 'react';
import ItemsList from './components/itemsList';
import NewItem from './components/newItem';
import EditItem from './components/editItem';
import DeleteItem from './components/deleteItem';
import { Router, Route, Switch } from 'react-router-dom';
import history from './history';

import './index.css';

function App() {
	return (
		<div>
			<Router history={history}>
				<div>
					<label className="header">WELCOME TO OUR GROCERY SHOP, YOU BUY WHAT YOU CREATE</label>
					<Switch>
						<Route path="/" exact component={ItemsList} />
						<Route path="/add" exact component={NewItem} />
						<Route path="/edit/:id" exact component={EditItem} />
						<Route path="/delete/:id" exact component={DeleteItem} />
					</Switch>
				</div>
			</Router>
		</div>
	);
}

export default App;
