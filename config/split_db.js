const connection = require("../models/db");
const {ActorGroup, Actor, Enum, Event, EventResult, Operator, Parameter, ParameteDetail, Producer, Product,
    Product_detail
} = require("../models/models_table");
const actorGroup= new ActorGroup(1,1);
const actor = new Actor(2,"ste",1);
const enum_ = new Enum(1,1,"string",1);
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
console.log(actorGroup);
console.log(enum_);
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

const setActorGroup = async function (_actorGroup) {
    try {
      const id = _actorGroup.id;
      const actor_id = _actorGroup.actor_id;
        const query = "INSERT INTO actor_group(id,actor_id) VALUES(?,?)"
        const [rows, fields] = await (await connection).execute(query, [ id, actor_id] );
        console.log("rows", rows)
        console.log("fields", fields)


    } catch (e) {
        console.error("error insert", e)
    }
}

const setEnum = async function (_enum) {
    try {
    const id= _enum.id;
    const value_num= _enum.value_num;
    const value_string = _enum.value_string;
    const recorsiveNum= _enum.recorsiveNum;

        const query = "INSERT INTO enum(id,value_num,value_string,recorsiveNum) VALUES(?,?,?,?)"
        const [rows, fields] = await (await connection).execute(query, [id,value_num,value_string,recorsiveNum] );
        console.log("rows", rows)
        console.log("fields", fields)


    } catch (e) {
        console.error("error insert", e)
    }
}

const setEvent = async function (_event) {
    try {

    const id= _event.id;
    const name = _event.name;
    const description = _event.description;
    const resource = _event.resource;
    const output_product = _event.output_product;
    const kFact = _event.Kfact;
    cost actor_group = _event.actor_group;
    const help = _event.help;

        const query = "INSERT INTO event (id,name,description,resource,output_product,Kfact,actor_group,help) VALUES(?,?,?,?,?,?,?,?)"
        const [rows, fields] = await (await connection).execute(query, [ id,name,description,resource,output_product,Kfact,actor_group,help] );
        console.log("rows", rows)
        console.log("fields", fields)


    } catch (e) {
        console.error("error insert", e)
    }
}

const setEventResult = async function (_eventResult) {
    try {

    const id = _eventResult.id;
    const name = _eventResult.name;
    const description = _eventResult.description;
    const quantity = _eventResult.quantity;
    const product_id = _eventResult.product_id;
    const type = _eventResult.type;
    const actor_id = _eventResult.actor_id;
    const product_detail_id = _eventResult.product_detail_id;
    const datetime = _eventResult.datetime;
    const id_event = _eventResult.id_event;
    const producer_id = _eventResult.producer_id;
    const operator_id = _eventResult.operator_id;

        const query = "INSERT INTO event_result (id,name,description,quantity,product_id,type,actor_id,product_detail_id,datetime,id_event,producer_id,operator_id) VALUES(?,?,?,?,?,?,?,?,?,?,?,?)"
        const [rows, fields] = await (await connection).execute(query, [ id,name,description,quantity,product_id,type,actor_id,product_detail_id,datetime,id_event,
        producer_id,operator_id] );
        console.log("rows", rows)
        console.log("fields", fields)


    } catch (e) {
        console.error("error insert", e)
    }
}

const setOperator = async function (_operator) {
    try {

    const id = _operator.id;
    const name = _operator.name;
    const surname = _operator.surname;
    const address = _operator.address;
    const user = _operator.user;
    const password = _operator.password;
    const producer_id = _operator.producer_id;
    const type = _operator.type;
    const sup_op = _operator.sup_op;



        const query = "INSERT INTO operator (id,name,surname,address,user,password,producer_id,type,sup_op) VALUES(?,?,?,?,?,?,?,?,?)"
        const [rows, fields] = await (await connection).execute(query, [ id,name,surname,address,user,password,producer_id,type,sup_op] );
        console.log("rows", rows)
        console.log("fields", fields)


    } catch (e) {
        console.error("error insert", e)
    }
}


const setParameter = async function (_parameter) {
    try {

    const id = _parameter.id;
    const name = _parameter.name;
    const mandatory = _parameter.mandatory;
    const type = _parameter.type;
    const detail = _parameter.detail;
    const event_id = _parameter.event_id;

        const query = "INSERT INTO parameter (id,name,mandatory,type,detail,event_id) VALUES(?,?,?,?,?,?)"
        const [rows, fields] = await (await connection).execute(query, [ id,name,mandatory,type,detail,event_id] );
        console.log("rows", rows)
        console.log("fields", fields)


    } catch (e) {
        console.error("error insert", e)
    }
}

const setParameteDetail = async function (_parameterDetail) {
    try {

    const id =_parameterDetail.id;
    const val_min = _parameterDetail.val_min;
    const val_max = _parameterDetail.type;
    const dim_max = _parameterDetail.detail;
    const fixed = _parameterDetail.fixed;
    const help_param = _parameterDetail.help_param;
    const hash_type = _parameterDetail.hash_type;

    const url_upload = _parameterDetail.url_upload;
    const photo_upload = _parameterDetail.photo_upload;
    const enum_id = _parameterDetail.enum_id;

        const query = "INSERT INTO parameter_detail (id,val_min,val_max,dim_max,fixed,help_param,hash_type,url_upload,photo_upload,enum_id) VALUES(?,?,?,?,?,?,?,?,?,?)"
        const [rows, fields] = await (await connection).execute(query, [ id,val_min,val_max,dim_max,fixed,help_param,hash_type,url_upload,photo_upload,enum_id] );
        console.log("rows", rows)
        console.log("fields", fields)


    } catch (e) {
        console.error("error insert", e)
    }
}


const setProducer = async function (_producer) {
    try {

    const id = _producer.id;
    const name = _producer.name;
    const description = _producer.description;
    const website = _producer.website;

        const query = "INSERT INTO producer (id,name,description,website) VALUES(?,?,?,?)"
        const [rows, fields] = await (await connection).execute(query, [ id,name,description,website] );
        console.log("rows", rows)
        console.log("fields", fields)


    } catch (e) {
        console.error("error insert", e)
    }
}

const setProduct = async function (_product) {
    try {

    const id = _product.id;
    const min_time_intervall = _product.min_time_intervall;
    const producer_id = _product.producer_id;
    const finish = _product.finish;

        const query = "INSERT INTO product (id,min_time_intervall,producer_id,finish) VALUES(?,?,?,?)"
        const [rows, fields] = await (await connection).execute(query, [id,min_time_intervall,producer_id,finish] );
        console.log("rows", rows)
        console.log("fields", fields)


    } catch (e) {
        console.error("error insert", e)
    }
}



const setProductDetail = async function (_productDetail) {
    try {

    const id = _productDetail.id;
    const name = _productDetail.name;
    const description = _productDetail.description;
    const quantity = _productDetail.quantity;
    const type = _productDetail.type;
    const unit_measure = _productDetail.unit_measure;
    const product_id = _productDetail.product_id;
    const residualPerc = _productDetail.residualPerc;


        const query = "INSERT INTO product_detail (id,name,description,quantity,type,unit_measure,product_id,residualPerc) VALUES(?,?,?,?,?,?,?,?)"
        const [rows, fields] = await (await connection).execute(query, [ id,name,description,quantity,type,unit_measure,producer_id,residualPerc] );
        console.log("rows", rows)
        console.log("fields", fields)


    } catch (e) {
        console.error("error insert", e)
    }
}




setActor(actor)
setActorGroup(actorGroup)
setEnum(enum_)
setEvent(event)
setEventResult(eventResult)
setOperator(operator)
setParameter(parameter)
setParameteDetail(parameter_detail)
setProducer(producer)
setProduct(product)
setProductDetail(product_detail)