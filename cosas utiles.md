# cosas utiles

- importar base de mongo
    > mongoimport --db cys --collection pokemon --type json --file pokemons.json  --jsonArray

- importar base de mysql
    > ./node_modules/.bin/sequelize db:migrate --config ./config/sqlConfig.js --migrations-path ./src/migrations/
    > ./node_modules/.bin/sequelize db:seed:all --config ./config/sqlConfig.js --seeders-path ./src/seeders/

- https://pokeres.bastionbot.org/images/pokemon/{{pokenumero}}.png