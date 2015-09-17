module.exports = function(grunt){

    //Configurando tasks

        grunt.initConfig({

            watch:{
                sass:{
                    files:'public/scss/**/*.scss',
                    tasks:'sass:compilar'
                }
            },

            sass: {
                compilar: {
                    cwd: 'public/scss',   //diretório onde estão localizados os arquivos scss que serão compilados
                    src: '**/*.scss',
                    dest: 'public/css',
                    ext: '.css',
                    expand: true
                }
            },

            browserSync: {
                public: {
                    bsFiles: {                  // falaremos aqui que arquivos serão monitorados
                        src : ['public/**/*']   // todos os arquivos da pasta public
                    },
                    options: {
                        watchTask: true,        // permite rodar a task watch junto com o borwsersync
                        server: {
                            baseDir: "public"
                        }
                    }
                }
            }


        });


    //Registrando Tasks

        grunt.registerTask('server',['browserSync','watch']);


    //Importando os pacotes

        grunt.loadNpmTasks('grunt-contrib-sass');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-browser-sync');

};









