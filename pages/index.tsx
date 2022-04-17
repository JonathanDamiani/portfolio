import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { IMainFields } from '../src/@types/contentful'
import ContentService from '../src/utils/content-service'
import styles from '../styles/Home.module.css'

interface Props {
  main: IMainFields
}

const Home: NextPage<Props> = ({ main }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Jonathan Damiani</title>
        <meta name="description" content="Frontend Engineer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <div>{documentToReactComponents(main.description!)}</div>
      </main>

      <footer className={styles.footer}></footer>
    </div>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const main = await ContentService.instance.getEntryById<IMainFields>(
    process.env.CONTENTFUL_MAIN_ID,
    locale!
  )

  return {
    props: {
      main: main.fields,
    },
  }
}
