import { Box, Image, Text, VStack, Heading } from "@chakra-ui/react";
import type { Product } from "../../types/Product";

interface ProductCardProps {
    product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
    return (
        <Box 
            borderWidth="1px" 
            borderRadius="lg" 
            overflow="hidden" 
            p={4}
            _hover={{ 
                transform: 'scale(1.02)',
                transition: 'transform 0.2s'
            }}
        >
            <VStack gap={3}>
                <Image 
                    src={product.image} 
                    alt={product.title}
                    height="200px"
                    objectFit="contain"
                />
                <Heading size="md" overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap">
                    {product.title}
                </Heading>
                <Text color="green.600" fontSize="xl" fontWeight="bold">
                    ${product.price}
                </Text>
                <Text overflow="hidden" textOverflow="ellipsis" whiteSpace="nowrap" color="gray.600">
                    {product.description}
                </Text>
            </VStack>
        </Box>
    );
}
