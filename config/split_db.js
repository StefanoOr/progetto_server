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
        const query = "INSERT INTO actor_group(id,actor_id) VALUES(?,?)"
        const [rows, fields] = await (await connection).execute(query, [ _actorGroup.id, _actorGroup.actor_id] );
        console.log("rows", rows)
        console.log("fields", fields)


    } catch (e) {
        console.error("error insert", e)
    }
}

const setEnum = async function (_enum) {
    try {
        const query = "INSERT INTO enum(id,value_num,value_string,recorsiveNum) VALUES(?,?)"
        const [rows, fields] = await (await connection).execute(query, [ _enum.id, _enum.value_num,_enum.value_string,_enum.recorsiveNum] );
        console.log("rows", rows)
        console.log("fields", fields)


    } catch (e) {
        console.error("error insert", e)
    }
}

const setEvent = async function (_event) {
    try {
        const query = "INSERT INTO event (id,name,description,resource,output_product,Kfact,actor_group,help) VALUES(?,?)"
        const [rows, fields] = await (await connection).execute(query, [ _event.id, _event.name,_event.description,
            _event.resource,_event.output_product,_event.Kfact,_event.actor_group,_event.help] );
        console.log("rows", rows)
        console.log("fields", fields)


    } catch (e) {
        console.error("error insert", e)
    }
}

const setEventResult = async function (_eventResult) {
    try {
        const query = "INSERT INTO event_result (id,name,description,quantity,product_id,type,actor_id,product_detail_id,datetime,id_event,producer_id,operator_id) VALUES(?,?)"
        const [rows, fields] = await (await connection).execute(query, [ _eventResult.id, _eventResult.name,_eventResult.description,
            _eventResult.quantity,_eventResult.product_id,_eventResult.type,_eventResult.actor_id,_eventResult.product_id,_eventResult.product_id,_eventResult.operator_id] );
        console.log("rows", rows)
        console.log("fields", fields)


    } catch (e) {
        console.error("error insert", e)
    }
}

const setOperator = async function (_operator) {
    try {
        const query = "INSERT INTO operator (id,name,surname,address,user,password,producer_id,type,sup_op) VALUES(?,?)"
        const [rows, fields] = await (await connection).execute(query, [ _operator.id, _operator.name,_operator.surname,
            _operator.address,_operator.user,_operator.password,_operator.product_id,_operator.type,_operator.sup_op] );
        console.log("rows", rows)
        console.log("fields", fields)


    } catch (e) {
        console.error("error insert", e)
    }
}


const setParameter = async function (_parameter) {
    try {
        const query = "INSERT INTO parameter (id,name,mandatory,type,detail,event_id) VALUES(?,?)"
        const [rows, fields] = await (await connection).execute(query, [ _parameter.id, _parameter.name,_parameter.mandatory,
            _parameter.type,_parameter.detail,_parameter.event_id] );
        console.log("rows", rows)
        console.log("fields", fields)


    } catch (e) {
        console.error("error insert", e)
    }
}

const setParameteDetail = async function (_parameterDetail) {
    try {
        const query = "INSERT INTO parameter_detail (id,name,mandatory,type,detail,event_id) VALUES(?,?)"
        const [rows, fields] = await (await connection).execute(query, [ _parameterDetail.id,_parameterDetail.val_min,_parameterDetail.val_max,
            _parameterDetail.dim_max,_parameterDetail.fixed,_parameterDetail.help_param,_parameterDetail.hash_type,_parameterDetail.url_upload,
            _parameterDetail.photo_upload,_parameterDetail.enum_id] );
        console.log("rows", rows)
        console.log("fields", fields)


    } catch (e) {
        console.error("error insert", e)
    }
}


const setProducer = async function (_producer) {
    try {
        const query = "INSERT INTO producer (id,name,description,website) VALUES(?,?)"
        const [rows, fields] = await (await connection).execute(query, [ _producer.id,_producer.name,_producer.description,_producer.website] );
        console.log("rows", rows)
        console.log("fields", fields)


    } catch (e) {
        console.error("error insert", e)
    }
}

const setProduct = async function (_product) {
    try {
        const query = "INSERT INTO product (id,min_time_intervall,producer_id,finish) VALUES(?,?)"
        const [rows, fields] = await (await connection).execute(query, [ _product.id,_product.min_time_intervall,_product.producer_id,_product.finish] );
        console.log("rows", rows)
        console.log("fields", fields)


    } catch (e) {
        console.error("error insert", e)
    }
}



const setProductDetail = async function (_productDetail) {
    try {
        const query = "INSERT INTO product_detail (id,name,description,quantity,type,unit_measure,product_id,residualPerc) VALUES(?,?)"
        const [rows, fields] = await (await connection).execute(query, [ _productDetail.id,_productDetail.name,_productDetail.description,
            _productDetail.quantity,_productDetail.type,_productDetail.unit_measure,_productDetail.product_id,_productDetail.residualPerc] );
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