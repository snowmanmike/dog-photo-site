
// fetch('https://api.thecatapi.com/v1/images/search')
// .then(responce=>{
//     return responce.json();
// }). then(json=>{
//     console.log(json);
// })

const button = document.getElementById('button2');
const image = document.getElementById('image');
button.addEventListener('click', function () {
    fetch("https://dog.ceo/api/breeds/image/random")
        .then(res => res.json())
        .then(result => {
            console.log(result)
            image.src=result.message
        })
        .catch(function (err) {
            console.error(err);
        });
});



