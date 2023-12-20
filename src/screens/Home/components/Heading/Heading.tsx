import React, { Fragment } from 'react';
import { LocationHeading, LocationHeadingContainer, TopHeading } from './Heading.style';
import EvilIcons from 'react-native-vector-icons/EvilIcons';
import { theme } from '../../../../infrastructure/theme';

const Heading = () => {
   return (
      <Fragment>
         <TopHeading>Delivering to</TopHeading>
         <LocationHeadingContainer>
            <LocationHeading>Current Location</LocationHeading>
            <EvilIcons size={theme.sizes.fontSize['text-5xl']} name="chevron-down" />
         </LocationHeadingContainer>
      </Fragment>
   );
};

export default Heading;
