import HomeScreen from '../screenobjects/home.screen';
import MakeScreen from '../screenobjects/make.screen';

describe('WebdriverIO and Appium, interacting with Home elements,', () => {
    it('should be able to swipe Make list two times and choose Mercedes-Benz', () => {
        HomeScreen.make.waitForDisplayed(20000);
        expect(HomeScreen.make.getTagName()).toEqual('make');
        HomeScreen.make.click();
        driver.pause(3000);
        MakeScreen.abarth.waitForDisplayed(20000);
        expect(MakeScreen.abarth.getTagName()).toEqual('Abarth');
        driver.touchAction([
            {action: 'press', element: MakeScreen.ascari},
            {action: 'wait', ms: 1000},
            {action: 'moveTo', element: MakeScreen.abarth},
            'release'
        ]);
        MakeScreen.bmw.waitForDisplayed(20000);
        expect(MakeScreen.bmw.getTagName()).toEqual('BMW');
        MakeScreen.avanti.waitForDisplayed(20000);
        expect(MakeScreen.avanti.getTagName()).toEqual('Avanti');
        driver.touchAction([
            {action: 'press', element: MakeScreen.bmw},
            {action: 'wait', ms: 1000},
            {action: 'moveTo', element: MakeScreen.avanti},
            'release'
        ]);
        MakeScreen.bmw.click();
        driver.pause(3000);
    });
});