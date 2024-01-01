"use server"
import auth from "@/app/api/auth/auth"
import { redirect } from "next/navigation"

export async function action1() {
  const session = await auth()
  console.log('action1 is allow to all: ', session)
  return "hello"
}

async function a2() {
  const session = await auth()
  console.log('action2 is allow to only admin: ', session)
  return "hello"
}

export const action2 = new Proxy(a2, {
  async apply(target) {
    const session = await auth()
    if (!session) redirect("/api/auth/signin")
    target()
  }
})