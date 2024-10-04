// import Link from "next/link";
// import { Button } from "@/components/ui/button";
// import { auth } from "@/auth";
// import { handleSignOut } from "@/app/actions/authActions";

// export default async function Navbar() {
//   const session = await auth();
//   console.log('session', { session });
//   return (
//     <nav className="flex justify-between items-center py-3 px-4 bg-white shadow-md">
//       <Link href="/" className="text-xl font-bold">
//        AI Extenion
//       </Link>
//       {!session ? (
//         <Link href="/auth/signin">
//           <Button variant="default">Sign In</Button>
//         </Link>
//       ) : (
//         <form action={handleSignOut}>
//           <Button variant="default" type="submit">
//             Sign Out
//           </Button>
//         </form>
//       )}
//     </nav>
//   );
// }

import Link from "next/link";
import { Button } from "@/components/ui/button";
// import { getSession } from "@/lib/getSession";
import { signOut } from "@/auth";

const Navbar = async () => {
  // const session = await getSession();
  // const user = session?.user;
  // console.log({session})
  return (
    <nav className="flex justify-around items-center py-4 bg-[#141414] text-white">
      <Link href="/" className="text-xl font-bold">
        My Facny Website
      </Link>

      <ul className="hidden md:flex space-x-4 list-none">
        {/* {!user ? ( */}
          <>
            <li>
              <Link href="/login" className="hover:text-gray-400">
                Login
              </Link>
            </li>
            <li>
              <Link href="/register" className="hover:text-gray-400">
                Register
              </Link>
            </li>
          </>
        {/* ) : ( */}
          <>
            <li className="mt-2">
              <Link href="/private/dashboard" className="hover:text-gray-400">
                Dashboard
              </Link>
            </li>

            <form
              action={async () => {
                "use server";
                await signOut();
              }}
            >
              <Button type="submit" variant={"ghost"}>
                Logout
              </Button>
            </form>
          </>
         {/* )} */}
      </ul>
    </nav>
  );
};

export default Navbar;