var MongoClient = require('mongodb').MongoClient
var ObjectID = require('mongodb').ObjectID;
// 地址
var url = "mongodb://mongo:27017"
//导出查询mongo自生成的id
exports.objid = ObjectID
/**
 * 封装find()查询所有数据
 * @param {*} table 数据库名称
 * @param {*} collect  集合名
 * @returns 
 */
exports.findAll = function findAll(table, collect) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(table);
            dbo.collection(collect).find().toArray(function (err, result) { // 返回集合中所有数据
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                    db.close()
                }
            })
        })
    })
}
/**
 * 查询某一条记录
 * @param {*} table 
 * @param {*} collect 
 * @param {*} params 
 * @returns 
 */
exports.findone = function findone(table, collect, params) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(table);
            dbo.collection(collect).find(params).toArray(function (err, result) { // 返回集合中所有数据
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                    db.close()
                }
            })
        })
    })
}
/**
 * 封装更新方法
 * @param {*} table 
 * @param {*} collect 
 * @param {*} id 
 * @param {*} newdata 
 * @returns 
 */

exports.Update = function update(table, collect, id, newdata) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(table);
            dbo.collection(collect).updateOne(ObjectID(id), newdata, function (err, result) {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                    db.close()
                }
            })
        })
    })
}

/**
 * 封装插入数据方法
 * @param {*} table 
 * @param {*} collect 
 * @param {*} data 
 * @returns 
 */
exports.Insert = function insert(table, collect, data) {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(table);
            dbo.collection(collect).insertOne(data, function (err, result) {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                    db.close()
                }
            })
        })
    })
}
/**
 * 封装删除的方法
 * @param {*} table 
 * @param {*} collect 
 * @param {*} params 
 * @returns 
 */
exports.Delete = (table, collect, params) => {
    return new Promise((resolve, reject) => {
        MongoClient.connect(url, function (err, db) {
            if (err) throw err;
            var dbo = db.db(table);
            dbo.collection(collect).deleteOne(params, function (err, result) {
                if (err) {
                    reject(err)
                } else {
                    resolve(result)
                    db.close()
                }
            })
        })
    })
}
