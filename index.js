const captionBox = document.querySelector(".caption");
setTimeout(() => {
    captionBox.setAttribute("style", "animation: fadeOut 2s;");
    setTimeout(() => {
        captionBox.remove();
    }, 2000);
}, 5000)

const video = document.getElementById("facecam");
let startWebCam = () => {
    if (navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function (stream) {
                video.srcObject = stream;
                console.log(stream);
            })
            .catch(function (err0r) {
                console.log("Something went wrong!");
            });
    }
}
startWebCam();

let canvas = document.querySelector("cavas");
let cap = () => {
    canvas.width = video.videoWidth;
    canvas.height = video.videoHeight;
    canvas.getContext('2d').drawImage(video, 0, 0, video.videoWidth, video.videoHeight);
    const playImage = new Image();
    playImage.src = 'path to image asset';
    playImage.onload = () => {
        const startX = (video.videoWidth / 2) - (playImage.width / 2);
        const startY = (video.videoHeight / 2) - (playImage.height / 2);
        canvas.getContext('2d').drawImage(playImage, startX, startY, playImage.width, playImage.height);
        canvas.toBlob() = (blob) => { // Canvas element gives a callback to listen to the event after blob is prepared from canvas
            const img = new Image();
            img.src = window.URL.createObjectUrl(blob); // window object with static function of URL class that can be used to get URL from blob
        }
    }
}