Router.route('/test', { where: 'server'}).get(function() {
  this.response.writeHead(200, {'Content-Type': 'application/json'});
  this.response.end(JSON.stringify({
    message: "Touched the server side",
  }));
});


Router.route('/getPersonByCpf/:cpf/:birthDate', {where: 'server'}).get(function() {
  this.response.writeHead(200, {'Content-Type': 'application/json'});

  var cpf = this.params.cpf;
  var birthDate = new Date(this.params.birthDate);

  const person = Persons.findOne({
    'cpf': cpf,
    // 'birthDate': birthDate,
  });

  console.log(person);
  this.response.end(JSON.stringify(person));

})
