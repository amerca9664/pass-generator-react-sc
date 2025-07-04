import { StyledShowText } from './showText.styles';

const ShowText = ({ children }) => {
	return (
		<StyledShowText
			placeholder='P4$5W0RD!'
			value={children}
			readOnly
		></StyledShowText>
	);
};

export default ShowText;
