/*
Comparision Query Operator
    1. $gt
    2. $gte
    3. $lt
    4. $lte
    5. $ne
    6. $in
    7. $nin
 

Logical Query Operators

    1. $and
    2. $or
    3. $not
    4. $nor

Element Query Operators

    $exists
    $type

Evalution Query Operator

    1. $mod
    2. $regex
    3. $where

Query Operator Array

    1. $all
    2. $elemMatch
    3. $size

    

*/



// find 
db.users.find().pretty()
// insert
db.users.insert({name:"Susi", address:{city: "Mumbai", country: "India"}, email:"susi@gmail.com", role:"user", age:26, salary:45000})

// $gt
db.users.find({age: {$gt: 32}}).pretty()
//$gte

db.users.find({age: {$gte: 32}}).pretty()
// $in
db.users.find({age: {$in:[30,31,32,37]}}).pretty()

// $nin
db.users.find({age: {$nin:[30,31,32,37]}}).pretty()

// $and
db.users.find({$and:[{salary: 35000},{age: 37}]}).pretty()

// $or
db.users.find({$or:[{salary: 35000},{age: 32}]}).pretty()

// $exists
db.users.find({"address.city": {$exists: true}}).pretty()
/*
Type Description	Type value
Double              	1
String	                2
Object	                3
Array	                4
Binary data	            5
Object id	            7
Boolean	                8
Date	                9
*/

// $type
db.users.find({"address.country": {$type: 2}}).pretty() // address inside 2nd place la country irukku

// $mod
db.users.find({"age": {$mod: [8,0]}}).pretty() // age is divisible by 8 and remainder 0

// $regex
db.users.find({name: {$regex: 'A.*'}}).pretty() // name starts with A
db.users.find({name: {$regex: /A/i}}).pretty() // wherever A is there

// query operator Array

/* 
   $all,
   $elemMatch,
   $size

----> work with array
*/ 

// $all
db.testtable.find({"extra.community_members" : {$all : [5000,2000,1500]}}).pretty(); 
/* 
output:

"extra" : {
    "community_members" : [
                        5000,
                        2000,
                        1500
                ],
        }

*/

// $ememMatch
// The agegroup must be within "10-13"
// The price must be more than or equal to 7
db.table1.find( { "description": { $elemMatch: { "agegroup" : "10-13","price":{$gte:7}}}}).pretty();

/*
{
        "_id" : ObjectId("5285bd678154c4747b705b4f"),
        "item_code" : "I001",
        "category" : [
                "boy",
                "girl"
        ],
        "description" : [
                {
                        "agegroup" : "3-5",
                        "flavour" : "chocolate",
                        "price" : 5
                },
                {
                        "agegroup" : "6-9",
                        "flavour" : "strawberry",
                        "price" : 6
                },
                {
                        "agegroup" : "10-13",
                        "flavour" : "mango",
                        "price" : 7
                }
        ]
}


*/

// $size
db.testtable.find({"extra.friends.valued_friends_id" : {$size : 3}}).pretty();

// to find max salary and min salary

db.users.aggregate([{$group: {_id: "salary", maxSalary: {$max: "$salary"}, minSalary: {$min: "$salary"}}}]).pretty()
// { "_id" : "salary", "maxSalary" : 45000, "minSalary" : 17000 }

// update salary from 15000 to 25000
db.users.update({name: "Akash"}, {$max: {salary: 25000}})
// WriteResult({ "nMatched" : 1, "nUpserted" : 0, "nModified" : 0 })

// select some selected field with id
db.restaurants.find({}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1}).pretty()
/*{
        "_id" : ObjectId("62a82db8150fcdc5012f81ab"),
        "borough" : "Bronx",
        "cuisine" : "Bakery",
        "name" : "Morris Park Bake Shop",
        "restaurant_id" : "30075445"
}*/

// select some selected field without id
db.restaurants.find({}, {restaurant_id: 1, name: 1, borough: 1, cuisine: 1, _id: 0}).pretty()
/*
{
        "borough" : "Bronx",
        "cuisine" : "Bakery",
        "name" : "Morris Park Bake Shop",
        "restaurant_id" : "30075445"
}
*/
