import { Payload } from "payload"
import fs from "fs"

export const seed = async (payload: Payload): Promise<void> => {
  // Local API methods skip all access control by default
  // so we can easily create an admin user directly in init
  const adminUser = await payload.create<"users">({
    collection: "users",
    data: {
      email: "admin@example.com",
      password: "Admin1234",
      name: "Admin User",
      roles: ["admin"],
    },
  })

  // This user will be created with the default role of `editor`
  const editorUser = await payload.create<"users">({
    collection: "users",
    data: {
      email: "editor@example.com",
      password: "Editor1234",
      name: "Editor User",
      roles: ["editor"],
    },
  })

  const frontpageImage = fs.readFileSync("./seed/frontpage.png")
  const frontpageMedia = await payload.create<"media">({
    collection: "media",
    data: {
      alt: "Four owls sitting on a branch",
    },
    overwriteExistingFiles: true,
    file: {
      data: frontpageImage,
      mimetype: "image/png",
      name: "frontpage",
      size: frontpageImage.length,
    },
  })

  await payload.updateGlobal<"frontpage">({
    slug: "frontpage",
    data: {
      about:
        "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eum omnis voluptatem accusantium nemo perspiciatis delectus atque autem! Voluptatum tenetur beatae unde aperiam, repellat expedita consequatur! Officiis id consequatur atque doloremque! Nobis minus voluptatibus pariatur dignissimos libero quaerat iure expedita at? Asperiores nemo possimus nesciunt dicta veniam aspernatur quam mollitia.",
      aboutImage: frontpageMedia.id,
      features: [
        {
          title: "Feature 1",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        },
        {
          title: "Feature 2",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        },
        {
          title: "Feature 3",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        },
        {
          title: "Feature 4",
          content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        },
      ],
    },
  })

  const backendSkill = await payload.create<"skills">({
    collection: "skills",
    data: {
      name: "Backend",
    },
  })

  const frontendSkill = await payload.create<"skills">({
    collection: "skills",
    data: {
      name: "Frontend",
    },
  })

  const projectManagementSkill = await payload.create<"skills">({
    collection: "skills",
    data: {
      name: "Project Management",
    },
  })

  const frontendProfile = await payload.create<"profiles">({
    collection: "profiles",
    data: {
      name: "Frontend Developer",
      description: "I am a frontend developer with 5 years of experience.",
      skills: [frontendSkill.id],
    },
  })

  const fullstackProfile = await payload.create<"profiles">({
    collection: "profiles",
    data: {
      name: "Fullstack Developer",
      description: "I am a fullstack developer with 10 years of experience.",
      skills: [frontendSkill.id, backendSkill.id],
    },
  })

  const projectManagerProfile = await payload.create<"profiles">({
    collection: "profiles",
    data: {
      name: "Project Manager",
      description: "I am a project manager with 15 years of experience.",
      skills: [projectManagementSkill.id],
    },
  })

  const blackhole = fs.readFileSync("./seed/blackhole.jpg")
  const blackholeMedia = await payload.create<"media">({
    collection: "media",
    data: {
      alt: "An image of a black hole",
    },
    overwriteExistingFiles: true,
    file: {
      data: blackhole,
      mimetype: "image/jpeg",
      name: "blackhole",
      size: blackhole.length,
    },
  })

  await payload.create<"posts">({
    collection: "posts",
    data: {
      description: "EHT scientists can now compare images of two black holes of very different sizes.",
      keywords: "black hole, space, science, astronomy",
      postImage: blackholeMedia.id,
      title: "A picture of a black hole",
      status: "published",
      author: editorUser.id,
      publishedDate: new Date().toISOString(),
      ...blackholeContent,
    },
  })

  const seneca = fs.readFileSync("./seed/seneca.png")
  const senecaMedia = await payload.create<"media">({
    collection: "media",
    data: {
      alt: "A picture of Seneca",
    },
    overwriteExistingFiles: true,
    file: {
      data: seneca,
      mimetype: "image/png",
      name: "seneca",
      size: seneca.length,
    },
  })

  await payload.create<"posts">({
    collection: "posts",
    data: {
      description: "A very short blog post just to fill up some space.",
      keywords: "content",
      postImage: senecaMedia.id,
      title: "A short blog post",
      status: "published",
      author: editorUser.id,
      publishedDate: new Date().toISOString(),
      content: [
        {
          children: [
            {
              text: "Its a very short blog post.",
            },
          ],
        },
      ],
    },
  })
}

const blackholeContent = {
  content: [
    {
      children: [
        {
          text: "At the heart of our ",
        },
        {
          type: "link",
          newTab: false,
          url: "https://en.wikipedia.org/wiki/Milky_Way",
          children: [
            {
              text: "Milky Way",
            },
          ],
        },
        {
          text: " galaxy lurks a supermassive black hole more than four million times the mass of our Sun. Scientists with the international ",
        },
        {
          type: "link",
          newTab: false,
          url: "https://eventhorizontelescope.org",
          children: [
            {
              text: "Event Horizon Telescope",
            },
          ],
        },
        {
          text: " (EHT) collaboration have now produced the first image of that black hole, showing that it has a ring structure. The collaboration made the announcement during a livestreamed press conference this morning from the European Southern Observatory's headquarters in Munich, Germany, as well as numerous other simultaneous press conferences around the world. \nSix papers about the research ",
        },
        {
          type: "link",
          newTab: false,
          url: "https://iopscience.iop.org/journal/2041-8205/page/Focus_on_First_Sgr_A_Results",
          children: [
            {
              text: "have been published",
            },
          ],
        },
        {
          text: " in a special issue of The Astronomical Journal Letters.",
        },
      ],
    },
  ],
}
