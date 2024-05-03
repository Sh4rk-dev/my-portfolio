import { Button } from "./ui/button";

export function SelectModal() {
  return (
    <div className="flex justify-center md:justify-end gap-5">
      <a href="https://drive.google.com/file/d/13X0WyldDrq6iolKiXVPdfozjV9ZaUwdr/view?usp=sharing">
        <Button className="w-20 bg-lime-500 text-white">PDF</Button>
      </a>

      <a
        aria-label="Indisponível"
        target="_blank"
        // href="https://read.cv/r.rapace"
      >
        <Button className="cursor-not-allowed w-20 border border-lime-500/40 text-black/40">
          Online
        </Button>
      </a>
    </div>
  );
}
