/**
 * @author [author]
 * @email [example@mail.com]
 * @create date 2022-11-16 23:26:06
 * @modify date 2022-11-16 23:26:06
 * @desc [description]
 */


const {client} = require('./dbconfig');
client.connect(function(error,dbresult){
    if(error){
        console.log('Error Find')
    }else{
        console.log('Db Result Success');
        // DATAINSERT(dbresult);
        // DeleteIteam(dbresult);
        DeleteIteamMany(dbresult);
    }
});
// let DATAINSERT = (dbresult)=>{
//     let databaseConnect = dbresult.db('test');
//     let databaseCollectionConnect = databaseConnect.collection('test');
//     let json = [
//         {
//           name:'Liyon',
//           age:17,
//           class:'Collage'
//         },
//         {
//             name:'Hello',
//             age:20,
//             class:'Inter'
//         },
//         {
//             name:'Liyon',
//             age:17,
//             class:'Collage'
//         },
//         {
//             name:'Hello',
//             age:20,
//             class:'Inter'
//         },
//         {
//             name:'Liyon',
//             age:17,
//             class:'Collage'
//         },
//         {
//             name:'Hello',
//             age:20,
//             class:'Inter'
//         },
//         {
//             name:'Liyon',
//             age:17,
//             class:'Collage'
//         },
//         {
//             name:'Hello',
//             age:20,
//             class:'Inter'
//         },{
//             name:'Liyon',
//             age:17,
//             class:'Collage'
//         },
//         {
//             name:'Hello',
//             age:20,
//             class:'Inter'
//         },{
//             name:'Liyon',
//             age:17,
//             class:'Collage'
//         },
//         {
//             name:'Hello',
//             age:20,
//             class:'Inter'
//         },{
//             name:'Liyon',
//             age:17,
//             class:'Collage'
//         },
//         {
//             name:'Hello',
//             age:20,
//             class:'Inter'
//         },{
//             name:'Liyon',
//             age:17,
//             class:'Collage'
//         },
//         {
//             name:'Hello',
//             age:20,
//             class:'Inter'
//         },{
//             name:'Liyon',
//             age:17,
//             class:'Collage'
//         },
//         {
//             name:'Hello',
//             age:20,
//             class:'Inter'
//         },{
//             name:'Liyon',
//             age:17,
//             class:'Collage'
//         },
//         {
//             name:'Hello',
//             age:20,
//             class:'Inter'
//         },{
//             name:'Liyon',
//             age:17,
//             class:'Collage'
//         },
//         {
//             name:'Hello',
//             age:20,
//             class:'Inter'
//         },{
//             name:'Liyon',
//             age:17,
//             class:'Collage'
//         },
//         {
//             name:'Hello',
//             age:20,
//             class:'Inter'
//         }
//     ];
//     databaseCollectionConnect.insertMany(json , function (error) {
//         if (error){
//             console.log('Error1');
//         } else {
//             console.log('DataInsert Success');
//         }
//     })
// };


// let DeleteIteam = (dbresult)=>{
//     let dataBase = dbresult.db('test');
//     let collection = dataBase.collection('test');
//     let item = {age:17};
//     collection.deleteOne(item,function (error) {
//         if (error){
//             console.log('Error')
//         } else {
//             console.log('Item Delete Success')
//         }
//     })
// };


let DeleteIteamMany = (dbresult)=>{
    let Database = dbresult.db('test');
    let collection = Database.collection('test');
    collection.deleteMany(function (error,result) {
        if (error){
            console.log('Error')
        } else {
            console.log(result);
        }
    })
};

// console.log(client);