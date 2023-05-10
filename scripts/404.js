ImageSwitch = new Array();
ImageSwitch[0] = 'resources/404-img-1.avif';
ImageSwitch[1] = 'resources/404-img-2.jpg';
ImageSwitch[2] = 'resources/404-img-3.jpg';
ImageSwitch[3] = 'resources/404-img-4.gif';
ImageSwitch[4] = 'resources/404-img-5.jpg';
ImageSwitch[5] = 'resources/404-img-6.jpg';
ImageSwitch[6] = 'resources/404-img-7.jpg';
ImageSwitch[7] = 'resources/404-img-8.jpg';
ImageSwitch[8] = 'resources/404-img-9.jpg';
ImageSwitch[9] = 'resources/404-img-10.jpg';
ImageSwitch[10] = 'resources/404-img-11.jpg';

function swapImage() {
    document.getElementById("image-404").setAttribute("src", ImageSwitch[Math.round(Math.random() * ImageSwitch.length-1)])
}