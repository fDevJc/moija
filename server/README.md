server
use module
express
npm i express

nodemon(서버수정시 서버 재가동 모듈)
npm i -D nodemon

cors(cors에러를 위한 모듈)
npm i cors --save

sequelize(mysql를 이용하기 위한 모듈)

> npm i sequelize # This will install v6
> npm i mysql2

데이터베이스생성

> npx sequelize db:create
> NODE_ENV=test npx sequelize db:create

시퀄라이즈가 config파일을 읽어 데이터베이스 생성

jest (testing library)

> npm i -D jest

supertest(tesing library)

> npm i -D supertest
