import Link from "next/link";

export default function Navbar() {
  return (
    <div className="navbar bg-primary text-lg px-12 fixed">
      <div className="flex-1">
        <Link href="/user" className="btn btn-ghost text-xl">Simply Crud</Link>
      </div>
      <div className="flex-none">
        <ul className="menu menu-horizontal px-10">
          <li>
            <Link href="/login">Login</Link>
          </li>
          <li>
            <details>
              <summary>User</summary>
              <ul className="bg-primary rounded-t-none">
                <li>
                  <Link href="/user">Dashboard</Link>
                </li>
                <li>
                  <Link href="/tambah-user">Tambah</Link>
                </li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  );
}
