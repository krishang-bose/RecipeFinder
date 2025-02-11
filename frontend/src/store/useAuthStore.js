import {create} from "zustand";
import {axiosInstance} from "../lib/axios";
import { toast } from "react-hot-toast";

export const useAuthStore = create((set) => ({
    authUser: null,

    isSigningIn: false,
    isLoggingIn: false,
    isUpdatingProfile: false,

    isCheckingAuth: true,

    checkAuth: async () => {
        try{
            const res = await axiosInstance.get("/auth/check");
            set({authUser: res.data});
        }
        catch(error){
            console.error("error in checkAuth:", error);
            set({authUser: null});
        }
        finally{
            set({isCheckingAuth: false});
        }
    },
    signup: async (data) => {
        set({isSigningIn: true});
        try{
            const res = await axiosInstance.post("/auth/signup", data);
            set({authUser: res.data});
            toast.success("Signup successful");
        }
        catch(error){
            toast.error(error.response.data.message);
            console.error("error in signUp:", error);
        }
        finally{
            set({isSigningIn: false});
        }
    },
    logout: async () => {
        try{
            await axiosInstance.post("/auth/logout");
            set({authUser: null});
            toast.success("Logout successful");
        }
        catch(error){
            toast.success("Logout successful");
            console.error("error in logout:", error);
        }
    },
    login: async(data) =>{
        set({isLoggingIn: true});
        try{
            const res = await axiosInstance.post("/auth/login", data);
            set({authUser: res.data});
            toast.success("Login successful");
        }
        catch(error){
            toast.error(error.response.data.message);
            console.error("error in login:", error);
        }
        finally{
            set({isLoggingIn: false});
        }
    }
}));