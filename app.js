const express = require('express')
const app = express()

var datenow = new Date()
var hours = datenow.getHours()
var day = datenow.getDay()

app.use((req, res, next) => {
    if(day >= 1 && day <= 5 && hours >= 9 && hours <= 17 )
    {
        next()
    }
    else 
    {
        
        res.render('pages/pageerror')
    }
})

    app.set('views', './views')
    app.set('view engine', 'pug')

    app.use(express.static('public'))

    app.get('/', (req,res) => {
        res.render('pages/home', {
            title: 'Accueil'
        })
    })

    app.get('/contact', (req,res) => {
        res.render('pages/contact', {
            tile: 'Contactez nous'
        })
    })

    app.get('/services', (req,res) => {
        res.render('pages/services', {
            title: 'Nos services'
        })
    })
app.listen(3000)
