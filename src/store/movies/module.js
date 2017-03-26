import * as type from './type';
import * as api from './api';


const mutations = {
  [type.FETCH_MOVIES](state, payload) {
    console.log('获取数据')
    state.movies[payload.type].subjects =
        state.movies[payload.type].subjects.concat(payload.subjects);
    state.movies[payload.type].total = state.movies[payload.type].subjects.length;
  },
  [type.FETCH_MOVIES_QUERY](state, payload) {
    console.log('搜索');
    state.movieQuery.subjects = payload.data.subjects;
    console.log('222');
    state.movieQuery.total = state.movieQuery.subjects.length;
    console.log('搜索结束');
  },
  [type.CLEAR_MOVIES_QUERY](state) {
    state.movieQuery.total = 0;
    console.log('退出搜索');
    state.movieQuery.subjects = [];
  },
  [type.CHANGE_MOVIES_TAB](state, tab) {
    console.log('改变tab')
    state.tab = tab;
  },
  [type.UPDATE_MOVIE_SEARCH_STEP](state, searchStep) {
    console.log('输入确定')
    state.searchStep = searchStep;
  },
};

const actions = {
  [type.FETCH_MOVIES](context, payload) {
    api.fetchMovies(payload.type, { start: payload.start || 0 })
            .then(data => context.commit(type.FETCH_MOVIES, {
              type: payload.type,
              subjects: data.subjects,
            }));
  },
  [type.FETCH_MOVIES_QUERY](context, payload) {
    api.fetchMoviesQuery({ q: payload.q })
            .then(data => context.commit(type.FETCH_MOVIES_QUERY, { data, q: payload.q }));
  },
  [type.CLEAR_MOVIES_QUERY](context) {
    context.commit(type.CLEAR_MOVIES_QUERY);
  },
  [type.CHANGE_MOVIES_TAB](context, tab) {
    context.commit(type.CHANGE_MOVIES_TAB, tab);
  },
  [type.UPDATE_MOVIE_SEARCH_STEP](context, searchStep) {
    context.commit(type.UPDATE_MOVIE_SEARCH_STEP, searchStep);
  },
};

export default {
  state: {
    //三个Tab，获取stype,展示数据
    movies: {
      [api.MOVIESTYPE.inTheaters]: {
        total: 0,
        subjects: [],
        describe: '',
      },
      [api.MOVIESTYPE.comingSoon]: {
        total: 0,
        subjects: [],
        describe: '',
      },
      [api.MOVIESTYPE.Top250]: {
        total: 0,
        subjects: [],
        describe: '',
      },
    },
    //搜索
    movieQuery: {
      total: 0,
      subjects: [],
      describe: '',
      q: '',
    },
    //默认tab
    tab: 'in_theaters',
    searchStep: 1,
  },
  //改变mutations状态
  mutations,
  //用来派发mutations
  actions,
};
