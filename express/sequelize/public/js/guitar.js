$('#seeMore').on('click', function(event){
  event.preventDefault()
  //ajax request
  $.get('/guitars', function(data){
    console.log('data is ' + JSON.stringify(data))

    
  })
})
