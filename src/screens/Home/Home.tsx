import React from 'react';
import { HomeContainer } from './Home.style';
import Heading from './components/Heading/Heading';
import SearchBar from '../../components/SearchBar/SearchBar';
import AntDesign from 'react-native-vector-icons/AntDesign';
import { theme } from '../../infrastructure/theme';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import FoodCard, { FoodCardInterface } from '../../components/FoodCard/FoodCard';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { ScrollView } from 'react-native';
import Spacer from '../../components/Spacer/Spacer';

const BannerCardAr: Array<FoodCardInterface> = [
   {
      image: 'https://images.pexels.com/photos/1099680/pexels-photo-1099680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      heading: 'Fast Burgers',
      place: 'Cafe Wes Food',
      price: '₹ 1000',
      star: <FontAwesome name="star" color={theme.colors.ui.error} />,
      rating: 4.9,
   },
   {
      image: 'https://images.pexels.com/photos/725991/pexels-photo-725991.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      heading: 'Fast',
      place: 'Cafe Wes Food',
      price: '₹ 9999',
      star: <FontAwesome name="star" color={theme.colors.ui.error} />,
      rating: 4.9,
   },
   {
      image: 'https://images.pexels.com/photos/2641886/pexels-photo-2641886.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      heading: 'Mlai Tikka',
      place: 'Cafe Wes Food',
      price: '₹ 9999',
      star: <FontAwesome name="star" color={theme.colors.ui.error} />,
      rating: 4.9,
   },
];

const newRestaurantAr: Array<FoodCardInterface> = [
   {
      image: 'https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      heading: 'Super Cafe',
      place: 'Cafe Wes Food',
      price: '₹ 1000',
      star: <FontAwesome name="star" color={theme.colors.ui.error} />,
      rating: 4.9,
      styleType: 'two-column-layout',
      imageStyle: { width: 100, height: 100 },
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
   },
   {
      image: 'https://images.pexels.com/photos/5175519/pexels-photo-5175519.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      heading: 'Cafe',
      place: 'Cafe Wes Food',
      price: '₹ 1000',
      star: <FontAwesome name="star" color={theme.colors.ui.error} />,
      rating: 4.9,
      styleType: 'two-column-layout',
      imageStyle: { width: 100, height: 100 },
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
   },
   {
      image: 'https://images.pexels.com/photos/4078047/pexels-photo-4078047.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      heading: 'Super Good Momo',
      place: 'Cafe Wes Food',
      price: '₹ 1000',
      star: <FontAwesome name="star" color={theme.colors.ui.error} />,
      rating: 4.9,
      styleType: 'two-column-layout',
      imageStyle: { width: 100, height: 100 },
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
   },
   {
      image: 'https://images.pexels.com/photos/845812/pexels-photo-845812.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      heading: 'Super Pizza',
      place: 'Cafe Wes Food',
      price: '₹ 1000',
      star: <FontAwesome name="star" color={theme.colors.ui.error} />,
      rating: 4.9,
      styleType: 'two-column-layout',
      imageStyle: { width: 100, height: 100 },
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
   },
];

const Home = () => {
   return (
      <HomeContainer>
         <ScrollView showsVerticalScrollIndicator={false}>
            <Heading />
            <SearchBar
               placeholder="Search food"
               icon={<AntDesign color={theme.colors.ui.secondary} name="search1" size={theme.sizes.fontSize['text-3xl']} />}
            />
            <SectionHeading showAll={true} heading={'Popular Choices'} />
            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
               {BannerCardAr.map(item => (
                  <Spacer padding={theme.sizes.spacing.sm + 'px'} key={item.heading}>
                     <FoodCard {...item} />
                  </Spacer>
               ))}
            </ScrollView>
            <SectionHeading showAll={true} heading={'New Restaurants'} />
            {newRestaurantAr.map(item => (
               <FoodCard key={item.heading} {...item} />
            ))}
         </ScrollView>
      </HomeContainer>
   );
};

export default Home;
