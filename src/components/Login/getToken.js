console.log('this is getToken.js')




// console.log('getToken.js included')

// const client_id = ''     // app client id
// const client_secret = ''     // app client secret

// let auth_json = null;

// function fetchToken() {
//     console.log('fetching api token');
//     let xhr = new XMLHttpRequest();

//     xhr.open('POST', 'https://accounts.spotify.com/api/token', true);

//     xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

//     // xhr.onload = () => {
//     //     document.getElementById('token').innerText = this.responseText
//     //     console.log('fetched api token');
//     //     console.log(this.responeText)
//     // }

//     xhr.onload = function() {
//         auth_json = JSON.parse(this.responseText);
//         // document.getElementById('token').innerText = this.responseText;
//         console.log(auth_json);
//         alert(JSON.stringify(auth_json));
//     }

//     let data = `grant_type=client_credentials&client_id=${client_id}&client_secret=${client_secret}`;
//     xhr.send(data);
// }

// function fetchArtist() {
//     console.log('fetching artist');
//     let xhr = new XMLHttpRequest();

//     xhr.open('GET', 'https://api.spotify.com/v1/artists/4Z8W4fKeB5YxbusRsdQVPb', true);

//     xhr.setRequestHeader('Authorization', `${auth_json.token_type} ${auth_json.access_token}`);

//     xhr.onload = function() {
//         console.log(JSON.parse(this.responseText))
//         alert(JSON.parse(this.responseText))
//     }

//     xhr.send();
// }

// let track = null;

// function fetchTrack() {
//     console.log('fetching track');
//     let xhr = new XMLHttpRequest();

//     xhr.open('GET', 'https://api.spotify.com/v1/tracks/6kLCHFM39wkFjOuyPGLGeQ', true);

//     xhr.setRequestHeader('Authorization', `${auth_json.token_type} ${auth_json.access_token}`);

//     xhr.onload = function() {
//         track = JSON.parse(this.responseText);
//         console.log(track)
//         alert(track)
//     }

//     xhr.send();
// }

// function playTrack() {
//     console.log('fetching track');
//     let xhr = new XMLHttpRequest();

//     xhr.open('PUT', 'https://api.spotify.com/v1/me/player/play', true);

//     xhr.setRequestHeader('Authorization', `${auth_json.token_type} ${auth_json.access_token}`);

//     xhr.onload = function() {
//         track = JSON.parse(this.responseText);
//         console.log(track)
//         alert(track)
//     }

//     xhr.send();
// }

// function pauseTrack() {
//     console.log('fetching track');
//     let xhr = new XMLHttpRequest();

//     xhr.open('PUT', 'https://api.spotify.com/v1/me/player/play', true);

//     xhr.setRequestHeader('Authorization', `${auth_json.token_type} ${auth_json.access_token}`);

//     xhr.onload = function() {
//         track = JSON.parse(this.responseText);
//         console.log(track)
//         alert(track)
//     }

//     xhr.send();
// }