import bcyrpt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Ayatullah',
      email: 'admin@example.com',
      password: bcyrpt.hashSync('123456'),
      isAdmin: true,
    },
    {
      name: 'Muhideen',
      email: 'muyideen@example.com',
      password: bcyrpt.hashSync('678910'),
      isAdmin: false,
    },
  ],
  products: [
    {
      // _id: '1',
      name: 'Caftan fited',
      slug: 'caftaf-slim',
      category: 'Caftan',
      image: '/image/s-1.jpg',
      price: 15000,
      countInStock: 10,
      brand: 'Greate Cut',
      rating: 15,
      numReviews: 10,
      discription: 'high quality Material',
    },
    {
      // _id: '2',
      name: 'Complete Agbada',
      slug: 'agbada-complete',
      category: 'Agbada',
      image: '/image/s-2.jpg',
      price: 15000,
      countInStock: 0,
      brand: 'My Style',
      rating: 4.5,
      numReviews: 10,
      discription: 'high quality Material',
    },
    {
      // _id: '4',
      name: 'Trousers',
      slug: 'trouser-design',
      category: 'Trouser',
      image: '/image/s-4.jpg',
      price: 15000,
      countInStock: 25,
      brand: 'T F',
      rating: 4.5,
      numReviews: 40,
      discription: 'high quality Material',
    },
    {
      // _id: '3',
      name: 'Senators Design',
      slug: 'senators-design',
      category: 'Senetor',
      image: '/image/s-3.jpg',
      price: 15000,
      countInStock: 20,
      brand: 'ABS Cut',
      rating: 4.5,
      numReviews: 30,
      discription: 'high quality Material',
    },
  ],
};
export default data;
