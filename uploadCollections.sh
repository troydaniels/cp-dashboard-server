#!/bin/bash

for file in ./json/*; do
  collection=$(basename ${file%.*})
  mongoimport --host Cluster0-shard-0/cluster0-shard-00-00-wmkaj.mongodb.net:27017,cluster0-shard-00-01-wmkaj.mongodb.net:27017,cluster0-shard-00-02-wmkaj.mongodb.net:27017 --ssl --username troy_daniels --authenticationDatabase admin --db coreplus --collection $collection --type json --jsonArray --drop --file $file
done
