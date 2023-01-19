import {createAsyncThunk} from '@reduxjs/toolkit';
import {AxiosInstance} from 'axios';
import {AppDispatch, State} from '../types/state';
import {Film} from '../types/film.type';
import {APIRoute, AppRoute, AuthorizationStatus, DataLoadingStatus} from '../consts';
import {
  addNewComment,
  loadComments,
  loadFavoriteFilms,
  loadFilms,
  loadMovie,
  loadPromoFilm,
  loadSimilarMovies,
  redirectToRoute,
  requireAuthorization,
  setDataLoadingStatus,
  setGenres,
  setUserData
} from './action';
import {dropToken, saveToken} from '../services/token';
import {getGenres} from '../utils/get-genres';
import {User} from '../types/user.type';
import {Comment} from '../types/comment.type';

type AuthData = {
  email: string;
  password: string;
};

type ReviewData = {
  id: number,
  rating: number
  comment: string
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
      dispatch(setGenres(getGenres(data)));
      dispatch(setDataLoadingStatus(DataLoadingStatus.Fulfilled));
    } catch {
      dispatch(setDataLoadingStatus(DataLoadingStatus.Rejected));
    }
  },
);

export const fetchMovieAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchMovie',
  async (id, {dispatch, extra: api}) => {
    try {
      const {data} = await api.get<Film>(`${APIRoute.Films}/${id}`);
      dispatch(loadMovie(data));
      dispatch(fetchSimilarMoviesAction(id));
      dispatch(fetchCommentsAction(id));
    } catch {
      dispatch(redirectToRoute(AppRoute.NotFound));
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

export const fetchSimilarMoviesAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchSimilarMovies',
  async (id, {dispatch, extra: api}) => {
    try {
      dispatch(setDataLoadingStatus(DataLoadingStatus.Pending));
      const {data} = await api.get<Film[]>(`${APIRoute.Films}/${id}/similar`);
      dispatch(loadSimilarMovies(data));
      dispatch(setDataLoadingStatus(DataLoadingStatus.Fulfilled));
    } catch {
      dispatch(setDataLoadingStatus(DataLoadingStatus.Rejected));
    }
  },
);

export const fetchCommentsAction = createAsyncThunk<void, number, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/fetchComments',
  async (id, {dispatch, extra: api}) => {
    const {data} = await api.get<Comment[]>(`${APIRoute.Comments}/${id}`);
    dispatch(loadComments(data));
  },
);

export const addNewCommentAction = createAsyncThunk<void, ReviewData, {
  dispatch: AppDispatch,
  state: State,
  extra: AxiosInstance
}>(
  'data/addNewComment',
  async ({ id, rating, comment }, {dispatch, extra: api}) => {
    const {data} = await api.post<Comment>(`${APIRoute.Comments}/${id}`, { rating, comment });
    dispatch(addNewComment(data));
    dispatch(fetchCommentsAction(id));
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
    const {data: user} = await api.post<User>(APIRoute.Login, {email, password});
    saveToken(user.token);
    dispatch(requireAuthorization(AuthorizationStatus.Auth));
    dispatch(setUserData(user));
    dispatch(redirectToRoute(AppRoute.Main));
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
    dispatch(redirectToRoute(AppRoute.Main));
  },
);
