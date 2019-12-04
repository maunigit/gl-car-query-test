import AppScreen from './app.screen';

const SELECTORS = {    
    T_1400_TB: '~1.4 TB 16V'
};

class TrimScreen extends AppScreen {
    constructor () {
        super(SELECTORS.T_1400);
    }

    get t1400tb () {
        return $(SELECTORS.T_1400_TB);
    }
}

export default new TrimScreen();
