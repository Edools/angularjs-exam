module.exports = function(grunt){

    //Configurando tasks

        grunt.initConfig({

            copy: {
                public: {
                    cwd: 'public',      //nome da pasta a ser copiada
                    src: '**',          //todos os arquivos e diretórios são copiados
                    dest: 'dist',       //nome da pasta destino
                    expand: true        //ativa mapeamento dinâmico -
                                        //torma no pocesso de configuração do copy mais simples
                }
            },

            clean: {
                dist:{
                    src: 'dist'
                },

                scss:{
                    src: 'dist/scss'
                }
            },

            useminPrepare:{
                html:'dist/**/*.html'
            },

            usemin:{                            //importante para alterar referencias:
                html:'dist/**/*.html',          //  - no html
                css: 'dist/**/*.min.css',       //  - no CSS
                js: 'dist/**/*.min.js'          //  - no js
            },

            imagemin: {
                public:{
                    cwd: 'public',
                    src: '**/*.{png,jpg,gif}',
                    dest: 'dist',
                    expand: true
                }
            },

            rev:{
                options:{
                    enconding:'uft8',
                    algorithm:'md5',
                    length:8
                },

                imagens: {
                    src:['dist/img/**/*.{png,jpg,gif}']
                },

                minificados: {
                    src:['dist/css/**/*.min.css', 'dist/js/**/*.min.js']
                }
            },

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

        grunt.registerTask('publicar',['clean:dist','copy','clean:scss']);
        grunt.registerTask('minificar', ['useminPrepare',
                                         'concat', 'uglify', 'cssmin',
                                         'rev',
                                         'usemin',
                                         'imagemin']);

        grunt.registerTask('default',['publicar','minificar']);

    //Importando os pacotes
        grunt.loadNpmTasks('grunt-contrib-copy');
        grunt.loadNpmTasks('grunt-contrib-clean');
        grunt.loadNpmTasks('grunt-contrib-concat');
        grunt.loadNpmTasks('grunt-contrib-uglify');
        grunt.loadNpmTasks('grunt-contrib-cssmin');
        grunt.loadNpmTasks('grunt-contrib-imagemin');
        grunt.loadNpmTasks('grunt-usemin');
        grunt.loadNpmTasks('grunt-rev');
        grunt.loadNpmTasks('grunt-contrib-sass');
        grunt.loadNpmTasks('grunt-contrib-watch');
        grunt.loadNpmTasks('grunt-browser-sync');

};









