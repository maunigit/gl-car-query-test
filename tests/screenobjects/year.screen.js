import AppScreen from './app.screen';

const SELECTORS = {    
    Y_2019: '~2019',
    Y_2010: '~2010'
};

class YearScreen extends AppScreen {
    constructor () {
        super(SELECTORS.Y_2019);
    }

    get year2019 () {
        return $(SELECTORS.Y_2019);
    }

    get year2010 () {
        return $(SELECTORS.Y_2010);
    }
}

export default new YearScreen();
