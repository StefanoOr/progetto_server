class ActorGroup{

    constructor(_id,_actor_id) {
        this.id=_id;
        this.actor_id=_actor_id;
    }

}

class Actor{

    constructor(_id,_name,_producer_id) {
        this.id=_id;
        this.name=_name;
        this.producer_id=_producer_id;

    }
}

class Enum{
    constructor(_id,_value_num,_value_string,_recorsiveNum) {
        this.id=_id;
        this.value_num=_value_num;
        this.value_string=_value_string;
        this.recorsiveNum=_recorsiveNum;
    }
}

class Event{
    constructor(_id,_name,_description,_resource,_output_product,_Kfact,_actor_group,_type,_help) {
        this.id=_id;
        this.name=_name;
        this.description=_description;
        this.resource=_resource;
        this.output_product=_output_product;
        this.Kfact=_Kfact;
        this.actor_group=_actor_group;
        this.type=_type;
        this.help=_help;
    }
}

class EventResult{

    constructor(_id,_name,_description,_quantity,_product_id,_type,_actor_id,
                _product_detail_id,_datetime,_id_event,_producer_id,_operator_id) {

        this.id=_id;
        this.name=_name;
        this.description=_description;
        this.quantity=_quantity;
        this.product_id=_product_id;
        this.type=_type;
        this.actor_id=_actor_id;
        this.product_detail_id=_product_detail_id;
        this.datetime=_datetime;
        this.id_event=_id_event;
        this.producer_id=_producer_id;
        this.operator_id=_operator_id;
    }
}

class Operator{
    constructor(_id,_name,_surname,_address,_user,_password,_producer_id,_type,_sup_op) {

        this.id=_id;
        this.name=_name;
        this.surname=_surname;
        this.address=_address;
        this.user=_user;
        this.password=_password;
        this.producer_id=_producer_id;
        this.type=_type;
        this.sup_op=_sup_op;

    }
}

class Parameter{

    constructor(_id,_name,_mandatory,_type,_detail,_event_id) {

        this.id=_id;
        this.name=_name;
        this.mandatory=_mandatory;
        this.type=_type;
        this.detail=_detail;
        this.event_id=_event_id;

    }
}

class ParameteDetail{
    constructor(_id,_val_min,_val_max,_dim_max,_fidex,_help_param,
                _hash_type,_url_upload,_photo_upload,_enum_id) {

        this.id=_id;
        this.val_min=_val_min;
        this.val_max=_val_max;
        this.dim_max=_dim_max;
        this.fixed=_fidex;
        this.help_param=_help_param;
        this.hash_type=_hash_type;
        this.url_upload=_url_upload;
        this.photo_upload=_url_upload;
        this.enum_id=_enum_id;
    }
}

class Producer{
    constructor(_id,_name,_description,_website) {
        this.id=_id;
        this.name=_name;
        this.description=_description;
        this.website=_website;
    }
}

class Product {
    constructor(_id,_min_time_intervall,_producer_id,_finish) {
        this.id=_id;
        this.min_time_intervall=_min_time_intervall;
        this.producer_id=_producer_id;
        this.finish=_finish;
    }
}

class Product_detail{
    constructor(_id,_name,_description,_quantity,_type,_unit_measure,_product_id,_residualPerc) {

        this.id=_id;
        this.name=_name;
        this.description=_description;
        this.quantity=_quantity;
        this.type=_type;
        this.unit_measure=_unit_measure;
        this.product_id=_product_id;
        this.residualPerc=_residualPerc;

    }
}
module.exports = {ActorGroup, Actor, Enum, Event, EventResult, Operator, Parameter, ParameteDetail, Producer, Product, Product_detail}
