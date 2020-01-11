import React, {useState, useEffect} from "react";
import { Link } from "react-router-dom";

import ItemEntry from '../../components/ItemEntry/ItemEntry';

function EventItems(props) {
	let m_eventName = "Sbhacks event";
	let m_date = 12262004;
	let m_dateString = toString(m_date);
	const [items, setItems] = useState([]);
	useEffect(() => {
		setItems([
			{ name: "yerba", itemNum: 1, present: 1 },
			{ name: "mate", itemNum: 2, present: 0},
		]);
	}, []);
	const i = items.map(
		(item) => {
			return <ItemEntry itemName={item.name} itemNum={item.itemNum} present = {item, item.present} />;
		}
	);

	return (
		<div className m_eventName>
			<header className m_dateString>
				
				{i}
			
				<Link to="/myevents">Back</Link>
			
			</header>
		</div>
		
			
	);
}

export default EventItems;
