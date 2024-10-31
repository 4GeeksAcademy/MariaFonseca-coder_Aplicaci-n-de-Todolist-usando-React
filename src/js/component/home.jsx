import React from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	return (
		<div className="text-center">
			<ul class="list-group">
				<li class="list-group-item">An item</li>
				<li class="list-group-item">A second item</li>
				<li class="list-group-item">A third item</li>
				<li class="list-group-item">A fourth item</li>
				<li class="list-group-item">And a fifth one</li>
			</ul>
		</div>
	);
};

export default Home;
