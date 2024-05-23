/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
const mongoose = require('mongoose')

if (process.argv.length<3) {
  console.log('give password as argument')
  process.exit(1)
}

const password = process.argv[2]

const url =
  `mongodb+srv://duanegadama:${password}@cluster0.4zhouvb.mongodb.net/noteApp?retryWrites=true&w=majority&appName=Cluster0`

mongoose.set('strictQuery',false)

mongoose.connect(url)

const noteSchema = new mongoose.Schema({
  content: String,
  important: Boolean,
})

const Note = mongoose.model('Note', noteSchema)

const note = new Note({
  content: 'Callback-functions suck',
  important: true,
})

note.save().then(result=>{
  console.log('note saved!')
  mongoose.connection.close()
})

//Note.find({}).then(result => {
//    result.forEach(note => {
//      console.log(note)
//    })
//    mongoose.connection.close()
//  })