/**
 * @file
 * Setup values for gulpfile.js.
 */

// -----------------------------------------------------------------------------
// PATHS.
// NOTE: relative paths are relative from gulpfile.js' location.

const paths = {
    source: {
        // Paths relative to the gulpfile. No trailing slash!
        frontendLibs: 'libraries-frontend/node_modules',
        customLibs:   'src/libs-custom',
        scss:         'src/scss',
        customJs:     'src/js'
    },
    output: {
        // Paths relative to the gulpfile. No trailing slash!
        css:        'build/css',
        js:         'build/js'
    },
    web: {
        // Use leading slash, but not trailing slash!
        // When used wrapped with the "anypage" project.
        toGulpfile: '/anypage/public/themes/theme-seed'
    }
};

// -----------------------------------------------------------------------------
// Options.

const options = {
    // Cleaning deletes earlier instances of built files before writing new ones.
    cleaning: {
        enabled: true,
        verbose: false,
        delOpts: {
            dryrun: false
        }
    },
    sourcemaps: {
        sass: {
            'sourceMappingURLPrefix': paths.web.toGulpfile + '/' + paths.output.css
        },
        js: {
            'sourceMappingURLPrefix': paths.web.toGulpfile + '/' + paths.output.js
        }
    },
    sass: {
        // Note that options from
        // https://github.com/sass/node-sass/blob/master/README.md may also apply.
        //
        // See https://web-design-weekly.com/2014/06/15/different-sass-output-styles/
        // nested || expanded || compact || compressed
        outputStyle: 'expanded',
        includePaths: [
            paths.source.frontendLibs + '/normalize.css',
            paths.source.frontendLibs + '/prismjs/themes'
        ]
    },
    autoprefixer: {
        // https://github.com/postcss/autoprefixer#options
        // https://github.com/ai/browserslist#queries
        browsers: ['last 2 versions', 'ie >= 11', 'and_chr >= 2.3'],
        flexbox:  'no-2009',
        cascade:  true
    },
    uglify: {
        mangle: false
    },
    livereload: {
        start: true,
        quiet: true
    },
    reloadOn: {
        // NOTE: for pathToWatch, use a path relative to gulpfile.js.
        css: {
            reloadEnabled: true,
            pathToWatch: [
                '../../app-assets/**/*.css' // Path when used with the Anypage project.
            ]
        },
        html: {
            reloadEnabled: false,
            pathToWatch:   '**/*.html'
        },
        php: {
            reloadEnabled: true,
            // Paths when used with the Anypage project.
            pathToWatch: [
                '../../../index.php',
                '../../../private/anypages/**/*.php',
                '../../../private/app/**/*.php',
                '../../../private/config/**/*.php'
            ]
        },
        twig: {
            reloadEnabled: true,
            // Path when used with the Anypage project.
            pathToWatch:   '../../../private/anypages/templates/**/*.twig'
        },
        svg: {
            reloadEnabled: false,
            pathToWatch:   '**/*.svg'
        },
        md: {
            reloadEnabled: true,
            // Path when used with the Anypage project.
            pathToWatch:   '../../../private/anypages/**/*.md'
        }
    }
};


// -----------------------------------------------------------------------------
// Js bundle definitions.

const jsBundles = {
    libs: {
        filename: 'libs',
        files: [
            paths.source.frontendLibs + '/jquery/dist/jquery.js'
        ]
    },
    styleguide: {
        filename: 'styleguide',
        files: [
            paths.source.frontendLibs + '/prismjs/prism.js'
        ]
    },
    custom: {
        filename: 'custom',
        files: [
            paths.source.customJs + '/custom-script-1.js',
            paths.source.customJs + '/custom-script-2.js'
        ]
    }
};

module.exports = {
    paths,
    options,
    jsBundles
};
