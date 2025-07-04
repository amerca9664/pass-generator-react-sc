import { StyledLabel } from './label.styles';

const Label = ({ letterSpace, size, children }) => {
	return (
		<StyledLabel $letterSpace={letterSpace} $size={size}>
			{children}
		</StyledLabel>
	);
};

export default Label;
