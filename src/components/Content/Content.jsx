import { useState } from 'react';
import { FONT_SIZES } from '../../styles/fontSize';
import Button from '../Button/Button';
import DivInclude from '../DivInclude/DivInclude';
import DivRange from '../DivRange/DivRange';
import { INCLUDE_DATA } from '../includeButtonData';
import Label from '../Label/Label';
import ShowText from '../ShowText/ShowText';
import { StyledDiv } from './content.styles';
import { RANGE_CONFIG_BUTTON } from '../rangeButtonConfig';

const Content = () => {
	const [valueLength, setValueLength] = useState(
		RANGE_CONFIG_BUTTON.defaultVal
	);

	return (
		<>
			<ShowText></ShowText>

			<StyledDiv>
				<Label size={FONT_SIZES.includeButtonsDesktop}>
					LENGTH: {valueLength}
				</Label>
			</StyledDiv>
			<DivRange
				valueLength={valueLength}
				setValueLength={setValueLength}
				step={RANGE_CONFIG_BUTTON.step}
				min={RANGE_CONFIG_BUTTON.min}
				max={RANGE_CONFIG_BUTTON.max}
			></DivRange>
			{[...INCLUDE_DATA].map(item => (
				<DivInclude
					key={item.id}
					action={enableButton}
					selector={item.selector}
				>
					{item.title}
				</DivInclude>
			))}

			<Button></Button>
		</>
	);
};

const enableButton = (event, selector) => {
	console.log(selector + ' ' + event.target.checked);
};

export default Content;
