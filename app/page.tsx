import { stackServerApp } from "@/stack";
import { redirect } from "next/navigation";


export default async function CheckUserPermission() {
  const user = await stackServerApp.getUser({ or: 'redirect' });
  const admin = await stackServerApp.getTeam('09b45a29-e6b8-49ea-969b-28162e013b89');
  const hasAdminAccess = await user.getPermission(admin!, 'team_admin');

  if (hasAdminAccess) {
    redirect("/adminpage");    
  } else {
    redirect("/homepage");     
  }
}