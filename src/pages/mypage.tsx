import { sessions, userData } from 'data/user';
import { GetServerSidePropsContext } from 'next';
import nookies from 'nookies';

const MyPage = ({ name }: { name: string }) => {
  return (
    <div className='flex-cover'>
      <div className='mypage-card'>
        <h3>マイページ</h3>
        <p>{name}さんでログインしています</p>
      </div>
    </div>
  );
};

export const getServerSideProps = async (ctx: GetServerSidePropsContext) => {
  const cookies = nookies.get(ctx);

  const session = sessions.find(session => session.value == cookies['loginId']);
  const user = userData.find(user => user.id == session?.user_id);

  if (user) return { props: { name: user.name } };
  return {
    redirect: {
      destination: '/',
    },
  };
};

export default MyPage;
