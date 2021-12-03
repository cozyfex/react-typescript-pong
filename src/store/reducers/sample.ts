import { SampleStateInterface } from '../interfaces/sample/sample.interfaces';
import { SampleActionTypes } from '../interfaces/sample/sample.actions.interfaces';

export const initialState: SampleStateInterface = {
  text: '',
  name: '',
  title: '',
  contents: [],
  error: '',
};

const SampleReducer = (
  state: SampleStateInterface = initialState,
  action: any,
): SampleStateInterface => {
  let result = state;

  switch (action.type) {
    case SampleActionTypes.SET_SAMPLE:
      result = { ...state, name: action.data?.name, text: action.data?.text };
      break;
    case SampleActionTypes.SET_SAMPLE_NAME:
      result = { ...state, name: action.data?.name };
      break;
    case SampleActionTypes.REQUEST:
      result = { ...state, title: action.data };
      break;
    case SampleActionTypes.SUCCESS:
      const tvShows = action.data.map((item: any) => ({
        id: item.show.id,
        score: item.score,
        url: item.show.url,
        name: item.show.name,
        type: item.show.type,
        language: item.show.language,
      }));
      result = { ...state, contents: tvShows };
      break;
    case SampleActionTypes.FAILURE:
      result = { ...state, error: action.error };
      break;
    default:
      result = state;
      break;
  }

  return result;
};

export default SampleReducer;
