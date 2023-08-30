const { isUtf8 } = require('buffer');
var express = require('express');
var router = express.Router();
var fs = require("fs")


/* GET home page. */
router.get('/', function(req, res, next) {
    fs.readdir("./upload",{withFileTypes:true},function(err,file){
        res.render("index",{file:file})
    })
 })
 router.get('/back', function(req, res, next) {
  res.redirect("back")
 })
 router.post('/updatename/:oldfilename',function(req,res){
    fs.rename(`./upload/${req.params.oldfilename}`,`./upload/${req.body.filename}`,function(err){
        res.redirect("back")
    })
 })
 router.get('/file/:filename', function(req, res, next) {
    fs.readdir("./upload",{withFileTypes:true},function(err,file){
        fs.readFile(`./upload/${req.params.filename}`,"utf8",function(err,filedata){
            res.render("opened",{file:file,filename:req.params.filename,filedata})
        })
    })
 }) 
 router.post('/update/:filename', function(req, res, next) {
   fs.writeFile(`./upload/${req.params.filename}`,req.body.data,function(err){
    res.redirect("back")    
   })
 })
 router.get('/delete-file/:filename',function(req,res){
    fs.unlink(`./upload/${req.params.filename}`,function(err){
        res.redirect("back")
    })
 })
 router.get('/delete-folder/:foldername',function(req,res){
    fs.rmdir(`./upload/${req.params.foldername}`,function(err){
        res.redirect("back")
    })
 })
//  router.get('/delete/:type/:filename',function(req,res){
//     if(req.params.type === "folder"){
//         fs.rmdir(`./upload/${req.params.foldername}`,function(err){
//             res.redirect("back")
//         })
//     }
//     else{
//         fs.unlink(`./upload/${req.params.filename}`,function(err){
//             res.redirect("back")
//         })
//     }
//  })
router.get('/createfile',function(req,res){
    fs.writeFile(`./upload/${req.query.filename}`,"",function(err){
        res.redirect("back")
    })
})
router.get("/createfolder",function(req,res){
    fs.mkdir(`./upload/${req.query.foldername}`,function(err){
        res.redirect("back")
    })
})



module.exports = router;
