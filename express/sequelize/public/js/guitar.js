$('#seeMore').on('click', function(event){
  event.preventDefault()
  //ajax request
  $.get('/guitars', function(data){
    //res.send('get mafucka')
    console.log('data is ' + JSON.stringify(data))
  })
})
