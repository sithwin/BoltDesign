import { NbprModule } from './nbpr.module';

describe('NbprModule', () => {
    let formModule: NbprModule;

    beforeEach(() => {
        formModule = new NbprModule();
    });

    it('should create an instance', () => {
        expect(formModule).toBeTruthy();
    });
});
