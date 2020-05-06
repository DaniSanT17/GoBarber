import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import reactotronSaga from 'reactotron-redux-saga';
import { AsyncStorage } from 'react-native';

if (__DEV__) {
  const tron = Reactotron.setAsyncStorageHandler(AsyncStorage)
    .configure({ host: '192.168.0.10' })
    .useReactNative()
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect({ port: '9090' });

  tron.clear();

  console.tron = tron;
}
