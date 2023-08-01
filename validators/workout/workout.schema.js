const yup =require("yup");


let schema = {
    workout:yup.object({
       name: yup.string().required(),
       mode:yup.string().required() ,
       equipment:yup.string().required(),
       exercise:yup.string().required(),
    })
}
module.export=schema