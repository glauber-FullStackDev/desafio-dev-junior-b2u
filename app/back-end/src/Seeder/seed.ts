import mongoose from 'mongoose';
import UserODM from '../Models/UserODM';
import CarODM from '../Models/CarODM';
import connectToDatabase from '../Models/Connection';

connectToDatabase();

const dataUser = [
  {
    _id: '63cb3b62aabb6dc3c6ce9099',
    username: 'Daniel Cavalcanti',
    email: 'danielcavalcanti8000@gmail.com',
    phoneNumber: 81985855445,
    password: 'daniel123'
  },
  {
    _id: '63ca8dd39bbd34abfc133341',
    username: 'Isadora Maiara',
    email: 'isadoramaiara@gmail.com',
    phoneNumber: 81988889999,
    password: 'isadora123'
  }
];

const dataCar = [
  {
    name: 'Cruze',
    brand: 'Chevrolet',
    model: 'TURBO',
    year: 2020,
    color: 'Azul',
    image: 'https://images.kavak.services/images/210296/EXTERIOR-frontSidePilotNear-1671221405257.jpeg?d=540x310',
    price: 120000,
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod enim itaque quibusdam ad dolore laboriosam veritatis. Temporibus excepturi ratione est natus facere dolorum. Molestiae doloremque veniam tenetur, nam delectus ducimus?',
    published: new Date('2023-01-20T01:00:00'),
    userId: '63cb3b62aabb6dc3c6ce9099',
    salesman: 'Daniel Cavalcanti',
    email: 'danielcavalcanti8000@gmail.com',
    phoneNumber: 81985855445
  },
  {
    name: 'X1',
    brand: 'BMW',
    model: 'TURBO',
    year: 2018,
    color: 'Branca',
    image: 'https://images.kavak.services/images/153924/EXTERIOR-frontSidePilotNear-1641310414338.jpeg?d=540x310',
    price: 160000,
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod enim itaque quibusdam ad dolore laboriosam veritatis. Temporibus excepturi ratione est natus facere dolorum. Molestiae doloremque veniam tenetur, nam delectus ducimus?',
    published: new Date('2023-01-20T01:30:00'),
    userId: '63cb3b62aabb6dc3c6ce9099',
    salesman: 'Daniel Cavalcanti',
    email: 'danielcavalcanti8000@gmail.com',
    phoneNumber: 81985855445
  },
  {
    name: 'A5',
    brand: 'Audi',
    model: 'TFSI SPORTBACK',
    year: 2019,
    color: 'Branca',
    image: 'https://images.kavak.services/images/186618/EXTERIOR-frontSidePilotNear-1653329890467.jpeg?d=540x310',
    price: 200000,
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod enim itaque quibusdam ad dolore laboriosam veritatis. Temporibus excepturi ratione est natus facere dolorum. Molestiae doloremque veniam tenetur, nam delectus ducimus?',
    published: new Date('2023-01-20T02:00:00'),
    userId: '63cb3b62aabb6dc3c6ce9099',
    salesman: 'Daniel Cavalcanti',
    email: 'danielcavalcanti8000@gmail.com',
    phoneNumber: 81985855445
  },
  {
    name: 'Renegade',
    brand: 'Jeep',
    model: 'TURBO',
    year: 2021,
    color: 'Branca',
    image: 'https://images.kavak.services/images/159429/EXTERIOR-frontSidePilotNear-1642073295326.jpeg?d=540x310',
    price: 150000,
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod enim itaque quibusdam ad dolore laboriosam veritatis. Temporibus excepturi ratione est natus facere dolorum. Molestiae doloremque veniam tenetur, nam delectus ducimus?',
    published: new Date('2023-01-20T02:30:00'),
    userId: '63ca8dd39bbd34abfc133341',
    salesman: 'Isadora Maiara',
    email: 'isadoramaiara@gmail.com',
    phoneNumber: 81988889999
  },
  {
    name: 'Hilux',
    brand: 'Toyota',
    model: 'SR',
    year: 2019,
    color: 'Branca',
    image: 'https://images.kavak.services/images/228033/EXTERIOR-frontSidePilotNear-1672777801880.jpeg?d=540x310',
    price: 180000,
    description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod enim itaque quibusdam ad dolore laboriosam veritatis. Temporibus excepturi ratione est natus facere dolorum. Molestiae doloremque veniam tenetur, nam delectus ducimus?',
    published: new Date('2023-01-20T03:00:00'),
    userId: '63ca8dd39bbd34abfc133341',
    salesman: 'Isadora Maiara',
    email: 'isadoramaiara@gmail.com',
    phoneNumber: 81988889999
  },
];

const seedDB = async () => {
  const userModel = new UserODM;
  await userModel.deleteAll();
  await userModel.createUsers(dataUser);
  const carModel = new CarODM;
  await carModel.deleteAll();
  await carModel.createCars(dataCar);
};

seedDB().then(() => {
  mongoose.connection.close();
});
