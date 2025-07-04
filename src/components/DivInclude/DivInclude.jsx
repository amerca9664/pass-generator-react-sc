import BackgroundCont from '../BackgroundCont/BackgroundCont';
import Label from '../Label/Label';
import ToggleButton from '../ToggleButton/ToggleButton';

const DivInclude = ({ action, selector, children }) => {
	return (
		<BackgroundCont>
			<Label>{children}</Label>
			<ToggleButton action={action} selector={selector}></ToggleButton>
		</BackgroundCont>
	);
};

export default DivInclude;
