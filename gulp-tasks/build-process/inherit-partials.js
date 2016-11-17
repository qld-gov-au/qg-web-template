module.exports = function (gulp, plugins, config) {
    return () => {
        config.projects.map( (element) => {
            var src = [],
                basepath = [],
                files = [];

            if(config.inherit[element] !== undefined){
                files = (config.inherit[element].files !== undefined)? config.inherit[element].files: null;   
                if (config.inherit[element].inheritAll === true) {
                    basepath = [`${config.basepath.src}core/assets/_components/includes/**/*.html`]
                }
                if (files !== null  && files.length > 0) {
                    if (!Array.isArray(files)) {
                        // Fix errors in configuration
                        files = [files];
                    }
                } else {
                    files = [];
                }
            }
            // for (var i=0, len = files.length; i < len; i++) {
            //     // Isolate files
            //     files[i] = `${config.basepath.src}${element}/${files[i]}`;
            // }
            src = basepath.concat(files);
            
            return gulp.src(src, { dot: true })
                .pipe(gulp.dest(`${config.basepath.build}${element}/assets/includes/`));
        });
    };
};
