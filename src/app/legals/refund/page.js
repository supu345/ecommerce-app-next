import React, {Suspense} from 'react';
import Master from "@/components/master/Master";
import Refund from "@/components/legals/refund";
import LegalSkeleton from "@/skeleton/legal-skeleton";
import CategoriesSkeleton from "@/skeleton/categories-skeleton";
import Categories from "@/components/product/categories";

const Page = () => {
    return (
        <Master>
            <Suspense fallback={<LegalSkeleton/>}>
                <Refund/>
            </Suspense>
            <Suspense fallback={<CategoriesSkeleton/>}>
                <Categories/>
            </Suspense>
        </Master>
    );
};

export default Page;