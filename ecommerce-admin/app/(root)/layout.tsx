import { auth } from "@clerk/nextjs/server";
import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const { userId } = auth();

    if (!userId) {
        return redirect("/sign-in");
    }

    const store = await prismadb.store.findFirst({
        where: {
            userId,
        }
    });

    if (store) {
        return redirect(`/${store.id}`);
    }

    return (
        <>
            {children}
        </>
    );
}
