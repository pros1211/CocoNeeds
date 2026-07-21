"use client";
import React, { useState } from "react";
import {
  addHarvestLog,
  addMaintenanceLog,
  addProductionLog,
} from "@/app/action";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { FileText, Tractor, Factory, Sprout, CalendarIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { id } from "date-fns/locale";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
interface LahanOption {
  id: string;
  nama: string;
}
interface ReportMenuProps {
  lahanList: LahanOption[];
}

const LaporanLahan = ({ lahanList }: ReportMenuProps) => {
  const [activeForm, setActiveForm] = useState<
    "harvest" | "maintenance" | "production" | null
  >(null);
  const [selectedLahan, setSelectedLahan] = useState("");
  const [maintenanceDate, setMaintenanceDate] = useState<Date>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleClose = () => {
    setActiveForm(null);
    setSelectedLahan("");
  };
  const handleSubmit = async (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!selectedLahan) return alert("Pilih lahan terlebih dahulu!");
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = Object.fromEntries(formData.entries());

    data.lahan_id = selectedLahan;

    let response;

    if (activeForm === "harvest") {
      response = await addHarvestLog({
        lahan_id: selectedLahan,
        tanggal_panen: formData.get("tanggal_panen") as string,
        jenis_kelapa: formData.get("jenis_kelapa") as string,
        kategori_usia: formData.get("kategori_usia") as string,
        jumlah: Number(formData.get("jumlah")),
        berat_total: Number(formData.get("berat_total")),
      });
    } else if (activeForm === "maintenance") {
      if (!maintenanceDate) return alert("Pilih tanggal perawatan!");
      response = await addMaintenanceLog({
        lahan_id: selectedLahan,
        tanggal_perawatan: format(maintenanceDate, "yyyy-MM-dd"),
        ph_tanah: formData.get("ph_tanah")
          ? Number(formData.get("ph_tanah"))
          : undefined,
        kelembapan_tanah: formData.get("kelembapan_tanah")
          ? Number(formData.get("kelembapan_tanah"))
          : undefined,
        bibit_ditambah: formData.get("bibit_ditambah")
          ? Number(formData.get("bibit_ditambah"))
          : undefined,
        pohon_mati: formData.get("pohon_mati")
          ? Number(formData.get("pohon_mati"))
          : undefined,
        jenis_pupuk: formData.get("jenis_pupuk") as string,
        jumlah_pupuk: Number(formData.get("jumlah_pupuk_kg")),
      });
    } else if (activeForm === "production") {
      if (!maintenanceDate) return alert("Pilih tanggal produksi!");
      response = await addProductionLog({
        lahan_id: selectedLahan,
        tanggal_produksi: format(maintenanceDate, "yyyy-MM-dd"),
        jenis_produk: formData.get("jenis_produk") as string,
        jumlah_kg: Number(formData.get("jumlah_kg")),
      });
    }

    setIsSubmitting(false);

    if (response?.success) {
      alert("Laporan berhasil disimpan!");
      handleClose();
    } else {
      alert("Error: " + response?.error);
    }
  };
  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger className="inline-flex items-center justify-center rounded-xl border border-[#269957] bg-background px-4 py-2 text-sm font-semibold text-[#269957] shadow-sm hover:bg-[#269957]/10 transition-colors">
          <FileText className="w-4 h-4 mr-2" />
          Laporan Lahan
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="w-56 p-2 rounded-xl border-gray-200 shadow-sm"
        >
          <DropdownMenuItem
            className="cursor-pointer py-3 rounded-lg"
            onClick={() => setActiveForm("harvest")}
          >
            <Sprout className="w-4 h-4 mr-3 text-[#269957]" />
            <span className="font-medium">Catat Hasil Panen</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer py-3 rounded-lg"
            onClick={() => setActiveForm("maintenance")}
          >
            <Tractor className="w-4 h-4 mr-3 text-amber-600" />
            <span className="font-medium">Laporan Perawatan</span>
          </DropdownMenuItem>
          <DropdownMenuItem
            className="cursor-pointer py-3 rounded-lg"
            onClick={() => setActiveForm("production")}
          >
            <Factory className="w-4 h-4 mr-3 text-blue-600" />
            <span className="font-medium">Laporan Produksi</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <Dialog
        open={activeForm === "harvest"}
        onOpenChange={(isOpen) => !isOpen && handleClose()}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Hasil Panen</DialogTitle>
            <DialogDescription>Catat hasil panenmu</DialogDescription>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
            <div className="flex flex-col gap-2">
              <Label className="font-semibold text-gray-700">
                Pilih Lahan *
              </Label>
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                required
                value={selectedLahan}
                onChange={(e) => setSelectedLahan(e.target.value)}
              >
                <option value="" disabled>
                  -- Pilih Lahan --
                </option>
                {lahanList.map((lahan: LahanOption) => (
                  <option key={lahan.id} value={lahan.id}>
                    {lahan.nama}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Tanggal Panen *</Label>
              <Input type="date" required />
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2 flex-1">
                <Label>Jenis Kelapa *</Label>
                <select
                  name="jenis_kelapa"
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="kelapa_genjah">Kelapa Genjah</option>
                  <option value="kelapa_dalam">Kelapa Dalam</option>
                  <option value="kelapa_hibrida">Kelapa Hibrida</option>
                </select>
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <Label>Usia Kelapa *</Label>
                <select
                  name="kategori_usia"
                  required
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                >
                  <option value="kelapa_muda">Kelapa Muda</option>
                  <option value="kelapa_tua">Kelapa Tua</option>
                </select>
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2 flex-1">
                <Label>Jumlah Butir *</Label>
                <Input type="number" placeholder="Cth: 500" required />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <Label>Berat Total (Kg)</Label>
                <Input type="number" placeholder="Cth: 750" />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-[#269957] hover:bg-[#1e7a45] mt-4"
            >
              Simpan Laporan
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog
        open={activeForm === "maintenance"}
        onOpenChange={(isOpen) => !isOpen && handleClose()}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Laporan Perawatan Lahan</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
            <div className="flex flex-col gap-2">
              <Label className="font-semibold text-gray-700">
                Pilih Lahan *
              </Label>
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                required
                value={selectedLahan}
                onChange={(e) => setSelectedLahan(e.target.value)}
              >
                <option value="" disabled>
                  -- Pilih Lahan --
                </option>
                {lahanList.map((lahan: LahanOption) => (
                  <option key={lahan.id} value={lahan.id}>
                    {lahan.nama}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Tanggal perawatan *</Label>
              <Popover>
                <PopoverTrigger
                  className={cn(
                    "flex h-10 w-full items-center justify-start rounded-xl border border-input bg-background px-4 py-2 text-sm font-normal shadow-sm ring-offset-background hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                    !maintenanceDate && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {maintenanceDate ? (
                    format(maintenanceDate, "dd MMMM yyyy", { locale: id })
                  ) : (
                    <span>Pilih tanggal</span>
                  )}
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={maintenanceDate}
                    onSelect={setMaintenanceDate}
                  />
                </PopoverContent>
              </Popover>
              <input
                type="hidden"
                name="tanggal_perawatan"
                value={
                  maintenanceDate ? format(maintenanceDate, "yyyy-MM-dd") : ""
                }
              />
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2 flex-1">
                <Label>PH tanah</Label>
                <Input
                  type="number"
                  step="0.1"
                  name="ph_tanah"
                  placeholder="Cth: 6.0"
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <Label>Kelembapan tanah (%)</Label>
                <Input
                  type="number"
                  name="kelembapan_tanah"
                  placeholder="Contoh: 75"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2 flex-1">
                <Label>Bibit ditambah</Label>
                <Input
                  type="number"
                  name="bibit_ditambah"
                  placeholder="Contoh: 10"
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <Label>Pohon mati</Label>
                <Input
                  type="number"
                  name="pohon_mati"
                  placeholder="Contoh: 20"
                />
              </div>
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2 flex-1">
                <Label>Pupuk</Label>
                <Input
                  type="text"
                  name="jenis_pupuk"
                  placeholder="Contoh: pupuk organik"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <Label>Jumlah pupuk (Kg)</Label>
                <Input
                  type="number"
                  name="jumlah_pupuk"
                  placeholder="Contoh: 250"
                  required
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-[#269957] hover:bg-[#1e7a45] mt-4"
            >
              Simpan Laporan
            </Button>
          </form>
        </DialogContent>
      </Dialog>
      <Dialog
        open={activeForm === "production"}
        onOpenChange={(isOpen) => !isOpen && handleClose()}
      >
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Laporan Produksi</DialogTitle>
          </DialogHeader>
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 mt-2">
            <div className="flex flex-col gap-2">
              <Label className="font-semibold text-gray-700">
                Pilih Lahan *
              </Label>
              <select
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                required
                value={selectedLahan}
                onChange={(e) => setSelectedLahan(e.target.value)}
              >
                <option value="" disabled>
                  -- Pilih Lahan --
                </option>
                {lahanList.map((lahan: LahanOption) => (
                  <option key={lahan.id} value={lahan.id}>
                    {lahan.nama}
                  </option>
                ))}
              </select>
            </div>
            <div className="flex flex-col gap-2">
              <Label>Tanggal produksi *</Label>
              <Popover>
                <PopoverTrigger
                  className={cn(
                    "flex h-10 w-full items-center justify-start rounded-xl border border-input bg-background px-4 py-2 text-sm font-normal shadow-sm ring-offset-background hover:bg-accent hover:text-accent-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
                    !maintenanceDate && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {maintenanceDate ? (
                    format(maintenanceDate, "dd MMMM yyyy", { locale: id })
                  ) : (
                    <span>Pilih tanggal</span>
                  )}
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={maintenanceDate}
                    onSelect={setMaintenanceDate}
                  />
                </PopoverContent>
              </Popover>
              <input
                type="hidden"
                name="tanggal_produksi"
                value={
                  maintenanceDate ? format(maintenanceDate, "yyyy-MM-dd") : ""
                }
              />
            </div>
            <div className="flex gap-4">
              <div className="flex flex-col gap-2 flex-1">
                <Label>Jenis produk</Label>
                <Input
                  type="text"
                  name="jenis_produk"
                  placeholder="Contoh: Minyak kelapa"
                />
              </div>
              <div className="flex flex-col gap-2 flex-1">
                <Label>banyak produksi (Kg)</Label>
                <Input
                  type="number"
                  name="jumlah_kg"
                  placeholder="Contoh: 75"
                />
              </div>
            </div>
            <Button
              type="submit"
              className="w-full bg-[#269957] hover:bg-[#1e7a45] mt-4"
            >
              Simpan Laporan
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default LaporanLahan;
