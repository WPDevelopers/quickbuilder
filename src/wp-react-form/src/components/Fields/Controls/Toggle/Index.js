import React, { useState } from "react";
import "./toggle.scss";

function Index({ label, name, valule }) {

    const [checked, setChecked] = useState(valule || false );
    const handleChange = () => {
        setChecked(!checked);
    }

	return (
		<>
			<div
				className={`wprf-toggle-wrap ${
					checked ? "checked" : "not-checked"
				}`}
			>
				<label for={name}>
					{label}{" "}
					<input
						type="checkbox"
						id={name}
						name={name}
						onChange={() => handleChange()}
					/>
				</label>
			</div>
		</>
	);
}

export default Index;
