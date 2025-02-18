import { ReactNode, useState } from "react"

export function Tabs({ children }: { children: ReactNode }) {
  const [activeTab] = useState<string | null>(null)
  return (
    <div>
      {Array.isArray(children)
        ? children.map((child: any) => {
            if (child.type === TabsList) {
              // Pass setActiveTab to TabsList
              return child
            }
            if (child.type === TabsContent && child.props.value === activeTab) {
              return child
            }
            return null
          })
        : null}
    </div>
  )
}

export function TabsList({ children }: { children: ReactNode }) {
  return <div className="flex space-x-4">{children}</div>
}

export function TabsTrigger({
  value,
  children,
  onSelect,
}: {
  value: string
  children: ReactNode
  onSelect: (value: string) => void
}) {
  return (
    <button
      className="border-b-2 pb-1"
      onClick={() => onSelect(value)}
    >
      {children}
    </button>
  )
}

export function TabsContent({
  children,
}: {
  value: string
  children: ReactNode
}) {
  return <div>{children}</div>
}
