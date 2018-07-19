webpack.config.js
target: 'node',

```
npm install --save styled-components polished reset-css moment clone fs-extra
npm install --save-dev css-loader style-loader @types/moment @types/clone @types/fs-extra
```
* npm install --save-dev typescript-styled-plugin

* Paletton で配色を決める
http://paletton.com
URLで、配色設定を記憶できる
http://paletton.com/#uid=54r0R0knvBjdsPDiZI7sCwOvApZ

tsconfig.json
```
  "compilerOptions": {
    "plugins": [{
      "name": "typescript-styled-plugin",
      "tags": [
        "Styled"
      ]
    }]
  }
```

タスク追加画面

npm install react-datepicker --save
npm install @types/react-datepicker --save-dev
