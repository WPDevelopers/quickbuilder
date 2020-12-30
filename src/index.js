import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { __ } from "@wordpress/i18n";
import WPReactForm from "./wp-react-form";
// import axios from "axios";
import { builder } from "./wp-react-form/config";

(function () {
	const App = () => {
		return <WPReactForm config={builder} />;
	};
	ReactDOM.render(<App />, document.getElementById("root"));
})();
