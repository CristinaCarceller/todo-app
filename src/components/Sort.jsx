import { useState } from "react";

const Sort = (props) => {
	const [sortValue, setSortValue] = useState("");
	const { sort } = props;
	return (
		<>
			<select
				value={sortValue}
				onChange={(e) => {
					sort(e.target.value);
					setSortValue(e.target.value);
				}}
				name="sort"
				id="sort.id">
				<option value=""> - -</option>
				<option value="A-Z">A - Z</option>
				<option value="Z-A">Z - A</option>
			</select>
		</>
	);
};

export default Sort;
