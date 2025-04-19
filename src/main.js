import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
const supabase = createClient('https://lztvrvcgnfrxzniqbmei.supabase.co', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx6dHZydmNnbmZyeHpuaXFibWVpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ2ODU5OTUsImV4cCI6MjA2MDI2MTk5NX0.NKUw9w328qdskeczbeEMDjXp6Y4mXahQfEoK5mIzOkA')

const email = document.getElementById("email")
const password = document.getElementById("password")
const checkButton = document.getElementById("checkButton")

checkButton.addEventListener("click", async () => {

    const { data, error } = await supabase.auth.signUp({
        email: email.value,
        password: password.value,
    })

    if (error) {
        checkButton.textContent = error
    }
    checkButton.textContent=data
})