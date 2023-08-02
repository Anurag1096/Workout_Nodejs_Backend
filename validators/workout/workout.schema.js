
const yup =require("yup");


let schema = {
    workout:yup.object({
       "name": yup.string().required(),
       "mode":yup.string().required() ,
       "equipment":yup.array().max(5,"Only 5 equipment are allowed").required("atleast one equipment should be provided"),
       "exercises":yup.array().max(10,"Only 10 tags are allowed").required("atleast one tag should be provided"),
    })
}
module.exports=schema