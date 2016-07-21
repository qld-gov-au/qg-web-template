module.exports = function (gulp, plugins, config) {
    return function () {
        var tasks = config.projects.map(function (element, index, array) {
            return gulp.src(config.src.js()+config.projects[index]+'/assets/js/main.js').pipe(plugins.webpack({
                output: {
                    filename: 'main.js'
                },
                devtool: 'source-map',
                module: {
                    loaders: [
                        {
                            test: /\.js$/,
                            exclude: /(node_modules)/,
                            loader: 'babel',
                            query: {
                                presets: ['es2015']
                            }
                        }
                    ]
                }
            }))
                .pipe(gulp.dest(config.build.js()+config.projects[index]+'/assets/'+config.version+'/js/'));
        });
        return tasks;
    };

    // return function () {
    //     gulp.src(config.src.js()+'/main.js').pipe(plugins.webpack({
    //         output: {
    //             filename: 'main.js'
    //         },
    //         devtool: 'source-map',
    //         module: {
    //             loaders: [
    //                 {
    //                     test: /\.js$/,
    //                     exclude: /(node_modules)/,
    //                     loader: 'babel',
    //                     query: {
    //                         presets: ['es2015']
    //                     }
    //                 }
    //             ]
    //         }
    //     }))
    //         .pipe(gulp.dest(config.build.js()));
    // };
};

// module.exports = function (gulp, plugins, config) {
//     return function () {
//         var tasks = config.franchise.map(function (element, index, array) {
//             return gulp.src([config.basepath.build+'swe/**/*' ,
//                 '!'+config.build.assets()+'{'+config.version+','+config.version+'/**}'
//             ])
//                 .pipe(gulp.dest(config.basepath.release+config.franchise[index]));
//         });
//         return tasks;
//     };
// };