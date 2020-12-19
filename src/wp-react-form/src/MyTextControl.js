import { TextControl } from "@wordpress/components";
import { withState } from "@wordpress/compose";

const MyTextControl = withState({
	name: "",
})((props) => (
	<>
		{console.log(props)}
		<TextControl
			label="Additional CSS Class"
			value={props.name}
			onChange={(name) => props.setState({ name })}
		/>
	</>
));

export default MyTextControl;
