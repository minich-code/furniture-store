import { Toaster } from "@/components/ui/sonner"
import { CartStoreProvider } from "@/lib/store/cart-store-provider"
import { ChatStoreProvider } from "@/lib/store/chat-store-provider"
import { SanityLive } from "@/sanity/lib/live"
import { ClerkProvider } from '@clerk/nextjs'
import { Header } from "@/components/app/Header";
import React from 'react'

function layout( { children }: { children: React.ReactNode}) {
  return (
    <ClerkProvider>
      <CartStoreProvider>
        <ChatStoreProvider> 
          <Header />
          <main>{children}</main>
          <Toaster position="bottom-center" />
          <SanityLive />
        </ChatStoreProvider>
      </CartStoreProvider>
    </ClerkProvider>
    
  )
}

export default layout