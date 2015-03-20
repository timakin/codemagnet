cd /src
rm -rf codemagnet; true
git clone https://github.com/timakin/codemagnet
cd codemagnet
npm install
bower install
gulp serve