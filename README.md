# Is_my_node_even_connected_to_sql
Running Node.js -- but first, how do I even know, through the thicket of proxy and db logins, that i'm even connected?

# SETUP

clone the repo

`yarn install`

edit the file app.js -- SEE COMMENTS IN FILE FOR HOW TO CONNECT via node.js

then run
`yarn start`

to run node app.js

It runs once and simply a) tries to connect to your postgres db.
then runs a "SELECT NOW()" command to fully check that you are connected, have permissions, have the right table name and can receive data back.

See app.js comments for more details.