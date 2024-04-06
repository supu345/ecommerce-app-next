import React, {Suspense} from 'react';
import Master from "@/components/master/Master";
import LegalSkeleton from "@/skeleton/legal-skeleton";
import Terms from "@/components/legals/terms";
import CategoriesSkeleton from "@/skeleton/categories-skeleton";
import Categories from "@/components/product/categories";

const Page = () => {
    return (
        <Master>
            <Suspense fallback={<LegalSkeleton/>}>
                <Terms/>
            </Suspense>
            <Suspense fallback={<CategoriesSkeleton/>}>
                <Categories/>
            </Suspense>
        </Master>
    );
};

export default Page;