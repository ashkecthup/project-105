//https://teachablemachine.withgoogle.com/models/XLqVhNlEm/

Webcam.set({
    width:350,
    height:300,
    img_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="captured_image" src="'+data_uri+'"/>';
    });
 }

 console.log('mi5.version:',ml5.version);
 classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/L2xQB6bzI/model.json',modelLoaded);
 function modelLoaded(){
     console.log("modelLoaded");

 }

 function check(){
     img=document.getElementById("captured_image");
     classifier.classify(img,gotresult);

     
 }


 function gotresult(error,results){

    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        document.getElementById("result_name").innerHTML=results[0].label;
        document.getElementById("result_accuracy").innerHTML=results[0].confidence.toFixed(3);
    }
    
 }
 