import AppScreen from './app.screen';

const SELECTORS = {
    MAKE: '~make',
    YEAR: '~year',
    MODEL: '~model',
    TRIM: '~trim',
    DETAILS_BUTTON: '~details',
    PRICE_BUTTON: '~price',
    RESET_BUTTON: '~reset'
};

class HomeScreen extends AppScreen {
    constructor () {
        super(SELECTORS.MAKE);
    }

    get make () {
        return $(SELECTORS.MAKE);
    }

    get year () {
        return $(SELECTORS.YEAR);
    }

    get model () {
        return $(SELECTORS.MODEL);
    }

    get trim () {
        return $(SELECTORS.TRIM);
    }

    get details () {
        return $(SELECTORS.DETAILS_BUTTON);
    }

    get price () {
        return $(SELECTORS.PRICE_BUTTON);
    }

    get reset () {
        return $(SELECTORS.RESET_BUTTON);
    }

}

export default new HomeScreen();
