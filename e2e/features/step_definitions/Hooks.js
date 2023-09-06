import { BeforeAll, Before, AfterAll } from "@cucumber/cucumber";
import { init, cleanup } from "detox/internals";

// This will make sure to set a time for the app to start
BeforeAll({ timeout: 60 * 1000 }, async () => {
    await init();
})

// This will make sure every time that we start a new scenario, we're really installing the app
Before(async () => {
    await device.launchApp({ newInstance: true });
})

// This will clean up our execution after the end of the test run
AfterAll(async () => {
    await cleanup();
})
