const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    content: [
        './packages/admin/resources/**/*.blade.php',
        './packages/forms/resources/**/*.blade.php',
        './packages/tables/resources/**/*.blade.php',
        './packages/spatie-laravel-media-library-plugin/resources/**/*.blade.php',
        './packages/spatie-laravel-settings-plugin/resources/**/*.blade.php',
        './packages/spatie-laravel-tags-plugin/resources/**/*.blade.php',
        './packages/spatie-laravel-translatable-plugin/resources/**/*.blade.php',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                danger: colors.rose,
                primary: colors.yellow,
                success: colors.green,
                warning: colors.amber,
            },
            fontFamily: {
                sans: ['DM Sans', ...defaultTheme.fontFamily.sans],
            },
        },
    },
    plugins: [
        require('@tailwindcss/forms'),
        require('@tailwindcss/typography'),
    ],
}
