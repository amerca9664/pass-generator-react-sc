import { StyledRange } from './rangeButton.styles';

const RangeButton = ({ step, min, max, valueLength, setValueLength }) => {
	return (
		<StyledRange
			type='range'
			value={valueLength}
			onChange={event => variableRangeBar(event, setValueLength)}
			step={step}
			min={min}
			max={max}
		/>
	);
};

const variableRangeBar = (event, setValueLength) => {
	const valueRangeButton = event.target.value;
	setValueLength(valueRangeButton);
};

export default RangeButton;
