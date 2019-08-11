import { UPDATE_COLLECTIONS } from './shop.action.types';

export const updateCollections = collectionMap => ({
  type: UPDATE_COLLECTIONS,
  payload: collectionMap,
});
