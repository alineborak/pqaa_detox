import { Given, When, Then, setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(120 * 1000);

// Match by ID
Given ('I tap on Counters by ID', async () => {
    await element(by.id('homeSectionText-counters')).tap();
});

When ('I tap on the Water Counter by ID', async () => {
    await element(by.id('counterButtons-waterCounter')).tap();
});

When ('I tap on the Electricity Counter by ID', async () => {
    await element(by.id('counterButtons-electricityCounter')).tap();
});

When ('I tap on the Gas Counter by ID', async () => {
    await element(by.id('counterButtons-gasCounter')).tap();
});

When ('I tap on the Broadband Counter by ID', async () => {
    await element(by.id('counterButtons-broadbandCounter')).tap();
});

// Match by TEXT
Given('I tap on the Counters section by text', async () => {
    await element(by.text('Counters')).tap();
});

When('I tap on the Water counter by text', async () => {
    await element(by.text('WATER COUNTER')).tap();
});

When('I tap on the Electricity section by text', async () => {
    await element(by.text('ELECTRICITY COUNTER')).tap();
});

When('I tap on the Gas counter section by text', async () => {
    await element(by.text('GAS COUNTER')).tap();
});

When('I tap on the Broadband counter section by text', async () => {
    await element(by.text('BROADBAND COUNTER')).tap();
});

