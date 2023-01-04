import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className='login-page'>
      <div className='form'>
        <div className='login'>
          <div className='login-header'>
            <h3>会員様ログイン</h3>
            <p>
              Aストア（www.a-store.com）でのお買い物にはログインが必要です！
            </p>
          </div>
        </div>
        <form className='login-form' method='POST' action='./login.html'>
          <input type='text' placeholder='ユーザ名' name='username' />
          <input type='password' placeholder='パスワード' name='password' />
          <button>ログイン</button>
          <p className='message'>
            まだ会員登録をされていないお客様
            <a href='#'>アカウントを作る</a>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Home;
