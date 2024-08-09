import { UserButton } from "@clerk/nextjs";
import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";

import { MainNav } from "./main-nav";
import { StoreSwitcher } from "./store-switcher";
import { ThemeToggle } from "./theme-toggle";

export async function Navbar() {
    const { userId } = auth();

    if (!userId) {
        return redirect("/sign-in");
    }

    const stores = await prismadb.store.findMany({
        where: {
            userId,
        },
    });

    return (
        <div className="border-b">
            <div className="flex items-center h-16 px-4">
                <StoreSwitcher
                    items={stores}
                />

                <MainNav className="mx-6" />

                <div className="ml-auto flex items-center space-x-4">
                    <ThemeToggle />

                    <UserButton
                        afterSignOutUrl="/"
                    />
                </div>
            </div>
        </div>
    );
}
