module.exports = function(grunt) {
  require('load-grunt-tasks')(grunt, {pattern: ['grunt-contrib-*', 'grunt-*']});
  grunt.initConfig({
    lessShell: {
      srcPath : "dev/public/src",
      docsMdOutput : "dev/public/docs/markdown-pages",
      docsHtmlOutput: "dev/public/docs/documentations",
      docsHtmlTemplate: "dev/public/docs",
      docSrcExtension: ".less",
      devPath: "dev/public",
      privatePath: "dev/_private"
    },
    // Doc generation tasks.
    markdox: {
      target: {
        files: [
          {
            expand: true,                               // Enable dynamic expansion.
            cwd: '<%= lessShell.srcPath %>',      // Src matches are relative to this path.
            src: ['**/*<%= lessShell.docSrcExtension %>'],                        // Actual pattern(s) to match.
            dest: '<%= lessShell.docsMdOutput %>', // Destination path prefix.
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
            cwd: '<%= lessShell.docsMdOutput %>',
            src: '**/*.md',
            dest: '<%= lessShell.docsHtmlOutput %>',
            ext: '.htm'
          }
        ],
        options: {
          template: '<%= lessShell.docsHtmlTemplate %>/template.html',
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
        src: ['<%= lessShell.docsMdOutput %>/**/*.md'],
        dest: '<%= lessShell.docsMdOutput %>/All/all.md',
      },
    },
    // Compiling LESS src.
    less: {
      dev: {
        files: {
          "<%= lessShell.privatePath %>/less-shell-css/main.css": "<%= lessShell.devPath %>/src/main.less"
        }
      }
    },
    cssmin: {
      combine: {
        files: {
          "<%= lessShell.privatePath %>/less-shell-css/main.min.css": "<%= lessShell.privatePath %>/less-shell-css/main.css"
        }
      }
    },
    // Cleaning things up ...
    clean: {
      htmlDocs: ["<%= lessShell.docsHtmlOutput %>/**/*.htm","<%= lessShell.docsHtmlOutput %>"],
      mdDocs: ["<%= lessShell.docsMdOutput %>/**/*.md"]
    }
  })

  // Load the plugin that provides the "uglify" task.
  
  // Default task(s).
  grunt.registerTask('default', ['markdox']);
  grunt.registerTask('docs', ['clean', 'markdox', 'concat', 'markdown']);
  grunt.registerTask('mdDocs', ['clean:mdDocs','markdox']);
};