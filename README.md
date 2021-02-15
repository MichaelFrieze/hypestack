# hypestack

[From Ben Awad's tutorial](https://www.youtube.com/watch?v=I6ypD7qv3Z8)

Current time of video: 13:14

### Includes the follow technologies

- React
- TypeScript
- GraphQL
- URQL/Apollo
- Node.js
- PostgreSQL
- MikroORM/TypeORM
- Redis
- Next.js
- TypeGraphQL
- Chakra

[Ben Awad's "lireddit" repository](https://github.com/benawad/lireddit)

### Notes on how to use PostgreSQL

[quick guide on digial ocean](https://www.digitalocean.com/community/tutorials/how-to-install-postgresql-on-ubuntu-20-04-quickstart)

To install on Ubuntu:
https://www.postgresql.org/download/linux/ubuntu/

```bash
sudo sh -c 'echo "deb http://apt.postgresql.org/pub/repos/apt $(lsb_release -cs)-pgdg main" > /etc/apt/sources.list.d/pgdg.list'
wget --quiet -O - https://www.postgresql.org/media/keys/ACCC4CF8.asc | sudo apt-key add -
sudo apt-get update
sudo apt-get -y install postgresql
```

To access the db and setup user/password

```bash
# access user [postgres] db command shell
sudo -u postgres psql

# now, in the command shell, change password
ALTER USER postgres PASSWORD 'password'
```

Another way to access postgres databases (requires password):

```bash
psql -U postgres -h localhost
```

To create database:

```bash
# access command shel and then
create database [databasename];
```

To create a new user:

```bash
# in the postgres command shell
CREATE USER new_username;

# now, in the command shell, change password
ALTER USER postgres PASSWORD 'password';

# Since we want that user to be able to create a DB, alter role
ALTER USER new_username SUPERUSER CREATEDB;
```

Some useful commands:

```
# to see which database and user is connected
\conninfo

# to change
\c [db name] [user/role name]

# to see list of role and roll attributes
\du

# to quit
\q

# list of db
\l

```
