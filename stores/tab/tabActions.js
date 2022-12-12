/* eslint-disable prettier/prettier */
export const SET_SELECT_TAB = 'SET_SELECT_TAB';

export const setSelectedTabSucess = selectedTab => ({
  type: SET_SELECT_TAB,
  payload: {selectedTab},
});

export function setSelectedTab(selectedTab) {
  return dispatch => {
    dispatch(setSelectedTabSucess(selectedTab));
  };
}
