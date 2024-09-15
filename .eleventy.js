module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy('img')
  eleventyConfig.addPassthroughCopy('css')
  eleventyConfig.addPassthroughCopy('js')

  eleventyConfig.addWatchTarget('css/')
  eleventyConfig.addWatchTarget('js/')

  eleventyConfig.setServerOptions({
    liveReload: false
  })
}
