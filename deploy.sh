# 生成静态文件
npm run docs:build

# 进入生成的文件夹
cd docs/.vitepress/dist

git init
git add -A
git commit -m 'deploy'

git push -f https://github.com/5ibug/cc-plus-ui.git master:gh-pages

cd -
