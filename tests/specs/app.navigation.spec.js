import HomeScreen from '../screenobjects/home.screen';
import MakeScreen from '../screenobjects/make.screen';
import YearScreen from '../screenobjects/year.screen';
import ModelScreen from '../screenobjects/model.screen';
import TrimScreen from '../screenobjects/trim.screen';

describe('WebdriverIO and Appium, navigating with Home elements,', () => {
    it('should be able to select Alfa Romeo', () => {
        HomeScreen.make.waitForDisplayed(20000);
        expect(HomeScreen.make.getTagName()).toEqual('make');
        HomeScreen.make.click();
        MakeScreen.alfaromeo.waitForDisplayed(20000);
        expect(MakeScreen.alfaromeo.getTagName()).toEqual('Alfa Romeo');
        MakeScreen.alfaromeo.click();
    });
    it('should be able to select 2010', () => {
        HomeScreen.year.waitForDisplayed(20000);
        expect(HomeScreen.year.getTagName()).toEqual('year');
        HomeScreen.year.click();
        YearScreen.year2010.waitForDisplayed(20000);
        expect(YearScreen.year2010.getTagName()).toEqual('2010');
        YearScreen.year2010.click();
    });
    it('should be able to select MiTo', () => {    
        HomeScreen.model.waitForDisplayed(20000);
        expect(HomeScreen.model.getTagName()).toEqual('model');
        HomeScreen.model.click();   
        ModelScreen.mito.waitForDisplayed(20000);
        expect(ModelScreen.mito.getTagName()).toEqual('MiTo');
        ModelScreen.mito.click();
    });
    it('should be able to select 1.4 TB 16V', () => {  
        HomeScreen.trim.waitForDisplayed(20000);
        expect(HomeScreen.trim.getTagName()).toEqual('trim');
        HomeScreen.trim.click();
        TrimScreen.t1400tb.waitForDisplayed(20000);
        expect(TrimScreen.t1400tb.getTagName()).toEqual('1.4 TB 16V');
        TrimScreen.t1400tb.click();
    });
    it('should be able to open Details', () => {  
        HomeScreen.details.waitForDisplayed(20000);
        expect(HomeScreen.details.getTagName()).toEqual('details');
        HomeScreen.details.click();
        driver.pause(3000);
        driver.back();
    });
    it('should be able to open Price (no chart for this config)', () => {  
        HomeScreen.price.waitForDisplayed(20000);
        expect(HomeScreen.price.getTagName()).toEqual('price');
        HomeScreen.price.click();
        driver.pause(3000);
        driver.back();
    });
    it('should be able to Reset', () => {
        HomeScreen.reset.waitForDisplayed(20000);
        expect(HomeScreen.reset.getTagName()).toEqual('reset');
        HomeScreen.reset.click();
        driver.pause(1000);
    });
});