const express=require('express')
const qrRouter=express.Router();
const QRCode=require('qrcode');

qrRouter.post("/scanQrcode",(req, res) => {
    const url=req.body.url;
    //console.log(url);
    if(url.length===0){
        res.send("Empty Data")
    }
    QRCode.toDataURL(url,function(err,url){
        res.send(url);
    })
})

module.exports=qrRouter;