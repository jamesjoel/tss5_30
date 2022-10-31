'use strict'
var gulp = require('gulp');
var concat = require('gulp-concat');
var merge = require('merge-stream');
const del = require('del');


gulp.task('clean:vendors', function () {
    return del([
      './/vendors/**/*'
    ]);
});

/*Building vendor scripts needed for basic template rendering*/
gulp.task('buildBaseVendorScripts', function() {
    return gulp.src([
        './node_modules/jquery/dist/jquery.min.js', 
        './node_modules/popper.js/dist/umd/popper.min.js', 
        './node_modules/bootstrap/dist/js/bootstrap.min.js', 
        './node_modules/perfect-scrollbar/dist/perfect-scrollbar.min.js'
    ])
      .pipe(concat('vendor.bundle.base.js'))
      .pipe(gulp.dest('.//vendors/js'));
});

/*Building vendor styles needed for basic template rendering*/
gulp.task('buildBaseVendorStyles', function() {
    return gulp.src(['./node_modules/perfect-scrollbar/css/perfect-scrollbar.css'])
      .pipe(concat('vendor.bundle.base.css'))
      .pipe(gulp.dest('.//vendors/css'));
});

/*Scripts for addons*/
gulp.task('buildOptionalVendorScripts', function() {
    var aScript1 = gulp.src(['node_modules/chart.js/dist/Chart.min.js'])
        .pipe(gulp.dest('.//vendors/chart.js'));
    var aScript2 = gulp.src(['node_modules/progressbar.js/dist/progressbar.min.js'])
        .pipe(gulp.dest('.//vendors/progressbar.js'));
    var aScript3 = gulp.src(['node_modules/typeahead.js/dist/typeahead.bundle.min.js'])
        .pipe(gulp.dest('.//vendors/typeahead.js'));
    var aScript4 = gulp.src(['node_modules/select2/dist/js/select2.min.js'])
        .pipe(gulp.dest('.//vendors/select2'));
    var aScript5 = gulp.src(['node_modules/jvectormap/jquery-jvectormap.min.js'])
        .pipe(gulp.dest('.//vendors/jvectormap'));
    var aScript6 = gulp.src(['node_modules/jvectormap/tests//jquery-jvectormap-world-mill-en.js'])
        .pipe(gulp.dest('.//vendors/jvectormap'));
    var aScript7 = gulp.src(['node_modules/jvectormap/tests//jquery-jvectormap-world-mill-en.js'])
        .pipe(gulp.dest('.//vendors/jvectormap'));
    var aScript8 = gulp.src(['node_modules/owl.carousel/dist/owl.carousel.min.js'])
        .pipe(gulp.dest('.//vendors/owl-carousel-2'));
    var aScript9 = gulp.src(['node_modules/codemirror/lib/codemirror.js'])
        .pipe(gulp.dest('.//vendors/codemirror'));
    var aScript10 = gulp.src(['node_modules/codemirror/mode/javascript/javascript.js'])
        .pipe(gulp.dest('.//vendors/codemirror'));
    var aScript11 = gulp.src(['node_modules/codemirror/mode/shell/shell.js'])
        .pipe(gulp.dest('.//vendors/codemirror'));
    var aScript12 = gulp.src(['node_modules/pwstabs//jquery.pwstabs.min.js'])
        .pipe(gulp.dest('.//vendors/pwstabs'));
    return merge(aScript1, aScript2, aScript3, aScript4, aScript5, aScript6,  aScript7, aScript7, aScript8, aScript9, aScript10, aScript11, aScript12);
});


/*Styles for addons*/
gulp.task('buildOptionalVendorStyles', function() {
    var aStyle1 = gulp.src(['./node_modules/@mdi/font/css/materialdesignicons.min.css'])
        .pipe(gulp.dest('.//vendors/mdi/css'));
    var aStyle2 = gulp.src(['./node_modules/@mdi/font/fonts/*'])
        .pipe(gulp.dest('.//vendors/mdi/fonts'));
    var aStyle3 = gulp.src(['./node_modules/flag-icon-css/css/flag-icon.min.css'])
        .pipe(gulp.dest('.//vendors/flag-icon-css/css'));
    var aStyle4 = gulp.src(['./node_modules/flag-icon-css/flags/**/*'])
        .pipe(gulp.dest('.//vendors/flag-icon-css/flags'));
    var aStyle5 = gulp.src(['node_modules/select2/dist/css/select2.min.css'])
        .pipe(gulp.dest('.//vendors/select2')); 
    var aStyle6 = gulp.src(['node_modules/select2-bootstrap-theme/dist/select2-bootstrap.min.css'])
        .pipe(gulp.dest('.//vendors/select2-bootstrap-theme'));
    var aStyle7 = gulp.src(['node_modules/jvectormap/jquery-jvectormap.css'])
        .pipe(gulp.dest('.//vendors/jvectormap')); 
    var aStyle8 = gulp.src(['node_modules/owl.carousel/dist//owl.carousel.min.css'])
        .pipe(gulp.dest('.//vendors/owl-carousel-2'));
    var aStyle9 = gulp.src(['node_modules/owl.carousel/dist//owl.theme.default.min.css'])
        .pipe(gulp.dest('.//vendors/owl-carousel-2'));
    var aStyle10 = gulp.src(['node_modules/owl.carousel/dist//owl.video.play.png'])
        .pipe(gulp.dest('.//vendors/owl-carousel-2'));
    var aStyle11 = gulp.src(['node_modules/codemirror/lib/codemirror.css'])
        .pipe(gulp.dest('.//vendors/codemirror'));
    var aStyle12 = gulp.src(['node_modules/codemirror/theme/ambiance.css'])
        .pipe(gulp.dest('.//vendors/codemirror'));
    var aStyle13 = gulp.src(['node_modules/pwstabs//jquery.pwstabs.min.css'])
        .pipe(gulp.dest('.//vendors/pwstabs'));
    return merge(aStyle1, aStyle2, aStyle3, aStyle4, aStyle5, aStyle6, aStyle7, aStyle8, aStyle9, aStyle10, aStyle11, aStyle12, aStyle13);
});

//Copy essential map files
gulp.task('copyMapFiles', function() {
    var map1 = gulp.src('node_modules/bootstrap/dist/js/bootstrap.min.js.map')
        .pipe(gulp.dest('.//vendors/js'));
    var map2 = gulp.src('node_modules/@mdi/font/css/materialdesignicons.min.css.map')
        .pipe(gulp.dest('.//vendors/mdi/css'));
    return merge(map1, map2);
});

/*sequence for building vendor scripts and styles*/
gulp.task('bundleVendors', gulp.series('clean:vendors', 'buildBaseVendorStyles','buildBaseVendorScripts', 'buildOptionalVendorStyles', 'buildOptionalVendorScripts', 'copyMapFiles'));