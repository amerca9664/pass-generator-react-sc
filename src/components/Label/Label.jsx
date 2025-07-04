import { StyledLabel } from './label.styles';

const Label = ({ size, children }) => {
	return <StyledLabel $size={size}>{children}</StyledLabel>;
};

export default Label;
