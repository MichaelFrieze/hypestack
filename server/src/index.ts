import { MikroORM } from '@mikro-orm/core'
import { __prod__ } from './constants'

const main = async () => {
  const orm = await MikroORM.init({
    dbName: 'hypestack',
    type: 'postgresql',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    debug: !__prod__,
  })
}

main()
