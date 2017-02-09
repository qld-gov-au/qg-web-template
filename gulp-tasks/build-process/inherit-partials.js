module.exports = function (gulp, plugins, config, es) {
    return () => {
        function fmt(int) {
            // Format date
            return ('0' + int).slice(-2);
        }
        config.projects.map( (element) => {
            var d = new Date();
            var timestamp = `${d.getFullYear()}-${fmt(d.getMonth())}-${fmt(d.getDay())} ${fmt(d.getHours())}:${fmt(d.getMinutes())}:${fmt(d.getSeconds())}`;
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
            files.push('!**/_DELETE.*/*.html', '!**/_DELETE.*/');
            src = basepath.concat(files);

            return gulp.src(src, { dot: true })
                    .pipe(plugins.replace(/<!-- GLUE .* Build Date: .* -->/, `<!-- ${config.phase} Build Date: ${timestamp} -->`))
                    .pipe(gulp.dest(`${config.basepath.build}${element}/assets/includes/`))
                    .on('end', () =>{
                        gulp.src(`${config.basepath.src}${element}/assets/_components/includes/**/*.html`, { dot: true })
                        .pipe(gulp.dest(`${config.basepath.build}${element}/assets/includes/`))
                    });
        });
    };
};
