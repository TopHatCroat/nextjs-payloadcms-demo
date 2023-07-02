import Layout from "components/Layout/Layout"
import GlobalPageProps from "lib/GlobalPageProps"

export default function Index({ pages }: GlobalPageProps) {
  return (
    <Layout pages={pages}>
      <div className="bg-white py-16">
        <div className="m-auto flex shrink-0 flex-col gap-4 px-6 text-gray-600 md:max-w-6xl md:flex-row">
          <div className="md:w-1/2">
            Image
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl font-bold text-gray-900">A beautiful about us</h2>
            <p className="mt-6 text-gray-600">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis
              delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id
              consequatur atque doloremque!
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}
