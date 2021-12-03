const video = document.querySelector(".player");
const canvas = document.querySelector(".photo");
const ctx = canvas.getContext("2d");
const strip = document.querySelector(".strip");
const snap = document.querySelector(".snap");

function getVideo() {
    navigator.mediaDevices.getUserMedia({video: true , audio: false })
    .then(localMediaStream => {
        console.log(localMediaStream);
        video.srcObject = localMediaStream;
        // video.src = window.URL.createObjectURL(localMediaStream)
        video.play()
    } )
    .catch(err =>{
        console.error(`OH NOOO!`,err  );
    } )
}


function paintToCanavas() {
    const width = video.videoWidth;
    const height = video.videoHeight;
    // console.log(width , height);
    canvas.width = width;
    canvas.height = height;


   return setInterval( () =>{
        ctx.drawImage(video,0,0,width,height  )

    }  ,16)
}

function takePhoto() {
    snap.currentTime = 0;
    snap.play();

    const data = canvas.toDataURL("image/jpeg");
    // console.log(data);
    const link = document.createElement("a");
    link.href = data;
    link.setAttribute("download","your screenshort");
    // link.textContent = "download Image"; this will show a download image link ,user will click it and the ss will be downloaded here
    strip.insertBefore(link,strip.firstChild);

}

video.addEventListener("canplay",paintToCanavas )

//  paintToCanavas()
// console.log(getVideo());
getVideo()




