import Layout from "components/Layout/Layout"
import GlobalPageProps from "lib/GlobalPageProps"
import { FrontpageFeaturesInner, GlobalFrontpageApi, Media } from "../api"
import { getApiConfiguration } from "../lib/api"
import Image from "next/image"

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
      <div className="bg-white py-16">
        <div className="m-auto flex shrink-0 flex-col gap-4 px-6 text-gray-600 md:max-w-6xl md:flex-row">
          <div className="md:w-1/2">
            <Image src={aboutImage.url} alt={aboutImage.alt} width={aboutImage.width} height={aboutImage.height} />
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900">A beautiful about us</h2>
            <p className="mt-6 text-gray-600">
              {about}
            </p>
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
