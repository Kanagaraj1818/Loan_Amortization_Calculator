import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ContentState } from '../../../ui/src/lib/tabularViewInterface';


const getState = createFeatureSelector<ContentState>('contentData');

const getSuccess = createSelector(
  getState,
  (state: ContentState) => state.content
);
const getError = createSelector(getState, (state: ContentState) => state.error);

const getLoading = createSelector(
  getState,
  (state: ContentState) => state.loading
);

const getLoaded = createSelector(
  getState,
  (state: ContentState) => state.loaded
);

export const Response = {
  getLoaded,
  getError,
  getLoading,
  getSuccess,
};
