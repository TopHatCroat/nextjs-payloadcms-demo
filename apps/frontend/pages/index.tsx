import Layout from "components/Layout/Layout"
import GlobalPageProps from "lib/GlobalPageProps"
import { FrontpageFeaturesInner, GlobalFrontpageApi, Media } from "../api"
import { getApiConfiguration } from "../lib/api"
import Image from "next/image"
import { Button } from "../components/Button/Button"

interface IndexProps extends GlobalPageProps {
  about: string,
  aboutImage: {
    url: string,
    width: number,
    height: number,
    alt: string,
  }
}

export default function Index({ pages, about, aboutImage }: IndexProps) {
  return (
    <Layout pages={pages}>
      <div className="relative bg-white py-16">
        <div
          className="flex flex-col lg:flex-row justify-between items-center lg:pt-16 max-w-screen-2xl mx-auto sm:px-8">
          <div className="ml-8 lg:mr-0 max-w-lg lg:max-w-xl xl:max-w-2xl">
            <h2
              className="text-primary-900 text-4xl sm:text-5xl tracking-wide text-left leading-snug xl:text-6xl">
              A beautiful about us
            </h2>
            <p
              className="mt-4 text-sm md:text-base lg:text-lg font-medium leading-relaxed text-secondary-100 text-gray-700 max-w-lg">
              A short description of the service we provide. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Button href="/about" className="mt-8">
              Learn more
            </Button>
          </div>
          <div
            className="relative lg:mr-0 mt-16 lg:mt-0 lg:ml-32 z-40 transform xl:-translate-x-24 xl:-translate-y-16">
            <Image src={aboutImage.url} alt={aboutImage.alt} width={aboutImage.width} height={aboutImage.height}/>
            <div
              className="relative max-w-md bottom-0 inset-x-0 z-20 p-8 bg-primary-900 text-gray-200 font-medium text-sm leading-relaxed">
              <blockquote>
                {about}
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export async function getStaticProps() {
  const frontendApi = new GlobalFrontpageApi(getApiConfiguration())
  const frontpage = await frontendApi.globalsFrontpageGet({ depth: 1 })

  const aboutImage = frontpage.data.aboutImage as Media
  const features = frontpage.data.features as FrontpageFeaturesInner[] || []

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
    })
  }

  return {
    props,
    revalidate: 60,
  }
}
