import "@babel/polyfill";
import gulp from "gulp";
import sass from "gulp-sass";
import del from "del";
import minify from "gulp-csso";
import autoprefixer from "gulp-autoprefixer";

const paths = {
    styles: {
        src: "src/horror/styles.scss",
        dest: "dest/css/horror",
        watch: "src/horror/*",
    },
};

const styles = () => {
    return gulp
        .src(paths.styles.src)
        .pipe(sass())
        .pipe(
            autoprefixer({
                flexbox: true,
                grid: "autoplace",
            })
        )
        .pipe(minify())
        .pipe(gulp.dest(paths.styles.dest));
};

const watch = () => {
    gulp.watch(paths.styles.watch, styles);
};

const clean = async () => {
    await del("dest/css/horor");
};

const dev = gulp.series([clean, styles, watch]);

export default dev;
