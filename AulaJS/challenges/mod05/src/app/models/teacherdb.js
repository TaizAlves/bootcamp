const {age, graduation, date} = require('../../lib/utils')
const db = require('../../config/db')

module.exports= {

    all(callback){
        db.query(`SELECT * FROM teachers
        ORDER BY name ASC`, function(err,results){
            if(err) throw `Database error. ${Error}`
            callback(results.rows)
        })
    },

    create(data,callback){

        const query = `
        INSERT INTO teachers(
            name,
            avatar_url,
            birth_date,
            education_level,
            class_type,
            subject,
            created_at
        ) VALUES ($1,$2,$3,$4,$5,$6,$7)
        RETURNING id   
    `

    const values = [
        req.body.name,
        req.body.avatar_url,
        date(req.body.birth).iso,
        req.body.graduation,
        req.body.location,
        req.body.subject,
        date(Date.now()).iso

    ]

    
    db.query(query,values, function(err,results){
        if(err) throw `Database error. ${err}`

        callback(results.rows[0])
        })

    },

    find(id,callback){
        db.query(`SELECT * FROM teachers WHERE id =$1`, [id], function(err,results){
            if(err) throw `Database error ${err}`
            callback(results.rows[0])
        })
    },

    update(data,callback){
        const query = `
        UPDATE teachers SET
            avatar_url=($1),
            birth_date=($2),
            education_level= ($3),
            class_type= ($4),
            subject= ($5),
            name= ($6)
        WHERE id = $7
        `

        const values = [
            data.avatar_url,
            date(data.birth).iso,
            data.graduation,
            data.location,
            data.subject,
            data.name,
            data.id
        ]

        db.query(query,values,function(err,results){
            if(err) throw `Database error. $(err)`
            callback()
        })
    },

    delete(id,callback){
        db.query(`DELETE FROM teachers WHERE id = $!`, [id], function(err, results){
            if(err) throw `Database error ${err}`

            return callback()
        })
    },

    
}