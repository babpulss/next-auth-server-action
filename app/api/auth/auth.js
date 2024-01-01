import { getServerSession } from "next-auth"
import { authOptions } from "./[...nextauth]/route"

export default async () => await getServerSession(authOptions)