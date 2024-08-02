"use client";

import { useParams, useRouter } from "next/navigation";

import { DataTable } from "@/components/ui/data-table";
import { Heading } from "@/components/ui/heading";
import { Separator } from "@/components/ui/separator";

import { OrderColumn, columns } from "./columns";

interface OrderClientProps {
    data: OrderColumn[];
};

export function OrderClient({ data }: OrderClientProps) {
    const router = useRouter();
    const params = useParams();

    return (
        <>
            <Heading
                title={`Orders (${data.length})`}
                description="Manage orders for your store"
            />

            <Separator />

            <DataTable columns={columns} data={data} searchKey="products" />
        </>
    );
}
