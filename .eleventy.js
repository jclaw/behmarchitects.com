module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('img')

  eleventyConfig.addWatchTarget('css/')
  eleventyConfig.addWatchTarget('js/')

  eleventyConfig.setServerOptions({
    liveReload: false
  })
}
