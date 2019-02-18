import {
  LoginManager,
  AccessToken,
  GraphRequest,
  GraphRequestManager
} from 'react-native-fbsdk';

const getAccountInfo = accessData => new Promise((resolve, reject) => {
  new GraphRequestManager()
    .addRequest(
      new GraphRequest(
        '/me',
        {
          accessToken: accessData.accessToken,
          parameters: {
            fields: {
              string: 'id, name, email',
            },
          },
        },
        (error, result) => {
          if (error) {
            return reject(error);
          }
          return resolve(result);
        },
      ),
    ).start();
});

export const facebookAuth = async () => {
  let result;

  try {
    result = await LoginManager.logInWithReadPermissions(['public_profile', 'email']);
    if (result.isCancelled) {
      return { error: 'Usuario cancelou o Login' };
    }
    const accessData = await AccessToken.getCurrentAccessToken();
    const info = await getAccountInfo(accessData);

    return {
      user: {
        ...info,
        accessToken: accessData.accessToken,
      },
    };
  } catch (err) {
    throw new Error(err);
  }
};
