import { SimpleGrid, Spinner, Text, Center } from "@chakra-ui/react";
import type { Product } from "../../types/Product";
import { ProductCard } from "./ProductCard";

interface ProductGridProps {
    products: Product[];
    isLoading: boolean;
    error?: string;
}

export function ProductGrid({ products, isLoading, error }: ProductGridProps) {
    if (isLoading) {
        return (
            <Center h="200px">
                <Spinner size="xl" />
            </Center>
        );
    }

    if (error) {
        return (
            <Center h="200px">
                <Text color="red.500">{error}</Text>
            </Center>
        );
    }

    return (
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3, xl: 4 }} gap={6}>
            {products.map((product) => (
                <ProductCard key={product.id} product={product} />
            ))}
        </SimpleGrid>
    );
}
