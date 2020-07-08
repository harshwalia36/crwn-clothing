import {createSelector} from 'reselect';

//input selector
const selectDirectory =state => state.directory;


export const selectDirectorySections = createSelector(
    [selectDirectory],
    directory => directory.sections
);