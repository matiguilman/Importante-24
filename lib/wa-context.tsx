"use client"

import { createContext, useContext } from "react"

const WaContext = createContext("5491162152890")

export const WaProvider = WaContext.Provider

export function useWaNumber() {
  return useContext(WaContext)
}
