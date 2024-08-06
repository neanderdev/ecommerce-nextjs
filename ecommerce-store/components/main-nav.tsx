"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";

import { Category } from "@/types";

interface MainNavProps {
    data: Category[];
}

export function MainNav({ data }: MainNavProps) {
    const pathname = usePathname();

    const routes = data.map((route) => ({
        href: `/category/${route.id}`,
        label: route.name,
        active: pathname === `/category/${route.id}`,
    }));

    return (
        <div className="mx-6 flex items-center space-x-4 lg:space-x-6">
            {routes.map((route, index) => (
                <Link
                    key={index}
                    href={route.href}
                    className={cn(
                        "text-sm font-medium transition-colors hover:text-black",
                        route.active ? "text-black" : "text-neutral-500"
                    )}
                >
                    {route.label}
                </Link>
            ))}
        </div>
    );
}
