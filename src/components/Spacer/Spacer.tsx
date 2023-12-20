import React from 'react';
import { SpacerContainer } from './Spacer.style';

export interface Spacer {
   children: React.ReactNode;
   padding?: string;
}

const Spacer = ({ children, padding }: Spacer) => {
   return <SpacerContainer padding={padding}>{children}</SpacerContainer>;
};

export default Spacer;
