import { Billboard } from "@/components/billboard";
import { ProductList } from "@/components/product-list";
import { Container } from "@/components/ui/container";

import { getBillboard } from "@/actions/get-billboard";
import { getProducts } from "@/actions/get-products";

export const revalidate = 0;

export default async function HomePage() {
    const products = await getProducts({ isFeatured: true });
    const billboard = await getBillboard("d123a1bc-6740-4ed6-84ae-d85f505548f8");

    return (
        <Container>
            <div className="space-y-10 pb-10">
                <Billboard data={billboard} />

                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
    );
}
