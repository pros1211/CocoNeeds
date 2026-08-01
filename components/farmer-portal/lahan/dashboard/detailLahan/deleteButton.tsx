"use client";

import { deleteLahan } from "@/app/action";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";

export default function DeleteButton({ lahanId }: { lahanId: string }) {
  async function handleDelete() {
    const result = await deleteLahan(lahanId);

    if (result.success) {
      toast.success("Lahan berhasil dihapus");
    } else {
      toast.error(result.error);
    }
  }

  return (
    <Button variant="destructive" onClick={handleDelete}>
      Hapus
    </Button>
  );
}
