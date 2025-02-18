import { ReactNode } from "react"

export function Alert({ children }: { children: ReactNode }) {
  return <div className="bg-red-100 text-red-800 p-4 rounded">{children}</div>
}

export function AlertDescription({ children }: { children: ReactNode }) {
  return <div>{children}</div>
}
