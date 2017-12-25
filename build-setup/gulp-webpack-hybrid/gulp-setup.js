/**
 * @file
 * Setup values for gulpfile.js.
 */


// #############################################################################
// PATHS.
// NOTE: relative paths are relative from gulpfile.js' location!

const paths = {
    source: {
        // No trailing slash!
        frontendLibs:   'libraries-frontend/node_modules',
        customLibs:     'src/libs-custom',
        scss:           'src/scss',
        customJs:       'src/js-oldschool',
        svgSprite:      'src/graphics/icons/svg'
    },
    output: {
        // No trailing slash!
        css:            'built/gulp-out/css',
        js:             'built/gulp-out/js',
        svgSprite:      'built/gulp-out/graphics/svg-sprite'
    },
    web: {
        // Use leading slash, but not trailing slash!
        // When used wrapped with the "anypage" project.
        toGulpfile:     '/anypage/public/themes/theme-seed'
    },
    // No trailing slash!
    svgSpriteConfigs:   'src/graphics/icons'
};


// #############################################################################
// OPTIONS.

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
        // NOTE: for pathsToWatch, use paths relative to gulpfile.js.
        css: {
            reloadEnabled: true,
            pathsToWatch: [
                '../../app-assets/**/*.css' // Path when used with the Anypage project.
            ]
        },
        html: {
            reloadEnabled: false,
            pathsToWatch:   '**/*.html'
        },
        php: {
            reloadEnabled: true,
            // Paths when used with the Anypage project.
            pathsToWatch: [
                '../../../index.php',
                '../../../private/anypages/**/*.php',
                '../../../private/app/**/*.php',
                '../../../private/config/**/*.php'
            ]
        },
        twig: {
            reloadEnabled: true,
            // Path when used with the Anypage project.
            pathsToWatch:   '../../../private/anypages/templates/**/*.twig'
        },
        svg: {
            reloadEnabled: false,
            pathsToWatch:   '**/*.svg'
        },
        md: {
            reloadEnabled: true,
            // Path when used with the Anypage project.
            pathsToWatch:   '../../../private/anypages/**/*.md'
        }
    },
    svgSprite: {
        // dest: "foobar-dir",
        // log: "debug",
        svg: {
            xmlDeclaration: false,
            doctypeDeclaration: false,
            dimensionAttributes: true,
            namespaceIDs: true
        },
        shape: {
            dimension: { maxWidth: 32, maxHeight: 32 },
            spacing: { padding: 1, box: 'icon' },
            align: paths.svgSpriteConfigs + '/svg-sprite-alignment.yaml',
            meta: paths.svgSpriteConfigs + '/svg-sprite-meta.yaml',
            transform: [
                {'svgo': {}}
            ],
        },
        mode: {
            css: {
                dest: ".",
                sprite: "svg-sprite.css-mode.svg",
                common: "svg-icon-sprite",
                prefix: "svg-icon-sprite__%s",
                layout: "vertical", // "vertical", "horizontal", "diagonal" or "packed"
                render: {
                    css: false
                    // css: { dest: "svg-sprite.css-mode.stylesheet.css" }
                },
                bust: false,
                example: {
                    dest: "svg-sprite.css-mode.inventory.html"
                }
            },
            symbol: {
                dest: ".",
                sprite: "svg-sprite.symbol-mode.svg",
                prefix: "svg-icon-sprite__%s",
                inline: true,
                bust: false
            }
        }
    }
};


// #############################################################################
// JS BUNDLE DEFINITIONS - the oldschool (pre-module-bundling) way.

const jsOldschoolBundles = {
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
            paths.source.customJs + '/svg-sprite-ajax.js',
            paths.source.customJs + '/custom-script-1.js',
            paths.source.customJs + '/custom-script-2.js'
        ]
    }
};


// #############################################################################
// EXPORT.

module.exports = {
    paths,
    options,
    jsOldschoolBundles
};