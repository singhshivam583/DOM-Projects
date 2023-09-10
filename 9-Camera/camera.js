
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

let stream;

startButton.addEventListener('click', async () => {
    try {
        // Get access to the user's camera
        stream = await navigator.mediaDevices.getUserMedia({ video: true });

        // Display the camera feed in the video element
        videoElement.srcObject = stream;

        startButton.disabled = true;
        stopButton.disabled = false;
    } catch (error) {
        console.error('Error accessing the camera:', error);
    }
});

stopButton.addEventListener('click', () => {
    if (stream) {
        // Stop the camera stream and release the camera
        const tracks = stream.getTracks();
        tracks.forEach(track => track.stop());

        videoElement.srcObject = null;

        startButton.disabled = false;
        stopButton.disabled = true;
    }
});


