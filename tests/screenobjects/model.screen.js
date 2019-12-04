import AppScreen from './app.screen';

const SELECTORS = {    
    GT: '~GT',
    MITO: '~MiTo'
};

class ModelScreen extends AppScreen {
    constructor () {
        super(SELECTORS.GT);
    }

    get gt () {
        return $(SELECTORS.GT);
    }

    get mito () {
        return $(SELECTORS.MITO);
    }
}

export default new ModelScreen();
