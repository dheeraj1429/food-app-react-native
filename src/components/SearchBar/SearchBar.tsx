import React from 'react';
import { IconContainer, SearchContainer, SearchInput } from './SearchBar.style';

export interface SearchBarInterface {
   icon: React.ReactNode;
   placeholder: string;
}

const SearchBar = ({ icon, placeholder }: SearchBarInterface) => {
   return (
      <SearchContainer>
         <IconContainer>{icon}</IconContainer>
         <SearchInput placeholder={placeholder} />
      </SearchContainer>
   );
};

export default SearchBar;
