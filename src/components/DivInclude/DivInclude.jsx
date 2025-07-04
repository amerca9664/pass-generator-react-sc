import { FONT_SIZES } from '../../styles/fontSize';
import BackgroundCont from '../BackgroundCont/BackgroundCont';
import Label from '../Label/Label';
import ToggleButton from '../ToggleButton/ToggleButton';

const DivInclude = ({ setButtonState, action, selector, children }) => {
	return (
		<BackgroundCont>
			<Label letterSpace='normal' size={FONT_SIZES.includeButtonsDesktop}>
				{children}
			</Label>
			<ToggleButton
				action={action}
				selector={selector}
				setButtonState={setButtonState}
			></ToggleButton>
		</BackgroundCont>
	);
};

export default DivInclude;
