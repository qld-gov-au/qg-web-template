var testsContext = require.context('./src/assets/modules', true, /-test\.js$/);
testsContext.keys().forEach(testsContext);

var srcContext = require.context('./src/assets/modules', true, /^((?!__tests__).)*.js$/);
srcContext.keys().forEach(srcContext);
