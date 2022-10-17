const TutorialModel=require("../Models/tutorial.model")

exports.findAll= (req,res)=>{


    const titleData=req.query.title;

    var condition = titleData ? {title:{$regex: new RegExp(titleData)}}: {};

    console.log(new RegExp(titleData));

    TutorialModel.find(condition)
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message
        })
    })
}

exports.create= async (req,res)=>{


   
    // const userId=req.params.id;
    // const userById = await UserModel.findById(userId);

    const data=req.body;
    const Tutorial= new TutorialModel(data);

    Tutorial.save()
    .then(data=>{
        if(!data){
            res.status(404).send({message:"Something went wrong"});
        }
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({message:err.message});
    })

    
}



exports.update = (req,res)=>{

const id=req.params.id;

TutorialModel.findByIdAndUpdate(id,req.body)
.then(data=>{
    if(!data){
        res.status(404).send({message:"Not able to update"});
    }
    res.send(data);
})
.catch(err=>{
    res.status(500).send({
        message:err.message
    })
})
}

exports.delete = (req,res)=>{
const id=req.params.id;

    TutorialModel.findByIdAndRemove(id)
    .then(data=>{
        if(!data){
            res.status(404).send({message:"Not able to delete"});
        }
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message
        })
    })
}

exports.deleteAll=(req,res)=>{
    TutorialModel.deleteMany({})
    .then(data=>{
        res.send(data);
    })
    .catch(err=>{
        res.status(500).send({
            message:err.message
        })
    })
}



