import { useQuery } from "@tanstack/react-query";
import { getProducts } from "../services/productService";

export function useProducts() {
  const query = useQuery({
    queryKey: ["products"],
    queryFn: getProducts,
  });
  return query;
}