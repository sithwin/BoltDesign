import { ReferralModule } from './referral.module';

describe('ReferralModule', () => {
    let referralModule: ReferralModule;

    beforeEach(() => {
        referralModule = new ReferralModule();
    });

    it('should create an instance', () => {
        expect(referralModule).toBeTruthy();
    });
});
