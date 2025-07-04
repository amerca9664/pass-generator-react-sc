import { INCLUDE_DATA } from "./includeButtonData";

const randomNum = (max, min) =>
	Math.floor(Math.random() * (max + 1 - min) + min);

const FuncShowText = (valueLength, setShowTextValue) => {
	const filterStringPrev = INCLUDE_DATA.filter(item => item.state === true);

	const initialValue = '';
	const stringOrder = filterStringPrev.reduce(
		(accumulator, currentValue) => accumulator + currentValue.string,
		initialValue
	);
	let stringDisorder = '';
	for (let i = 0; i < valueLength; i++) {
		const numerChartSelect = randomNum(stringOrder.length - 1, 0);
		stringDisorder += stringOrder.charAt(numerChartSelect);
	}
	console.log(stringDisorder);
	setShowTextValue(stringDisorder);
};

const enableButton = (event, selector, setButtonState) => {


    INCLUDE_DATA.forEach(item => {
        if (item.selector === selector) {
            item.state = event.target.checked;
        }
    });

    const disableButton = !INCLUDE_DATA.some(item => item.state === true);

    setButtonState(disableButton);
};

export {enableButton, FuncShowText}