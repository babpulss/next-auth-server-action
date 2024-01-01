import auth from "../api/auth/auth";
import Link from "next/link";
import ClientSide from "./clientside";

async function Page() {
  const session = await auth();
  console.log("in auth2 server: ", session);
  return (
    <div>
      only allowed login user
      <hr />
      <Link href="/">go to home</Link>
      <hr />
      <ClientSide />
    </div>
  );
}
export default Page;
