module.exports = function(grunt) {
	require('load-grunt-tasks')(grunt);
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		app: {
			dev: 'app/dev'
		},
		less: {
			dev: {
				files: {
					"<%= app.dev %>/css/app.css": "<%= app.dev %>/less/main.less"
				}
			}
		},
		cssmin: {
			combine: {
				files: {
					"<%= app.dev %>/css/app.min.css": "<%= app.dev %>/css/app.css"
				}
			}
		},
		watch: {
			dev: {
				options: {
					livereload: true
				},
				files: ['<%=app.dev%>/**', '!<%= app.dev %>/css/**'],
				tasks: ['less','autoprefixer']
			}
		},
		connect: {
			server: {
				options: {
					port: 9001,
					base: ['<%= app.dev %>'],
					keepalive: true,
					livereload: true
				}
			}
		},
		open: {
			all: {
				path: 'http://localhost:<%= connect.server.options.port%>'
			}
		},
		concurrent: {
			dev: ['connect', 'open', 'watch'],
			options: {
				logConcurrentOutput: true,
				limit: 3
			}
		},
		autoprefixer: {
			options: {
				browsers: ["ff 3.6","opera 9.5", "ie 8", "chrome 5", "ios 3.2", "android 2.1", "safari 3.1"]
			},
			dist: {
				files: {
					"<%= app.dev %>/css/app.css": "<%= app.dev %>/css/app.css"
				}
			}
		}
	});
grunt.registerTask('dev', ['concurrent']);
};