import React, {Suspense} from 'react';
import Master from "@/components/master/Master";
import LegalSkeleton from "@/skeleton/legal-skeleton";
import Complain from "@/components/legals/complain";
import CategoriesSkeleton from "@/skeleton/categories-skeleton";
import Categories from "@/components/product/categories";

const Page = () => {
    return (
        <Master>
            <Suspense fallback={<LegalSkeleton/>}>
                <Complain/>
            </Suspense>
            <Suspense fallback={<CategoriesSkeleton/>}>
                <Categories/>
            </Suspense>
        </Master>
    );
};

export default Page;