const progressBar = document.querySelector(".progress");
const downloadText = document.querySelector(".download-text");
const downloadBtn = document.querySelector(".download-btn");
const downloadTime = document.querySelector(".download-time");

downloadBtn.addEventListener("click",()=>{
    downloadBtn.disabled = true;
    downloadBtn.style.opacity = 0.8;
    const startTime = Date.now();
    console.log(startTime);
    
    let count = 1;
    const intervalId = setInterval(()=>{
        progressBar.style.width = count+'%';
        downloadText.innerHTML = count+'%';
        count++;
    },50);

    setTimeout(()=>{
        const endTime = Date.now();
        const downloadDuration = (endTime - startTime) / 1000;
        downloadBtn.innerHTML = 'Downloaded';
        downloadTime.innerHTML = `Download time: ${downloadDuration}s`;
        downloadTime.classList.add("download-time-style")
        clearInterval(intervalId);
    },50*100);
})