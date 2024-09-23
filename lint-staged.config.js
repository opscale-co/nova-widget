export default {
    "*.php": [
        "vendor/bin/duster lint"
    ],
    "*.vue": [
        "eslint resources/js --fix --ext vue --ignore-pattern 'dist/**/*'"
    ],
    "*.js": [
        "eslint resources/js --fix --ext js --ignore-pattern 'dist/**/*'"
    ]
}
