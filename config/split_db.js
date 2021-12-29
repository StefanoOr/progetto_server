const connection = require("../models/db");
const {ActorGroup, Actor, Enum, Event, EventResult, Operator, Parameter, ParameteDetail, Producer, Product,
    Product_detail
} = require("../models/models_table");
const actorGROUP= new ActorGroup(1,1);
const actor = new Actor(2,"ste",1);
const enum1 = new Enum(1,1,"string",1);
const event = new Event(1,"consegna","ciao","ciao","prova",0.1,"vendite",true,"prova a cercare");
const eventResult = new EventResult(1,"result","piccola descrizione",2);
const operator = new Operator(2,"stefano","bast","milano","nick","rocco",
    1,"boh",true);
const parameter = new Parameter(1,"para",true,"detail","azione");
const parameter_detail= new ParameteDetail(1,1,1,1,1,"help","ciao","urlUpload","photo",1);
const producer = new Producer(1,"rocco","22 anni ciao","www.ess.com");
const product = new Product("1",1,"2",0 );
const product_detail = new Product_detail("1","name","description",10,true,"unit ",
    "productid",1);



console.log(actor);
console.log(actorGROUP);
console.log(enum1);
console.log(event);
console.log(eventResult);
console.log(operator);
console.log(parameter);
console.log(parameter_detail);
console.log(producer);
console.log(product);
console.log(product_detail);

const setActor = async function (_actor) {
    try {
        console.log("table_model", _actor)

        const id = _actor.id;
        const name = _actor.name;
        const producer = _actor.producer_id
        const query = "INSERT INTO actor(id,name, producer_id) VALUES(?,?,?)"
        /*query è la query come la scriveresti in sql
        * i valori sono sostituiti da un ?
        * in ordine, il primo preleva l'id
        * il secondo il nome
        * il terzo il producer*/
        const [rows, fields] = await (await connection).execute(query, [ id, name, producer] );
        console.log("rows", rows)
        console.log("fields", fields)


    } catch (e) {
        console.error("error insert", e)
    }
}

const setActorGroup = async function (_actorGROUP) {
    try {
        const query = "INSERT INTO actor_group(id,actor_id) VALUES(?,?)"
        const [rows, fields] = await (await connection).execute(query, [ _actorGROUP.id, _actorGROUP.actor_id] );
        console.log("rows", rows)
        console.log("fields", fields)


    } catch (e) {
        console.error("error insert", e)
    }
}

setActor(actor)
setActorGroup(actorGROUP)
