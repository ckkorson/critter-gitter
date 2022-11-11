async function logout() {
    await fetch('/api/users/logout', {
        method: 'POST'
    }) 
}