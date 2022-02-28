import MetaHead from '@components/Meta';
import { HomeContainer, HomeContainerProps } from '@containers/Home';
import type { GetStaticProps, InferGetStaticPropsType, NextPage } from 'next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

export const getStaticProps: GetStaticProps<HomeContainerProps> = async ({ locale = 'id' }) => {
  const translate = await serverSideTranslations(locale, ['home']);
  const photos: HomeContainerProps['photos'] = await fetch(
    'https://jsonplaceholder.typicode.com/photos?_page=1&_limit=20',
  )
    .then((res): Promise<typeof photos> => Promise.resolve(res.json()))
    .catch((err): Promise<typeof photos> => {
      // eslint-disable-next-line no-console
      console.info('[ERROR] When fetch photos: ', err);
      return Promise.resolve([]);
    });

  return {
    props: { ...translate, photos },
    revalidate: 30,
  };
};

const Home: NextPage<InferGetStaticPropsType<typeof getStaticProps>> = (props) => {
  const { photos } = props;
  return (
    <>
      <MetaHead />
      <HomeContainer photos={photos} />
    </>
  );
};

export default Home;
