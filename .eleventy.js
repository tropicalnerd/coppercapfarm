module.exports = function(eleventyConfig) {
    return {
        dir: {
            input: "source/templates",
            includes: "_includes",
            layouts: "_layouts",
            output: "site"
        }
    }
}