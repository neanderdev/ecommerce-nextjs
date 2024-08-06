import Link from "next/link";

import { getCategories } from "@/actions/get-categories";

import { MainNav } from "./main-nav";
import { NavbarActions } from "./navbar-actions";
import { Container } from "./ui/container";

export const revalidate = 0;

export async function Navbar() {
    const categories = await getCategories();

    return (
        <div className="border-b">
            <Container>
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center">
                    <Link href="/" className="flex ml-4 lg:ml-0 gap-x-2">
                        <p className="font-bold text-xl">STORE</p>
                    </Link>

                    <MainNav data={categories} />

                    <NavbarActions />
                </div>
            </Container>
        </div>
    );
}
