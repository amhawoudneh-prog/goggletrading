import { Wheat, FlaskConical, Beaker, GraduationCap } from "lucide-react"

// Agricultural Equipment Icon
export function AgricultureIcon({ className = "w-20 h-20" }: { className?: string }) {
  return <Wheat className={className} />
}

// Laboratory Equipment Icon
export function LaboratoryIcon({ className = "w-20 h-20" }: { className?: string }) {
  return <FlaskConical className={className} />
}

// Chemical Elements Icon
export function ChemicalIcon({ className = "w-20 h-20" }: { className?: string }) {
  return <Beaker className={className} />
}

// Educational Equipment Icon
export function EducationalIcon({ className = "w-20 h-20" }: { className?: string }) {
  return <GraduationCap className={className} />
}
