# express_mysql_typescript_api

express + mysql + typescirpt で簡易 API サーバー  
CRUD ができる  
詳しくはこちらの[記事](https://msksgm.hatenablog.com/entry/2021/06/04/212510)を参照

# Installation

## yarn

初期インストール

```bash
yarn
```

## MySQL

MySQL で ddl を読み込む

bash

```bash
mysql -u root -p
# パスワードを入力
```

MySQL

```sql
root@localhost> source /PATH/TO/express_api/movies-ddl.sql
```

## 環境変数の読み込み

`express_mysql_typescript_api/.env`を作成

```
# express
PORT=4000

# DB
DB_HOST="localhost"
DB_PORT="3306"
DB_USER="app-user"
DB_PASSWORD="PaAsW0rD"
DB_DATABASE="MOVIE
```

読み込み

```bash
export $(cat .env | grep -v ^# | xargs)
```

# Usage

## 実行

```
yarn start
```

## 動作確認

`curl -H "Content-Type: application/json" localhost:4000/movie/ | jq`

```json
[
  {
    "ID": 1,
    "NAME": "天気の子",
    "CREATED_AT": "2021-06-03T23:39:19.024Z",
    "UPDATED_AT": "2021-06-03T23:39:19.024Z"
  },
  {
    "ID": 2,
    "NAME": "サマーウォーズ",
    "CREATED_AT": "2021-06-03T23:39:19.026Z",
    "UPDATED_AT": "2021-06-03T23:39:19.026Z"
  },
  {
    "ID": 3,
    "NAME": "ジョゼと虎と魚たち",
    "CREATED_AT": "2021-06-03T23:39:19.026Z",
    "UPDATED_AT": "2021-06-03T23:39:19.026Z"
  }
]
```
