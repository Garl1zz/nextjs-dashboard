import { StackHandler } from "@stackframe/stack";
import { stackServerApp } from "../../../stack";

export default async function Handler(props: unknown) {
  const user = await stackServerApp.getUser();
  console.log("User:", user ? "Authenticated" : "Not Authenticated");
  return <StackHandler fullPage app={stackServerApp} routeProps={props} />;
}
