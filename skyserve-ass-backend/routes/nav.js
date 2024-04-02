const express = require("express");
const JsonDatadb = require("./../routes/model");
const router = express.Router();

router.post('/mymap/save',async (req,res) => {
    try {
        const jsonData = new JsonDatadb({data: req.body});
        await jsonData.save();
        res.json({success:true, message:'Data saved successfully'});
    }catch (error) {
        res.status(500).json({success:false, message: 'Error saving data'});
    }
});

router.get('/mymap/fetch',async (req,res) => {
    try {
        const jsonData = await JsonDatadb.findOne();
        res.json({success: true, data: jsonData.data});
    }catch (error) {
        res.status(500).json({success: false, message:'Error fetching data'});
    }
});


module.exports = router;