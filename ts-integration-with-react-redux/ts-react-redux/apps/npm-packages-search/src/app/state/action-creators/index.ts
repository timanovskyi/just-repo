import { Action, ActionType } from '../../models';
import axios from 'axios';
import { Dispatch } from 'redux';

const URL = 'https://registry.npmjs.org/-/v1/search';

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({
      type: ActionType.SEARCH_REPOSITORIES,
    });

    try {
      const { data } = await axios.get(URL, {
        params: {
          text: term,
        },
      });

      dispatch({
        type: ActionType.SEARCH_REPOSITORIES_SUCCESS,
        payload: data.objects.map((result: any) => result.package.name),
      });
    } catch (err) {
      if (err instanceof Error) {
        dispatch({
          type: ActionType.SEARCH_REPOSITORIES_ERROR,
          payload: err.message,
        });
      }
    }
  };
};
