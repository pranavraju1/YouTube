let videoId = sessionStorage.getItem("videoId");
console.log(videoId);
window.addEventListener("load", () => {
  // let videoId = "pOAwQ0FkVz8";
  if (YT) {
    new YT.Player("videoplayer", {
      height: "100%",
      width: "100%",
      videoId,
    });
  }
});
