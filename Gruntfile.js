module.exports = function(grunt) {

	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),

		sonarRunner: {
			analysis: {
				options: {
					debug: true,
					separator: '\n',
					dryRun: false,
					sonar: {
						host: {
							url: process.env.SONAR_SERVER_URL
						},
						login: process.env.SONAR_USER_ID ? process.env.SONAR_USER_ID: process.env.SONAR_USER_TOKEN,
						password: process.env.SONAR_USER_ID ? process.env.SONAR_USER_TOKEN: '',
						projectKey: 'sonar:grunt-simple-app-report:1.0.0',
						projectName: 'Simple App',
						projectVersion: '1.0.0',
						sources: ['.'].join(','),
						exclusions: ['node_modules/**'].join(','),
						sourceEncoding: 'UTF-8'
					}
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-sonar-runner');
};