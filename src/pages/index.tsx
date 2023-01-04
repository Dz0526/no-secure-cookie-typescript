import type { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useState } from 'react';

type Form = {
  name: string;
  password: string;
};

const Home: NextPage = () => {
  const [form, setForm] = useState<Form>({ name: '', password: '' });
  const router = useRouter();
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
        <form
          className='login-form'
          method='POST'
          onSubmit={e => {
            e.preventDefault();
            fetch('/api/login', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(form),
            }).then(res => {
              if (res.status == 200) router.push('/mypage');
            });
          }}
        >
          <input
            type='text'
            placeholder='ユーザ名'
            name='username'
            value={form.name}
            onChange={e => setForm({ ...form, name: e.target.value })}
          />
          <input
            type='password'
            placeholder='パスワード'
            name='password'
            value={form.password}
            onChange={e => setForm({ ...form, password: e.target.value })}
          />
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
