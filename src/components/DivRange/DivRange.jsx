import { FONT_SIZES } from '../../styles/fontSize';
import BackgroundCont from '../BackgroundCont/BackgroundCont';
import Label from '../Label/Label';
import RangeButton from '../RangeButton/RangeButton';

const DivRange = ({ step, min, max, valueLength, setValueLength }) => {
	return (
		<>
			<BackgroundCont>
				<Label letterSpace='normal' size={FONT_SIZES.includeButtonsDesktop}>
					{min}
				</Label>
				<RangeButton
					valueLength={valueLength}
					setValueLength={setValueLength}
					step={step}
					min={min}
					max={max}
				></RangeButton>
				<Label size={FONT_SIZES.includeButtonsDesktop}>{max}</Label>
			</BackgroundCont>
		</>
	);
};

export default DivRange;
