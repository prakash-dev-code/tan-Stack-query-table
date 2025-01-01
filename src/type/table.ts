export interface TData {
  id?: string;
  amount?: number;
  status?: "pending" | "processing" | "success" | "failed";
  email?: string;
}
