import { useQuery } from "@tanstack/react-query";
import { getMyOrders } from "../services/orderService";

function useOrders() {
  return useQuery({
    queryKey: ["my-orders"],
    queryFn: async () => {
      const result = await getMyOrders();

      const response = JSON.parse(result.responseBody);

      if (!response.success) {
  throw new Error(
    response.error || response.message || "فشل جلب الطلبات"
  );
}

      return response.orders;
    },
  });
}

export default useOrders;