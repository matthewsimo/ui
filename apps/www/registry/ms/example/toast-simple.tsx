"use client"

import { Button } from "@/registry/ms/ui/button"
import { useToast } from "@/registry/ms/ui/use-toast"

export default function ToastSimple() {
  const { toast } = useToast()

  return (
    <Button
      variant="outline"
      onClick={() => {
        toast({
          description: "Your message has been sent.",
        })
      }}
    >
      Show Toast
    </Button>
  )
}
