"use client";

import { Expand, ShoppingCart } from "lucide-react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MouseEvent } from "react";

import { usePreviewModal } from "@/hooks/use-preview-modal";

import { Product } from "@/types";

import { Currency } from "./ui/currency";
import { IconButton } from "./ui/icon-button";

interface ProductCardProps {
    data: Product;
}

export function ProductCard({ data }: ProductCardProps) {
    const previewModal = usePreviewModal();
    const router = useRouter();

    function handleClick() {
        router.push(`/product/${data.id}`);
    }

    function onPreview(event: MouseEvent<HTMLButtonElement>) {
        event.stopPropagation();

        previewModal.onOpen(data);
    }

    return (
        <div onClick={handleClick} className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
            {/* Images and Actions */}
            <div className="aspect-square rounded-xl bg-gray-100 relative">
                <Image
                    className="aspect-square object-cover rounded-md"
                    src={data?.images?.[0].url}
                    alt="Image"
                    fill
                />

                <div className="opacity-0 group-hover:opacity-100 absolute w-full px-6 bottom-5">
                    <div className="flex gap-x-6 justify-center">
                        <IconButton
                            onClick={onPreview}
                            icon={<Expand size={20} className="text-gray-600" />}
                        />

                        <IconButton
                            onClick={() => { }}
                            icon={<ShoppingCart size={20} className="text-gray-600" />}
                        />
                    </div>
                </div>
            </div>

            {/* Description */}
            <div>
                <p className="font-semibold text-lg">
                    {data.name}
                </p>

                <p className="text-sm text-gray-500">
                    {data.category?.name}
                </p>
            </div>

            {/* Price */}
            <div className="flex items-center justify-between">
                <Currency value={data?.price} />
            </div>
        </div>
    );
}
