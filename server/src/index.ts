import { MikroORM } from '@mikro-orm/core'

const main = async () => {
  const orm = await MikroORM.init({
    dbName: 'hypestack',
    type: 'postgresql',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    debug: process.env.NODE_ENV !== 'production',
  })
}

main()
