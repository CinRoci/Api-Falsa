const express= require("express");
const {faker}= require("@faker-js/faker");

const app=express();
const port=8080;

class Usuario {
    constructor(){
        this._id = faker.string.uuid() ;
        this.firstName =faker.person.firstName();
        this.lastName = faker.person.lastName();
        this.telephone =faker.number.int;
        this.email = faker.internet.email();
        this.password=faker.internet.password();

    }
}
class Empresa {
    constructor(){
        this._id = faker.string.uuid();
        this.firstName =faker.person.firstName();
        this.lastName = faker.person.lastName();
        // this.direccion={
        //     calle:faker.location.secondaryAddress(),
        //     ciudad:faker.location.city(),
        //     estado:faker.location.state(),
        //     codigoPostal:faker.location.countryCode(),
        //     pais:faker.location.country()
        // };
    }
}
const usuario= new Usuario();
const empresa= new Empresa();
const arrayUsuarioEmpresa=[usuario,empresa];

app.get ("/usuario", (req,res)=>{
    return res.status(200).json(usuario);
});

app.get ("/empresa", (req,res)=>{
    return res.status(200).json(empresa);
});
app.get ("/usuario-empresa", (req,res)=>{
    return res.status(200).json(arrayUsuarioEmpresa);
});

app.listen(port, ()=>
console.log(`conexion con el server en el puerto ${port}`)
);