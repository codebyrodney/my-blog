module.exports = function(eleventyConfig) {
  eleventyConfig.addPassthroughCopy({ "css/style.css": "css/style.css" });
  eleventyConfig.ignores.add("node_modules");
  return {
    dir: {
      input: ".",
      includes: "_includes",
      output: "_site"
    }
  };
};