'use server';

import { createClient } from "@/supabase/server";

export const authenticate = async (email: string, password: string) => {
    try {
        const supabase = await createClient();
        const { data, error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });
        if (error) throw error;
    } catch (error) {
        console.log("Authentication failed", error);
        throw error;
    }
}   