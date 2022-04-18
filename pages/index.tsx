import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import type { GetStaticProps, NextPage } from 'next'
import Head from 'next/head'
import { IMainFields } from '../src/@types/contentful'
import ContentService from '../src/utils/content-service'
import { Nav } from '../src/containers'

interface Props {
  main: IMainFields
  navigationLinks: Record<string, any> | undefined
}

const Home: NextPage<Props> = ({ main, navigationLinks }) => {
  return (
    <>
      <Head>
        <title>Jonathan Damiani</title>
        <meta name="description" content="Frontend Engineer Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {navigationLinks !== undefined && <Nav links={navigationLinks} />}
      <main className="main">
        <div>{documentToReactComponents(main.description!)}</div>
      </main>
    </>
  )
}

export default Home

export const getStaticProps: GetStaticProps<Props> = async ({ locale }) => {
  const main = (
    await ContentService.instance.getEntryById<IMainFields>(
      process.env.CONTENTFUL_MAIN_ID,
      locale!
    )
  ).fields

  return {
    props: {
      main: main,
      navigationLinks: main.navigation?.fields.links,
    },
  }
}
