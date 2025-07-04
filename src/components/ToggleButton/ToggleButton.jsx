import { StyledInput, StyledLabel } from './toggleButton.styles';

const ToggleButton = ({ setButtonState, action, selector }) => {
	return (
		<>
			<StyledInput
				type='checkbox'
				id={selector}
				value=''
				onChange={event => action(event, selector, setButtonState)}
				hidden
			/>
			<StyledLabel htmlFor={selector}></StyledLabel>
		</>
	);
};

export default ToggleButton;
