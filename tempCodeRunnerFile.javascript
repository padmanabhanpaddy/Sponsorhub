import axios from "axios";

let headersList = {
 "Accept": "*/*",
 "User-Agent": "Thunder Client (https://www.thunderclient.com)",
 "Content-Type": "application/json" 
}

let bodyContent = JSON.stringify({
  "is_user":true,
  "user_id":2,
  "sponsor_id": 1
});

let reqOptions = {
  url: "http://127.0.0.1:8000/app/get_chats/",
  method: "POST",
  headers: headersList,
  data: bodyContent,
}

let response = await axios.request(reqOptions);
console.log(JSON.parse(response.data));
