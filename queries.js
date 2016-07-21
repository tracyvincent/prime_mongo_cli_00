// 1. Find documents that have awards.
db.bios.find({'awards': {$exists:true}}).pretty()

// 2. Find documents that don't have awards.
db.bios.find({'awards': {$exists:false}}).pretty()

// 3. Find documents that have contribs for OOP or UNIX.
db.bios.find({$or: [{contribs: "OOP"}, {contribs : "UNIX"}]}).pretty()

// 4. Find documents with "Turing Award" awards.
db.bios.find({"awards.award": "Turing Award"}).pretty()

// 5. Find documents with IDs between 3 and 7.
db.bios.find({ _id: { $gt: 1, $lt: 8 } } ).pretty()

// 6. Find documents with awards that were awarded before the year 2000.
db.bios.find({"awards.year": {$lt: 2000 } } ).pretty()

// 7. Find documents with birth dates, but no death dates.
db.bios.find({"birth":{$exists: true}, "death": {$exists: false}}).pretty()
