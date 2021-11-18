## Тонкость, при деплое на Heroku
При попытке совершить деплой на heroku с данной структурой папок, следует помнить,
что `на уровне сервера` в package.json в раздел scripts, нужно будет добавить следующую команду:
**"heroku-postbuild": "cd client && npm install && npm run build"**.

Итог должен выглядеть примерно так:

<pre>
"scripts": {
  "heroku-postbuild": "cd client && npm install && npm run build",  
  "prod": "set NODE_ENV=production && node server",  
  "dev": "nodemon server"   
}
</pre>
