# playListify-Frontend
![Badge](https://img.shields.io/github/license/chetas411/playListify-Frontend) ![Badge](https://img.shields.io/badge/spotify-API-red) ![Badge](https://img.shields.io/badge/spotify-music-blue) ![Badge](https://img.shields.io/badge/spotify-playlists-blue)
<br>
This is the frontend part of the the project ***playListify*** which is web app using which ***spotify*** users can create playlists of the top tracks and top artitst they listen on spotify.<br>
You just need to login through your spotify account and give permission to it. Feel free to try it at:  https://playlistifyweb.netlify.app/

## Features
- You can view the tracks and artists you listen most of the time on Spotify.
- You can also view your recent **history** of the songs you played.
- You can click a song to listen a **30 seconds preview** of it and to stop the playback just move the cursor out from the song card and if you are on mobile just click outside of the song card to stop playback.
- You can create playlists of your **Top Tracks** and **Top Artists**, for artists it creates a playlist of **Top 4 tracks of each artist**.

## Spotify Web Api
To fetch a users data about the tracks and artist he/she listen most of the time, it uses [Spotify Web Api](https://developer.spotify.com/documentation/web-api/). It is also being used to create playlists and adding tracks.
<br>
<br>
*The following parts of the API were used in this project :*
<br>
1. [User Profile API](https://developer.spotify.com/documentation/web-api/reference/#category-user-profile)
2. [Personalization API](https://developer.spotify.com/documentation/web-api/reference/#category-personalization)
3. [Artists API](https://developer.spotify.com/documentation/web-api/reference/#category-artists)
4. [Playlists API](https://developer.spotify.com/documentation/web-api/reference/#category-playlists)

## Tech Stack
1. React
2. Tailwind CSS
3. Node
4. Express<br>
*You can checkout the **Node** and **express** part in the backend repository here: [playLlistify-Backend](https://github.com/chetas411/playListify-Backend)*

![Screenshot (3)](https://user-images.githubusercontent.com/65273718/116772677-58ed4000-aa6e-11eb-9d3b-4b818448f79b.png)

![Screenshot (4)](https://user-images.githubusercontent.com/65273718/116772771-c00af480-aa6e-11eb-8f2d-3faba69050ff.png)

![Screenshot_20210501-104436_Chrome](https://user-images.githubusercontent.com/65273718/116772962-28a6a100-aa70-11eb-8b7b-6e83c2370fb7.jpg)                  ![Screenshot_20210501-104541_Chrome](https://user-images.githubusercontent.com/65273718/116772988-512e9b00-aa70-11eb-9d10-ebf9fae15bb1.jpg)
