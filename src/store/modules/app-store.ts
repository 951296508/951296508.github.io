import { defineStore } from "pinia";
import { reactive } from "vue";
import { store } from "@/store";
export const useAppStore = defineStore("app",()=>{
    const appStore = reactive({
        isCollapse: false,
    })
    return appStore;
})

export function useAppStoreHook() {
  return useAppStore(store);``
}
