
// const videoElement = document.getElementById('box');
// const Button = document.getElementById('control');
// // const stopButton = document.getElementById('stop-camera');

// var flag=1;
// let stream;
// async function camera(){
// if(flag==1){
//     Button.addEventListener('click', async() => {
//         videoElement.innerHTML=`<video style="border-radius:5px;" id="camera-feed" height="370px" width="500px" controls autoplay></video>`
//         const video=document.getElementById('camera-feed')
//         // Get access to the user's camera
//         stream = await navigator.mediaDevices.getUserMedia({ video: true });
//         video.srcObject = stream;
//         Button.innerHTML='Close Camera'
//         flag=0;
//     });
// }
// else(){
//     Button.addEventListener('click', async() => {
//         videoElement.innerHTML=``;
//         const video=document.getElementById('camera-feed')
//         // Get access to the user's camera
//         stream = await navigator.mediaDevices.getUserMedia({ video: false });
//         video.srcObject = stream;
//         Button.innerHTML='Close Camera'
//         flag=1;
//     });
// }
// }
// camera();

const videoElement = document.getElementById('camera-feed');
const startButton = document.getElementById('start-camera');
const stopButton = document.getElementById('stop-camera');
const canvas = document.getElementById('snap');
const snapButton = document.getElementById('snapshot');
const download = document.getElementById("download");

// document.getElementById('btn').disabled = true
// document.getElementById('btn').style.backgroundColor = "#0056b3" ;

let stream;

startButton.addEventListener('click', async () => {
    try {
        // Get access to the user's camera
        stream = await navigator.mediaDevices.getUserMedia({ video: true });

        // Display the camera feed in the video element
        videoElement.srcObject = stream;

        startButton.disabled = true;
        stopButton.disabled = false;
        snapButton.disabled = false;

        startButton.style.backgroundColor="#0056b3"
        stopButton.style.backgroundColor="#007bff"
    } catch (error) {
        console.error('Error accessing the camera:', error);
    }
});

stopButton.addEventListener('click', () => {
    if (stream) {
        // Stop the camera stream and release the camera
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());

        videoElement.srcObject = null ;

        startButton.disabled = false ;
        stopButton.disabled = true ;
        // snapButton.disabled = true ;
        document.getElementById('btn').disabled = true
        document.getElementById('btn').style.backgroundColor = "#0056b3" ;

        startButton.style.backgroundColor="#007bff"
        stopButton.style.backgroundColor="#0056b3"
    }
});

snapButton.addEventListener('click', () => {
    if(stream && stopButton.disabled){
        alert('Please Open Your Camera')
    }
    else if(stopButton.disabled == false && startButton.disabled == false){
        alert('Please Open Your Camera')
    }
    else{
        // Capture a snapshot from the video feed and display it on the canvas
        canvas.width = videoElement.videoWidth;         // actual width of video 
        canvas.height = videoElement.videoHeight;       // catual height of video
        canvas.getContext('2d').drawImage(videoElement, 0, 0, canvas.width, canvas.height);
        // canvas.getContext('2d').drawImage(videoElement, 0, 0, 500, 372);
        document.getElementById('btn').disabled = false;
        document.getElementById('btn').style.backgroundColor = "#007bff" ;
    }
});
download.addEventListener('click',() => {
    if(startButton.disabled==false){
        alert('Please Take Snap');
        document.getElementById('btn').disabled = true
        document.getElementById('btn').style.backgroundColor = "#0056b3" ;

    }else{
        const image = canvas.toDataURL("image/png")
        // .replace("image/png", "image/octet-stream");
        // download.setAttribute("href", image);
        // download.setAttribute("download","archive.png");
        download.href = image;
        document.getElementById('btn').disabled = true
        document.getElementById('btn').style.backgroundColor = "#0056b3" ;
    }
});



