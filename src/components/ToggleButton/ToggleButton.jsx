import { StyledInput, StyledLabel } from './toggleButton.styles';

const ToggleButton = ({ action, selector }) => {
	return (
		<>
			<StyledInput
				type='checkbox'
				id={selector}
				value=''
				onChange={event => action(event, selector)}
				hidden
			/>
			<StyledLabel htmlFor={selector}></StyledLabel>
		</>
	);
};

export default ToggleButton;
