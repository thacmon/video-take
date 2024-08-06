import Link from 'next/link';
import NavLinks from './nav-links';
import { Amplify } from "aws-amplify"
import AcmeLogo from '../acme-logo';
import { PowerIcon } from '@heroicons/react/24/outline';
import { signOut } from "aws-amplify/auth"
import outputs from "../../../amplify_outputs.json"

Amplify.configure(outputs)

export default function SideNav() {
  async function handleSignOut() {
    await signOut()
  }
  return (
    <div className="flex h-full flex-col px-3 py-4 md:px-2">
      <Link
        className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"
        href="/"
      >
        <div className="w-32 text-white md:w-40">
          <AcmeLogo />
        </div>
      </Link>
      <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
        <NavLinks />
        <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
        <form>
          <button onClick={handleSignOut} className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
            <PowerIcon className="w-6" />
            <div className="hidden md:block">Sign Out</div>
          </button>
          <button className="block md:hidden" onClick={handleSignOut}>Exit</button>
        </form>
      </div>
    </div>
  );
}
