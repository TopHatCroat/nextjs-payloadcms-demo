import { Payload } from "payload";

export const seed = async (payload: Payload): Promise<void> => {
  // Local API methods skip all access control by default
  // so we can easily create an admin user directly in init
  await payload.create<"users">({
    collection: "users",
    data: {
      email: "admin@example.com",
      password: "Admin1234",
      name: "Admin User",
      roles: ["admin"]
    }
  })

  // This user will be created with the default role of `editor`
  await payload.create<"users">({
    collection: "users",
    data: {
      email: "editor@example.com",
      password: "Editor1234",
      name: "Editor User",
      roles: ["editor"]
    }
  })
}