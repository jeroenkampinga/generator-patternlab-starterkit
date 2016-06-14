module.exports = function(grunt, data) {
    return {
        run_tests: {
            options : {
                backstop_path: '<%= paths.src.root %>'+'bower_components/backstopjs',
                test_path: './backstop_data',
                create_references: false,
                run_tests: true
            }
        },
        update_tests: {
            options : {
                backstop_path: '<%= paths.src.root %>'+'bower_components/backstopjs',
                test_path: './backstop_data',
                create_references: true,
                run_tests: false
            }
        }
    }
};
