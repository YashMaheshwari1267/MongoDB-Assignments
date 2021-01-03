#Atlanta Population
1. db.zipcodes.aggregate([{$match: {city: "ATLANTA"}}, {$group: {_id: "$city"} }])
2. db.zipcodes.aggregate({$match: {"city": "ATLANTA"}})
3. db.zipcodes.aggregate([{$group: {_id: "$city", totalPop: {$sum: "$pop"} }}, {$match: {_id: "ATLANTA"}}])

#Population By State 
1. db.zipcodes.aggregate([{$group: {_id: "$state", totalPop: {$sum: "$pop"}}}}])
2. db.zipcodes.aggregate([{$group: {_id: "$state", totalPop: {$sum: "$pop"}}}, {$sort: {totalPop: -1}} ])
3. db.zipcodes.aggregate([{$group: {_id: "$state", totalPop: {$sum: "$pop"}}}, {$sort: {totalPop: -1}}, {$limit: 3} ])

#Population by city
1. db.zipcodes.aggregate([{$group: {_id: {state: "$state", city: "$city"}, totalPop: {$sum: "$pop"}}}])
2. db.zipcodes.aggregate([{$group: {_id: {state: "$state", city: "$city"}, totalPop: {$sum: "$pop"}}}, {$sort: {totalPop: -1}}])
3. db.zipcodes.aggregate([{$group: {_id: {state: "$state", city: "$city"}, totalPop: {$sum: "$pop"}}}, {$sort: {totalPop: -1}}, {$limit: 3}])
4. db.zipcodes.aggregate([{$group: {_id: {state: "$state", city: "$city"}, totalPop: {$sum: "$pop"}}},{$match: {"_id.state": "TX"}}, {$sort: {totalPop: -1}}, {$limit: 3} ])

#Bonus
1. db.zipcodes.aggregate( [    { $group: { _id: { state: "$state", city: "$city" }, pop: { $sum: "$pop" } } },    { $group: { _id: "$_id.state", avgCityPop: { $avg: "$pop" } } } ] )
2. db.zipcodes.aggregate( [    { $group: { _id: { state: "$state", city: "$city" }, pop: { $sum: "$pop" } } },    { $group: { _id: "$_id.state", avgCityPop: { $avg: "$pop" } } }, {$sort: {avgCityPop: -1}}, {$limit: 3} ] )