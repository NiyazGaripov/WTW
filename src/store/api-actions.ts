import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {AppDispatch, State} from '../types/state';
import {Film} from '../types/film.type';
import {APIRoute} from '../consts';
import {loadFilms} from './action';

type AuthData = {
  email: string;
  password: string;
};

type UserData = {
  avatarUrl: string;
  email: string;
  id: number;
  name: string;
  token: string;
};

export const fetchFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFilms',
  async (_arg, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Film[]>(APIRoute.Films);
      dispatch(loadFilms(data));
    } catch {

    }
  },
);
