var testsContext = require.context('./src/assets/modules', true, /-test\.js$/);
testsContext.keys().forEach(testsContext);
