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
import { enableButton, FuncShowText } from '../funcions';

const Content = () => {
	const [valueLength, setValueLength] = useState(
		RANGE_CONFIG_BUTTON.defaultVal
	);

	const [buttonState, setButtonState] = useState(true);

	const [showTextValue, setShowTextValue] = useState('');
	return (
		<>
			<ShowText>{showTextValue}</ShowText>

			<StyledDiv>
				<Label letterSpace='4px' size={FONT_SIZES.includeButtonsDesktop}>
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
			{INCLUDE_DATA.map(item => (
				<DivInclude
					key={item.id}
					action={enableButton}
					selector={item.selector}
					setButtonState={setButtonState}
				>
					{item.title}
				</DivInclude>
			))}

			<Button
				valueLength={valueLength}
				buttonState={buttonState}
				action={FuncShowText}
				setShowTextValue={setShowTextValue}
			>
				Generate Password
			</Button>
		</>
	);
};

export default Content;
