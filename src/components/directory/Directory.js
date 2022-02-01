import React from 'react';
import { useSelector } from 'react-redux';

import { selectDirectorySections } from '../../store/directory/directorySelectors';

import MenuItem from '../menuItem/MenuItem';

import { DirectoryMenuContainer } from './Directory.styles';

const Directory = () => {
  const sections = useSelector(selectDirectorySections);

  return (
    <DirectoryMenuContainer>
      {sections.map(({ id, ...rest }) => (
        <MenuItem key={id} {...rest} />
      ))}
    </DirectoryMenuContainer>
  );
};

export default Directory;
