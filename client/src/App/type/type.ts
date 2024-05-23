import type { Place, PlaceId } from '../../pages/Place/type/type';

export type Action =
  | { type: 'places/load'; payload: Place[] }
  | { type: 'places/add'; payload: Place }
  | { type: 'places/delete'; payload: PlaceId }
  | { type: 'places/update'; payload: Place };
