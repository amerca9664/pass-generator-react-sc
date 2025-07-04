import { StyledButton } from './button.styles';

const Button = ({
	valueLength,
	buttonState,
	action,
	setShowTextValue,
	children
}) => {
	return (
		<StyledButton
			onClick={() => action(valueLength, setShowTextValue)}
			disabled={buttonState}
		>
			{children}
		</StyledButton>
	);
};

export default Button;
