import { cn } from "../../lib/utils"

export function Card({ children }: { children: React.ReactNode }) {
  return <div className={cn("bg-white rounded-lg shadow-md p-4")}>{children}</div>
}

export function CardHeader({ children }: { children: React.ReactNode }) {
  return <div className={cn("border-b pb-2 mb-4")}>{children}</div>
}

export function CardTitle({ children, className }: { children: React.ReactNode; className?: string }) {
  return <h2 className={cn("text-xl font-semibold", className)}>{children}</h2>
}

export function CardContent({ children }: { children: React.ReactNode }) {
  return <div>{children}</div>
}

