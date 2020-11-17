var video;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	volume.innerHTML = "100%";
	video.play();
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Pause Video");
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Slower");
	console.log(video.playbackRate);
	video.playbackRate *= 0.9;
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Faster");
	console.log(video.playbackRate);
	video.playbackRate *= 1.1;
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skipping ahead");
	console.log(video.currentTime);
	video.currentTime += 5;
})

document.querySelector("#mute").addEventListener("click", function() {
	console.log("mute");
	
	if (video.muted == true) {
		console.log(video.muted)
		video.muted = false;
		this.innerHTML = "Mute"
	}
	else {
		console.log(video.muted);
		video.muted = true;
		this.innerHTML = "Unmute"
	}
})

document.querySelector("#volumeSlider").addEventListener("click", function() {
	console.log("Volume Slider");
	console.log("Current Volume");
	console.log(this.value);
	video.volume = this.value / 100;
	volume.innerHTML = this.value + "%";
})

document.querySelector("#old").addEventListener("click", function() {
	console.log("Old");
	video.classList.add("oldTime");
})

document.querySelector("#original").addEventListener("click", function() {
	console.log("Original");
	video.classList.remove("oldTime");
})