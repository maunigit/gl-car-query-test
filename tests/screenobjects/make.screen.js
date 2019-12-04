import AppScreen from './app.screen';

const SELECTORS = {    
    ABARTH: '~Abarth',
    ALFA_ROMEO: '~Alfa Romeo',
    ASCARI: '~Ascari',
    AVANTI: '~Avanti',
    BMW: '~BMW'
};

class MakeScreen extends AppScreen {
    constructor () {
        super(SELECTORS.ABARTH);
    }

    get abarth () {
        return $(SELECTORS.ABARTH);
    }

    get alfaromeo () {
        return $(SELECTORS.ALFA_ROMEO);
    }

    get ascari () {
        return $(SELECTORS.ASCARI);
    }

    get avanti () {
        return $(SELECTORS.AVANTI);
    }

    get bmw () {
        return $(SELECTORS.BMW);
    }
}

export default new MakeScreen();
