1. use mongo_practice

2. db.createCollection('movies')
3. db.movies.insertOne({title: "Fight Club", writer: "Chuck Palahniuko", year: 1999, actors: ["Brad Pitt", "Edward Norton"]})
4. db.movies.insertOne({title: "Pulp Fiction", writer: "Quentin Tarantino", year: 1994, actors: ["John Travolta", "Uma Thurman"]})
5. db.movies.insertOne({title: "Inglorius Basterds", writer: "Quentin Tarantino", year: 2009, actors: ["Brad Pitt", "Diane Kruger", "Eli Roth"]})
6. db.movies.insertOne({title: "The Hobbit: An Unexpected Journey", writer: "J.R.R. Tolkein", year: 2012, franchise: "The Hobbit"}) 
7. db.movies.insertOne({title: "The Hobbit: The Desolation of Smaug", writer: "J.R.R. Tolkein", year: 2013, franchise: "The Hobbit"})
8. db.movies.insertOne({title: "The Hobbit: The Battle of the Five Armies", writer: "J.R.R. Tolkein", year: 2012, franchise: "The Hobbit", synopsis: "Bilbo and Company are forced to engage in a war against an array of combatants and keep the Lonely Mountain from falling into the hands of a rising darkness."})
9. db.movies.insertOne({title: "Pee Wee Herman's Big Adventure"})
10.db.movies.insertOne({title: "Avatar"})

# get all documents 
db.movies.find()

#get all documents with writer set to "Quentin Tarantino"
db.movies.find({"writer": "Quentin Tarantino"})

#get all documents where actors include "Brad Pitt"
db.movies.find({"actors": "Brad Pitt"})

#get all documents with franchise set to "The Hobbit"
db.movies.find({"franchise": "The Hobbit"})

#get all movies released in the 90s
db.movies.aggregate([{$match: {"year": {$gte: 1990, $lte: 2000}}}])

#get all movies released before the year 2000 or after 2010
db.movies.find({$or:[{"year":{$gt:2010}},{"year": {$lt:2000}}]})

#add sysnopsis to "The Hobbit: The Battle of the Five Armies"
db.movies.update({"title": "The Hobbit: The Battle of the Five Armies" }, {$set: {"synopsis": "A reluctant hobbit, Bilbo Baggins, sets out to the Lonely Mountain with a spirited group of dwarves to reclaim their mountain home - and the gold within it - from the dragon Smaug."}})

#add a synopsis to "The Hobbit: The Desolation of Smaug"
db.movies.update({title: "The Hobbit: The Desolation of Smaug"}, {synopsis: "The dwarves, along with Bilbo Baggins and Gandalf the Grey, continue their quest to reclaim Erebor, their homeland, from Smaug. Bilbo Baggins is in possession of a mysterious and magical ring."})

#add an actor named "Samuel L. Jackson" to the movie "Pulp Fiction"
db.movies.update({title: "Pulp Fiction"}, {$push: {actors: "Samuel L. Jackson"}})

#Text Search 
1. db.movies.find({synopsis: /.Bilbo./})
2. db.movies.find({synopsis: /.Gandalf./})
3. db.movies.find({$and: [{synopsis: /.Bilbo./}, {synopsis: /.^Gandalf./}]})
4. db.movies.find({$and: [{synopsis: /Bilbo/}, {synopsis: {$not: /Gandalf/}}]})
5. db.movies.find({$or: [{synopsis: /dwarves/}, {synopsis: /hobbit/}]})

#Delete Documents 
1. db.movies.remove({title: "Pee Wee Herman's Big Adventure"})
2. db.movies.remove({title: "Avatar"})

#Relationships
1. db.users.find({})
2. db.posts.find({})
3. db.posts.find({username: "GoodGuyGreg"})
4. db.posts.find({username: "ScumbagSteve"})
5. db.comments.find({})
6. db.comments.find({username: "GoodGuyGreg"})
7. db.comments.find({username: "ScumbagSteve"})
8. db.comments.find({post: db.posts.findOne({title: "Reports a bug in your code"})._id})