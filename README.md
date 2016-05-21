# hoguserver
## 설치
```
$ git clone https://github.com/hogurider/hoguserver.git
$ npm install
```

## 실행
```
$ npm start
```
혹은
```
$ node index.js
```

## API Doc 생성
먼저 [apidoc](http://www.apidocjs.com)이 설치 안되있으면 설치한다.
```
$ npm install apidoc -g
```
이후 아래의 명령어를 실행하면 /routes에 있는 파일들의 [apidoc 규칙으로 작성된 주석](http://www.apidocjs.com)을 읽어들여 /apidoc 폴더에 Rest API 문서를 제작하여준다.
```
$ npm run doc
```
