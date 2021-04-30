type User = {
    name: string
    email: string
    address: {
        city: string
        state?: string
    }
}

function showWelcomeMessage(user: User) {
    return `Welcome ${user.name}, your e-mail is${user.email}.
        Your city is ${user.address.city} - ${user.address.state}`;
}

// message will be a string by inference
const message = showWelcomeMessage({
    name: "Gleycon",
    email: "gleyconxcarlos@gmail.com",
    address: {
        city: "Rolim de Moura",
        state: "RO",
    }
})
