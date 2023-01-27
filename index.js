var albumCounter = 0;

/**
 * The function for getting the album art data
 * @param  {string} Artist The name of the artist
 * @param  {string} Album The name of the album
 */
// DONE: Make the function display the album artwork returned as <img> tags.
async function createAlbumArtDiv(artist, album) {
    albumArt( artist, {album: album, size: 'medium'} ).then( imgUrl => {
        var img = document.getElementById(`img${albumCounter}`);
        img.src = imgUrl;
        img.alt = `${artist} - ${album}`;
        albumCounter++;

        if (albumCounter == 4) {
            document.getElementById("rack").style.position = "fixed";
            document.getElementById("rack").style.bottom = "25%";
            document.getElementById("rack").style.top = "25%";
            
            document.getElementById("form").remove();
            alert("You have successfully created the artwork. Now you can take a screenshot to save your creation.\n\nWARNING: The creation will be lost once you leave the page!");
        }
    });
}

var artistNameDiv =  document.getElementById("artistName");
var albumNameDiv =  document.getElementById("albumName");

document.getElementById("getImageButton").onclick = () => {
    if (artistNameDiv.value == "" || albumNameDiv.value == "") {
        alert("Enter the artist and album name in the input fields.");
        return;
    }

    createAlbumArtDiv(artistNameDiv.value, albumNameDiv.value);
}