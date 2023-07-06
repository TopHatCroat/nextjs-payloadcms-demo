import Layout from "components/Layout/Layout"
import GlobalPageProps from "lib/GlobalPageProps"
import { FrontpageFeaturesInner, GlobalFrontpageApi, Media } from "api"
import { getApiConfiguration } from "lib/api"
import Image from "next/image"
import { Button } from "components/Button/Button"

interface IndexProps extends GlobalPageProps {
  about: string
  aboutImage: {
    url: string
    width: number
    height: number
    alt: string
  }
  features: Array<{
    title: string
    description: string
  }>
}

export default function Index({ pages, about, aboutImage, features }: IndexProps) {
  return (
    <Layout pages={pages}>
      <div className="relative bg-white py-16">
        <div className="mx-auto flex max-w-screen-2xl flex-col items-center justify-between sm:px-8 lg:flex-row lg:pt-16">
          <div className="ml-8 max-w-lg lg:mr-0 lg:max-w-xl xl:max-w-2xl">
            <h2 className="text-left text-4xl leading-snug tracking-wide text-primary-900 sm:text-5xl xl:text-6xl">
              A beautiful about us
            </h2>
            <p className="text-secondary-100 mt-4 max-w-lg text-sm font-medium leading-relaxed text-gray-700 md:text-base lg:text-lg">
              A short description of the service we provide. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Button href="/about" className="mt-8">
              Learn more
            </Button>
          </div>
          <div className="relative z-40 mt-16 transform lg:ml-32 lg:mr-0 lg:mt-0 xl:-translate-x-24 xl:-translate-y-16">
            <Image src={aboutImage.url} alt={aboutImage.alt} width={aboutImage.width} height={aboutImage.height} />
            <div className="relative inset-x-0 bottom-0 z-20 max-w-md bg-primary-900 p-8 text-sm font-medium leading-relaxed text-gray-200">
              <blockquote>{about}</blockquote>
            </div>
          </div>
        </div>
        <div className="mx-auto flex max-w-none flex-col px-16 sm:px-8 md:mx-0 md:flex-row">
          {features.map((feature, index) => {
            return (
              <div key={index} className="mt-10 flex flex-col items-center last:mr-0 md:mr-8 md:items-start lg:mt-8">
                <h3 className="ml-3 text-xl font-bold text-primary-900">{feature.title}</h3>
                <p className="mt-4 text-center leading-relaxed text-gray-600 md:text-left">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const frontendApi = new GlobalFrontpageApi(getApiConfiguration())
  const frontpage = await frontendApi.globalsFrontpageGet({ depth: 1 })

  const aboutImage = frontpage.data.aboutImage as Media
  const features = (frontpage.data.features as FrontpageFeaturesInner[]) || []

  const props = {
    about: frontpage.data?.about || "",
    aboutImage: {
      url: aboutImage.url,
      width: aboutImage.width,
      height: aboutImage.height,
      alt: aboutImage.alt,
    },
    features: features.map((feature) => {
      return {
        title: feature.title,
        description: feature.content,
      }
    }),
  }

  return {
    props,
    revalidate: 60,
  }
}
