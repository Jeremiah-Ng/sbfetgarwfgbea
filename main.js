
function zepic(){
    console.log("no")
    Webcam.snap(function (data_uri){
var output="<img id='picture' src='"+data_uri+"'>"
document.getElementById("result").innerHTML=output;
    })
}
console.log(ml5.version+"version")
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/7UE27EiqS/model.json",modelLoaded);
function modelLoaded(){
    console.log("modelLoaded");
}
//$('#help').click(function(){ $('#imgupload').trigger('click'); });    