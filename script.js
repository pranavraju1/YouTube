// //follow the steps in api key

// const API_KEY = "AIzaSyBR0z-s1rxrqxKAVVbeuJ2hXRbjLCoUpJ8";

// const BASE_URL = "https://www.googleapis.com/youtube/v3"; //will get this from documentaion above

// const right2_container = document.getElementsByClassName("right2-container")[0];

// // for (k = 0; k < 2; k++) {
// //   const right2_row = document.createElement("div");
// //   right2_row.className = "right2-row";
// //   let i = 0;
// //   let j = 3;
// //   if (i == 4) {
// //     j = 4;
// //   }
// //   while (i <= j) {
// //     let videoId;
// //     let videoname;
// //     let channelID;
// //     let chanelname;
// //     let chanelLogo;
// //     let videothubnail;
// //     let discription;
// //     let commentCount;
// //     let likeCount;
// //     let viewCount;

// //     async function fetchVideo(searchQuery, maxResults) {
// //       const response = await fetch(
// //         `${BASE_URL}/search?key=${API_KEY}&q=${searchQuery}&maxResults=${maxResults}&part=snippet`
// //       );
// //       const data = await response.json();
// //       console.log(data);
// //       videoId = data.items[i].id.videoId;
// //       channelID = data.items[i].snippet.channelId;
// //       videoname = data.items[i].snippet.title;
// //       chanelname = data.items[i].snippet.channelTitle;
// //       videothubnail = data.items[i].snippet.thumbnails.medium.url;
// //       discription = data.items[i].snippet.description;
// //       // console.log(channelID);
// //       // console.log("video id: " + videoId);

// //       getVideoStats(videoId);
// //       async function getVideoStats(videoId) {
// //         const response = await fetch(
// //           `${BASE_URL}/videos?key=${API_KEY}&part=statistics&id=${videoId}`
// //         );
// //         const data1 = await response.json();
// //         console.log(data1);
// //         commentCount = data1.items[0].statistics.commentCount;
// //         likeCount = data1.items[0].statistics.likeCount;
// //         viewCount = data1.items[0].statistics.viewCount;
// //       }

// //       getChannelLogo(channelID);
// //       async function getChannelLogo(channelID) {
// //         const response = await fetch(
// //           `${BASE_URL}/channels?key=${API_KEY}&part=snippet&id=${channelID}`
// //         );
// //         const data2 = await response.json();
// //         console.log(data2);
// //         chanelLogo = data2.items[0].snippet.thumbnails.medium.url;
// //         // displaydetails();
// //         startBuilding();
// //       }
// //       function displaydetails() {
// //         console.log(videoname);
// //         console.log(videoId);
// //         console.log(videothubnail);
// //         console.log(chanelname);
// //         console.log(channelID);
// //         console.log(chanelLogo);
// //         console.log(viewCount);
// //       }

// //       function startBuilding() {
// //         console.log("start building");
// //         const right2_row_elements = document.createElement("div");
// //         right2_row_elements.className = "right2-row-elements";

// //         const div1 = document.createElement("div");
// //         const img1 = document.createElement("img");
// //         img1.id = "videoImage";
// //         img1.src = videothubnail;
// //         div1.appendChild(img1);
// //         right2_row_elements.appendChild(div1);

// //         const right2_details = document.createElement("div");
// //         right2_details.className = "right2-details";
// //         const div2 = document.createElement("div");
// //         const img2 = document.createElement("img");
// //         img2.id = "channelImage";
// //         img2.style = "border-radius: 100%";
// //         img2.src = chanelLogo;
// //         div2.appendChild(img2);
// //         right2_details.appendChild(div2);

// //         const right2_info = document.createElement("div");
// //         right2_info.className = "right2-info";
// //         const right2_info_1 = document.createElement("div");
// //         right2_info_1.className = "right2-info-1";
// //         right2_info_1.innerText = videoname;
// //         right2_info.appendChild(right2_info_1);
// //         const right2_info_2 = document.createElement("div");
// //         right2_info_2.className = "right2-info-2";
// //         right2_info_2.innerText = chanelname + " " + viewCount;
// //         right2_info.appendChild(right2_info_2);
// //         right2_details.appendChild(right2_info);

// //         right2_row_elements.appendChild(right2_details);
// //         right2_row.appendChild(right2_row_elements);
// //       }
// //     }
// //     fetchVideo("", 4); //keep it empty for first page result
// //     //BASE_URL?key="...."&q="...."
// //     //the 'icc' is passed via q
// //     //the 25 specifies the number of videos that needs to be fetched (in documentation)
// //     //int the console you can see items as 25
// //     //snippet gives you video info thumbnail ,publish time

// //     right2_container.appendChild(right2_row);
// //     i++;
// //   }
// // }

// for (let k = 0; k < 2; k++) {
//   const right2_row = document.createElement("div");
//   right2_row.className = "right2-row";
//   for (let i = 0; i <= 3; i++) {
//     let videoId;
//     let videoname;
//     let channelID;
//     let chanelname;
//     let chanelLogo;
//     let videothubnail;
//     let discription;
//     let commentCount;
//     let likeCount;
//     let viewCount;

//     async function fetchVideo(searchQuery, maxResults) {
//       const response = await fetch(
//         `${BASE_URL}/search?key=${API_KEY}&q=${searchQuery}&maxResults=${maxResults}&part=snippet`
//       );
//       const data = await response.json();
//       // console.log(data);
//       videoId = data.items[i].id.videoId;
//       channelID = data.items[i].snippet.channelId;
//       videoname = data.items[i].snippet.title;
//       chanelname = data.items[i].snippet.channelTitle;
//       videothubnail = data.items[i].snippet.thumbnails.medium.url;
//       discription = data.items[i].snippet.description;
//       // console.log(channelID);
//       // console.log("video id: " + videoId);

//       getVideoStats(videoId);
//       async function getVideoStats(videoId) {
//         const response = await fetch(
//           `${BASE_URL}/videos?key=${API_KEY}&part=statistics&id=${videoId}`
//         );
//         const data1 = await response.json();
//         // console.log(data1);
//         commentCount = data1.items[0].statistics.commentCount;
//         likeCount = data1.items[0].statistics.likeCount;
//         viewCount = data1.items[0].statistics.viewCount;
//       }

//       getChannelLogo(channelID);
//       async function getChannelLogo(channelID) {
//         const response = await fetch(
//           `${BASE_URL}/channels?key=${API_KEY}&part=snippet&id=${channelID}`
//         );
//         const data2 = await response.json();
//         // console.log(data2);
//         chanelLogo = data2.items[0].snippet.thumbnails.medium.url;
//         // displaydetails();
//         startBuilding();
//         createSub();
//       }
//       function displaydetails() {
//         console.log(videoname);
//         console.log(videoId);
//         console.log(videothubnail);
//         console.log(chanelname);
//         console.log(channelID);
//         console.log(chanelLogo);
//         console.log(viewCount);
//       }

//       function startBuilding() {
//         // console.log("start building");
//         const right2_row_elements = document.createElement("div");
//         right2_row_elements.className = "right2-row-elements";

//         const div1 = document.createElement("div");
//         const img1 = document.createElement("img");
//         img1.id = "videoImage";
//         img1.src = videothubnail;
//         div1.appendChild(img1);
//         right2_row_elements.appendChild(div1);

//         const right2_details = document.createElement("div");
//         right2_details.className = "right2-details";
//         const div2 = document.createElement("div");
//         const img2 = document.createElement("img");
//         img2.id = "channelImage";
//         img2.style = "border-radius: 100%";
//         img2.src = chanelLogo;
//         div2.appendChild(img2);
//         right2_details.appendChild(div2);

//         const right2_info = document.createElement("div");
//         right2_info.className = "right2-info";
//         const right2_info_1 = document.createElement("div");
//         right2_info_1.className = "right2-info-1";
//         right2_info_1.innerText = videoname;
//         right2_info.appendChild(right2_info_1);
//         const right2_info_2 = document.createElement("div");
//         right2_info_2.className = "right2-info-2";
//         right2_info_2.innerText = chanelname + " " + viewCount;
//         right2_info.appendChild(right2_info_2);
//         right2_details.appendChild(right2_info);

//         right2_row_elements.appendChild(right2_details);
//         right2_row.appendChild(right2_row_elements);
//       }

//       function createSub() {
//         const subscription = document.getElementById("subscriptions");
//         const div = document.createElement("div");
//         div.style = "padding: 8px 8px 8px 24px;";
//         const left1_1 = document.createElement("div");
//         left1_1.className = "left1-1";
//         const div1 = document.createElement("div");
//         const img = document.createElement("img");
//         img.style = "border-radius: 100%";
//         img.src = chanelLogo;
//         img.id = "channelImage";
//         div1.appendChild(img);
//         left1_1.appendChild(div1);
//         const div2 = document.createElement("div");
//         div2.style = "font-size: 14px";
//         div2.innerText = chanelname;
//         left1_1.appendChild(div2);
//         div.appendChild(left1_1);
//         subscription.appendChild(div);
//       }
//     }
//     fetchVideo("", 8); //keep it empty for first page result
//     //BASE_URL?key="...."&q="...."
//     //the 'icc' is passed via q
//     //the 25 specifies the number of videos that needs to be fetched (in documentation)
//     //int the console you can see items as 25
//     //snippet gives you video info thumbnail ,publish time
//   }
//   right2_container.appendChild(right2_row);
// }

// const right2_row_elements = document.getElementsByClassName(
//   "right2-row-elements"
// );
// console.log(right2_row_elements.length);

// // for (let i = 0; i < right2_row_elements.length; i++) {
// //   console.log("object");
// // }
// // getComments("Kwu1yIC-ssg");

// //   if(commentCount>0){
// //     getComments(videoId);
// //   async function getComments(videoId) {
// //     const response = await fetch(
// //       `${BASE_URL}/commentThreads?key=${API_KEY}&videoId=${videoId}&maxResults=25&part=snippet`
// //     );
// //     const data3 = await response.json();
// //     console.log(data3);
// //   }
// // }
