const images = [
  "../assets/images/pexels-cottonbro-studio-5474300.jpg",
  "../assets/images/pexels-hitesh-choudhary-693859.jpg",
  "../assets/images/pexels-jorge-jesus-614117.jpg",
  "../assets/images/pexels-markus-spiske-1089438.jpg",
  "../assets/images/pexels-markus-spiske-4439901.jpg",
  "../assets/images/pexels-pixabay-207691.jpg",
  "../assets/images/pexels-rodrigo-santos-3888151.jpg",
];
export const getRandomImg = () =>
  images[Math.floor(Math.random() * images.length)];
