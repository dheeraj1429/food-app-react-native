import React from 'react';
import { SectionHeadingContainer, Heading, ShowAllText } from './SectionHeading.style';
import { TouchableOpacity } from 'react-native';

export interface SectionHeadingInterface {
   heading: string;
   showAll?: boolean;
   nav?: string;
   data?: any;
}

const SectionHeading = ({ heading, showAll, nav, data }: SectionHeadingInterface) => {
   const onPressHandler = function () {
      console.log({ heading, showAll, nav, data });
   };

   return (
      <SectionHeadingContainer>
         <Heading>{heading}</Heading>
         {showAll ? (
            <TouchableOpacity onPress={onPressHandler}>
               <ShowAllText>Show All</ShowAllText>
            </TouchableOpacity>
         ) : null}
      </SectionHeadingContainer>
   );
};

export default SectionHeading;
