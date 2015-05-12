'use strict';

module.exports = function(grunt) {

	require('load-grunt-tasks')(grunt);
	grunt.loadNpmTasks('grunt-jslint');

	grunt.initConfig({

		watch: {
			css: {
				files: ['app/styles/less/{,*/}*.less'],
				tasks: ['newer:less']
			},

			livereload: {
				options: {
					livereload: '<%= connect.options.livereload %>'
				},
				files: [
					'app/{,*/}*.html',
					'app/styles/{,*/}*.css',
					'app/js/{,*/}*.js',
				]
			}
		},

		connect: {
			options: {
				port: 9000,
				hostname: '0.0.0.0',
				livereload: 35729,
			},
			livereload: {
				options: {
					open: true,
					middleware: function(connect) {
						return [
							connect.static('app/styles'),
							connect().use(
								'bower_components',
								connect.static('bower_components')
							),
							connect.static('app')
						]
					}
				}
			}
		},

		less: {
			development: {
				files: {'app/styles/styles.css':'app/styles/less/{,*/}*.less'}
			}
		},

		jslint: {
			server: {
				src: [
					'app/js/*.js',
					'app/js/controllers/*.js',
					'app/js/factories/*.js',
				],
			}
		},

		karma: {
			unit: {
				configFile: 'karma.conf.js'
			}
		},

	});

	grunt.registerTask('serve', [
		'connect',
		'watch'
	]);

	grunt.registerTask('test', [
		'karma'
	]);
}