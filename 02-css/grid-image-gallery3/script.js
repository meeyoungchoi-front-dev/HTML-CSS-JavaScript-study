// scripts.js

// 이미지 경로 배열 설정
const images = [
    'images/조립식_컴퓨터.jpeg',  // 업로드된 이미지
    'images/large-image-2.jpg',
    'images/large-image-3.jpg'
];

// 작은 이미지를 클릭했을 때 큰 이미지를 변경
document.querySelectorAll('.small-image').forEach((image, index) => {
    image.style.backgroundImage = `url('${images[index]}')`; // 작은 이미지 배경 설정
    image.addEventListener('click', () => {
        document.getElementById('carousel-image').innerHTML = `<img src='${images[index]}' alt='Large Image ${index + 1}'>`;
    });
});

// 기본 큰 이미지 설정
document.getElementById('carousel-image').innerHTML = `<img src='${images[0]}' alt='Large Image 1'>`;
