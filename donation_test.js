const data = require('./data.js');
const {
    ELEMENT_TIMEOUT
} = data;
const person = data.seabassTabasco;

Feature('donation');

Scenario('test something', (I) => {
//  I.wait(10);
    I.amOnPage('http://localhost:8080');
    I.wait(1);
    I.see('Enter your username and password to sign in');
    I.click('Test Login (John Doe)');
    I.wait(2);
    I.click('Donation Form', '//*[@id="content"]/div/div/div/div/a[5]');
    I.wait(3);
    I.see('Donate Now!');
    I.fillField('firstName', person.firstName);
    I.fillField('lastName', person.lastName);
    I.fillField('emailAddress', person.emailAddress);
    I.fillField('contactNumber', person.contactNumber);
    I.fillField('address1', person.street);
    I.fillField('address2', person.apt);
    I.fillField('city', person.city);
//    I.click('//*[@id="createPerson"]/fieldset/div[8]/div/span/span[1]/span');
//    I.fillField('/html/body/span/span/span[1]/input', 'CO');
    I.selectOption('stateProvinceGeoId', person.state);
//    I.fillField('stateProvinceGeoId', person.state);
    I.fillField('postalCode', person.zip);
    I.fillField('amount', person.amount);
    I.fillField('cardNumber', person.cardNumber);
    I.fillField('expireDate', person.exp);
    I.fillField('cardSecurityCode', person.cvv);
    I.click('Submit');
    I.wait(10);
    I.see('Successful');
});

