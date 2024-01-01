import { getServerSession } from "next-auth"
import { authOptions } from "../api/auth/[...nextauth]/route";
import Show from "./clientside"
import auth from "../api/auth/auth";
import Link from "next/link";

async function Page() {
  // const session = await getServerSession();
  // const session = await getServerSession(authOptions);
  const session = await auth()
  return (
    <div>auth1 
      <hr/>
      login server name is {session?.user?.username}
      <hr/> 
        <Show />
      <hr/> 
      <Link href="/"><button>go to home</button></Link>
      <hr/> 
      <Link href="/auth2"><button>go to auth2</button></Link>
    </div>
  )
}
export default Page