const db = require('../../config/db')
const {age, date, graduation} = require('../../lib/utils')


module.exports= {

    all(callback){
        db.query(`SELECT * FROM students
        ORDER BY name  DESC`, function(err,results){
            if (err) throw `Database error ${err}`
            callback(results.rows)
        })

    },


    create(data,callback){

        const query= `
            INSERT INTO students (
                name,
                avatar_url,
                email,
                birth_date,
                hoursperweek,
                grade,
                teacher_id
            ) VALUES ($1,$2,$3,$4,$5,$6,$7)
            RETURNING id 
        `

        const values = [
            data.name,
            data.avatar_url,
            data.email,
            date(data.birth).iso,
            data.hours,
            data.grade,
            data.teacher
        ]

        db.query(query,values, function(err,results){
            if (err) throw `Database error ${err}`
            callback(results.rows[0])
        })
    },

    find(id,callback){
        db.query(`SELECT students.*, teachers.name AS teacher_name
        FROM students 
        LEFT JOIN teachers ON (students.teacher_id = teachers.id)
        WHERE students.id = $1`, [id], function(err,results){
            if(err) throw `Database error ${err}`
            callback(results.rows[0])
        })
    },

    

    update(data,callback){
        const query = `
        UPDATE students SET
            name =($1),
            avatar_url =($2),
            email  =($3),
            birth_date=($4),
            hoursperweek=($5),
            grade=($6),
            teacher_id = ($7),
        WHERE id= $8
        `
        const values =[
            data.name,
            data.avatar_url,
            data.email,
            date(data.birth).iso,
            data.hours,
            data.grade,
            data.teacher,
            data.id        
        ]

        db.query(query,values, function(err,results){
            if (err) throw `Database error ${err}`
            callback()
        })
    },

    delete(id,callback){
        db.query(`DELETE FROM students WHERE id =$1`, [id], function(err,results){
            if (err) throw `Database error ${err}`
            return callback()
        })
    },

    teachersSelectOptions(callback){
        db.query(`SELECT name, id FROM teachers`, function(err,results){
            if (err) throw `Database error`

            callback(results.rows)
        })
    }
    



}