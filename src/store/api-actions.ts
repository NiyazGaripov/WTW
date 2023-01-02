import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {AppDispatch, State} from '../types/state';
import {Film} from '../types/film.type';
import {APIRoute, AuthorizationStatus, DataLoadingStatus} from '../consts';
import {loadFavoriteFilms, loadFilms, loadPromoFilm, requireAuthorization, setDataLoadingStatus} from './action';
import {dropToken, saveToken} from '../services/token';

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
      dispatch(setDataLoadingStatus(DataLoadingStatus.Pending));
      const {data} = await api.get<Film[]>(APIRoute.Films);
      dispatch(loadFilms(data));
      dispatch(setDataLoadingStatus(DataLoadingStatus.Fulfilled));
    } catch {
      dispatch(setDataLoadingStatus(DataLoadingStatus.Rejected));
    }
  },
);

export const fetchPromoFilmAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchPromoFilm',
  async (_arg, {dispatch, extra: api}) => {
    try {
      dispatch(setDataLoadingStatus(DataLoadingStatus.Pending));
      const {data} = await api.get<Film>(APIRoute.Promo);
      dispatch(loadPromoFilm(data));
      dispatch(setDataLoadingStatus(DataLoadingStatus.Fulfilled));
    } catch {
      dispatch(setDataLoadingStatus(DataLoadingStatus.Rejected));
    }
  },
);

export const fetchFavoriteFilmsAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchFavoriteFilms',
  async (_arg, {dispatch, extra: api}) => {
    try {
      dispatch(setDataLoadingStatus(DataLoadingStatus.Pending));
      const {data} = await api.get<Film[]>(APIRoute.Favorites);
      dispatch(loadFavoriteFilms(data));
      dispatch(setDataLoadingStatus(DataLoadingStatus.Fulfilled));
    } catch {
      dispatch(setDataLoadingStatus(DataLoadingStatus.Rejected));
    }
  },
);

export const checkAuthAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/checkAuth',
  async (_arg, {dispatch, extra: api}) => {
    try {
      await api.get(APIRoute.Login);
      dispatch(requireAuthorization(AuthorizationStatus.Auth));
    } catch {
      dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
    }
  },
);

export const loginAction = createAsyncThunk<void, AuthData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/login',
  async ({email, password}, {dispatch, extra: api}) => {
    const {data: {token}} = await api.post<UserData>(APIRoute.Login, {email, password});
    saveToken(token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
  },
);

export const logoutAction = createAsyncThunk<void, undefined, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'user/logout',
  async (_arg, {dispatch, extra: api}) => {
    await api.delete(APIRoute.Logout);
    dropToken();
    dispatch(requireAuthorization(AuthorizationStatus.NoAuth));
  },
);
