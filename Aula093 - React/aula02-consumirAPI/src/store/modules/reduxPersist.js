import storage from 'redux-persist/lib/storage';

import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducers = persistReducer(
    { key: 'CONSUMO-API', storage, whitelist: ['auth'] }, // podemos salvar outros 'whitelist' dentro do[] adicionando vírgula
    reducers
  );
  return persistedReducers;
};
