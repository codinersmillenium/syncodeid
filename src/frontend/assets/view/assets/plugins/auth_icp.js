import { AuthClient } from "@dfinity/auth-client"
import { HttpAgent } from "@dfinity/agent";
import { canisterId } from "../../../../../declarations/internet_identity/index.js";
import { createActorUser, canisterUser } from "../canisters/users.js";

let canister;
let identity;

export const checkAndLogin = async () => {
    const authClient = await AuthClient.create();    
    if (await authClient.isAuthenticated()) {
        identity = authClient.getIdentity()
        initIdentity(identity)
    } else {
        await authClient.login({
            identityProvider: "http://localhost:4943/?canisterId=" + canisterId, // canister local icp
            onSuccess: async () => {
                identity = authClient.getIdentity();
                initIdentity(identity)
            },
            onError: (err) => console.error("Login error:", err),
            windowOpenerFeatures: `left=${window.screen.width / 2 - 525}, `+
                                `top=${window.screen.height / 2 - 705},` +
                                `toolbar=0,location=0,menubar=0,width=525,height=705`    
        });
    }

}

export const logout = async () => {
    const authClient = await AuthClient.create();    
    authClient.logout()
    alert('logout success')
    localStorage.removeItem('auth')
    window.location.reload()
}

export const getIdentity = async () => {
    const authClient = await AuthClient.create();    
    const identity = (await authClient.isAuthenticated()) ? authClient.getIdentity() : null
    return identity
}

export const sendPrincipalToBackend = async (role) => {        
    const result = await canister.registerUser({ [role]: null })
    if ("ok" in result) {
        alert('User registered successfully')
        localStorage.setItem('auth', true)
        console.log("User registered successfully:", result.ok)
    } else {
        alert('User registered failed')
        console.error("Registration failed:", result.err)
    }
    window.location.reload();
}

export const getUser = async (identity) => {
    const localAgent = await HttpAgent.create({
        host: "http://127.0.0.1:4943",
        identity: identity 
    });
    canister = createActorUser(canisterUser, { // jika tidak terdefinisi, clear cache atau masukkan canister id secara manual
        agent: localAgent
    });
    const user = await canister.getUser()
    return user
}

const initIdentity = async (identity) => {
    if (identity) {
        const user = await getUser(identity)
        if (user.length > 0) {
            alert('login success')
            localStorage.setItem('auth', true)
            window.location.reload();
        } else {
            document.getElementById("modalRegist").classList.remove("hidden")
        }
    }
}