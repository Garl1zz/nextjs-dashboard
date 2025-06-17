import { stackServerApp } from "@/stack";

export default async function CheckGlobalPermission() {
  const user = await stackServerApp.getUser({ or: 'redirect' });
  const permission = await user.getPermission('access_admin_dashboard');

  return (
    <div>
      {permission ? 'You can access the admin dashboard' : 'Access denied'}
    </div>
  );
}
