source "https://rubygems.org"
# Hello! This is where you manage which Jekyll version is used to run.
# When you want to use a different version, change it below, save the
# file and run `bundle install`. Run Jekyll with `bundle exec`, like so:
#
#     bundle exec jekyll serve
#
# This will help ensure the proper Jekyll version is running.
# Happy Jekylling!
# 注释掉 Jekyll 的版本指定，因为 `github-pages` 会处理它
# gem "jekyll", "~> 4.3.4" 

# 使用 GitHub Pages 提供的版本来替代 Jekyll
#gem "github-pages", group: :jekyll_plugins

# 你可以继续使用 Minima 主题，确保其与 GitHub Pages 兼容
gem "minima", "~> 2.1.1"

# 如果你有额外的插件，可以继续在这里列出
group :jekyll_plugins do
  gem "jekyll-feed", "~> 0.12"
  gem "jekyll-remote-theme"
  gem "jekyll-seo-tag"
  gem "kramdown-parser-gfm"


end

# Windows 平台的额外依赖（如果适用）
platforms :mingw, :x64_mingw, :mswin, :jruby do
  gem "tzinfo", ">= 1", "< 3"
  gem "tzinfo-data"
end

# 在 Windows 平台上的性能提升
gem "wdm", "~> 0.1", :platforms => [:mingw, :x64_mingw, :mswin]

# 对于 JRuby 构建的 http_parser.rb 依赖
gem "http_parser.rb", "~> 0.6.0", :platforms => [:jruby]


