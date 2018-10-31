import mq from 'mithril-query';
import m from 'mithril';
import _ from 'underscore';
import h from '../../src/h';
import userSettingsAddress from '../../src/c/user-settings-address';

describe('UserSettingsAddress', () => {
    let $output;
    
    const 
        fields = m.prop({
            owner_document: m.prop('12345678912'),
            name: m.prop('USER NAME'),
            state_inscription: m.prop('123123123'),
            address: m.prop({
                country_id: 36,
                state_id: 1,
                address_street: 'Praça da Alfândega',
                address_number: '123',
                address_complement: 'complement',
                address_neighbourhood: 'neightbourhood',
                address_city: 'city',
                address_state: 'state',
                address_zip_code: '90010150',
                phone_number: '1234567890'
            }),
            birth_date: m.prop('01/12/1990'),
            account_type: m.prop('pf')
        }),
        parsedErrors = {
            hasError: function(name) {
                return false;
            },
            inlineError: function(name) {
                return false;
            }
        };

    describe('view', () => {

        beforeAll(() => {
            $output = mq(m(userSettingsAddress, { fields, parsedErrors }));
        });

        it('should contains zip code entry', () => {
            expect($output.find('a.fontsize-smallest.alt-link.u-right').length == 1).toBeTrue();
        });
    });
});
