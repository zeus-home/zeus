@ECHO OFF
HUGO
cd ..\public
git add --all
git commit -m "Publishing to gh-pages (publish.sh)"
cd ..
git push origin gh-pages
cd zeus-docs
