import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";

export default async function DashboardLayout({
    children,
    params,
}: Readonly<{
    children: React.ReactNode;
    params: { storeId: string };
}>) {
    const { userId } = auth();

    if (!userId) {
        return redirect("/sign-in");
    }

    const store = await prismadb.store.findFirst({
        where: {
            id: params.storeId,
            userId,
        }
    });

    if (!store) {
        return redirect("/");
    }

    return (
        <>
            <div>This will be a Navbar</div>

            {children}
        </>
    );
}