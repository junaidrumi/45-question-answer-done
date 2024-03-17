// function myAlbum(artistName: string, albumTitle: string){
// return {artistName,albumTitle}
// }
// let album1 = myAlbum("Junaid", "Rang-e-mohabbat");
// let album2 = myAlbum("Ubaid" , "Roshan andhera");
// let album3 = myAlbum("Anas", "Dil mom ka dia");
// console.log(album1);
// console.log(album2);
// console.log(album3);
// number of tracks
function myAlbum2(artistName, albumTitle, numberOfTracks) {
    return { artistName: artistName, albumTitle: albumTitle, numberOfTracks: numberOfTracks };
}
var album1 = myAlbum2("Junaid", "Rang-e-mohabbat", 40);
var album2 = myAlbum2("Ubaid", "Roshan andhera", 20);
var album3 = myAlbum2("Anas", "Dil mom ka dia");
console.log(album1);
console.log(album2);
console.log(album3);
