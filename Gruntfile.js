module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt, {pattern: ['grunt-contrib-*', 'grunt-*']});
  grunt.initConfig({
    appDoc: {
      appFilesPath : "dev/public/src",
      markdownOutputPath : "dev/public/docs/markdown-pages",
      htmlOutputPath: "dev/public/docs/documentations",
      htmlDocTemplatePath: "dev/public/docs",
      srcExtension: ".less"

    },
    markdox: {
      target: {
        files: [
        {
            expand: true,                               // Enable dynamic expansion.
            cwd: '<%= appDoc.appFilesPath %>',      // Src matches are relative to this path.
            src: ['**/*<%= appDoc.srcExtension %>'],                        // Actual pattern(s) to match.
            dest: '<%= appDoc.markdownOutputPath %>', // Destination path prefix.
            ext: '.md'                                  // Dest filepaths will have this extension.
          }
          ]
        }
      },
      markdown: {
        all: {
          files: [
          {
            expand: true,
            cwd: '<%= appDoc.markdownOutputPath %>',
            src: '**/*.md',
            dest: '<%= appDoc.htmlOutputPath %>',
            ext: '.htm'
          }
          ],
          options: {
            template: '<%= appDoc.htmlDocTemplatePath %>/template.html',
            markdownOptions: {
              gfm: true,
              highlight: "auto",
              codeLines: {
                before: '<span>',
                after: '</span>'
              }
            }
          }
        },
        
      },
      concat: {
        dist: {
          src: ['<%= appDoc.markdownOutputPath %>/**/*.md'],
          dest: '<%= appDoc.markdownOutputPath %>/All/all.md',
        },
      },
      clean: {
        htm: ["<%= appDoc.htmlOutputPath %>/**/*.htm","<%= appDoc.htmlOutputPath %>"],
        md: ["<%= appDoc.markdownOutputPath %>/**/*.md"]
    }
  })

  // Load the plugin that provides the "uglify" task.
  
  // Default task(s).
  grunt.registerTask('default', ['markdox']);
  grunt.registerTask('docs', ['clean', 'markdox', 'concat', 'markdown']);
  grunt.registerTask('md', ['clean:md','markdox']);


};