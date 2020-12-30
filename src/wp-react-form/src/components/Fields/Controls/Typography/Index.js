import React, { useState } from "react";
import "./typography.scss";

function Index({ label }) {
	return (
		<>
			<div className={`wprf-typography-wrap`}>

                <div className="wprf-typography-trigger">
                    { label }
                </div>    

            </div>
		</>
	);
}

export default Index;
