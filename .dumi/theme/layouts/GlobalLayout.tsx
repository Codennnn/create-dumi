import { Outlet } from 'dumi';

export default function GlobalLayout() {
  return (
    <div className="h-full">
      <Outlet />
    </div>
  );
}
