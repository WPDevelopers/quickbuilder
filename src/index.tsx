import React from "react";
import ReactDOM from "react-dom";
import { __ } from "@wordpress/i18n";
import FormBuilder from "./form-builder";
import builder from "./form-builder/config/default";

(function () {
    const App = () => {
        return <FormBuilder {...builder} />;
    };
    ReactDOM.render(<App />, document.getElementById("root"));
})();
