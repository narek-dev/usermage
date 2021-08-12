export const mergeUsers = (privileged, second) => {
    return second.map(baseUser => privileged.find( user => user.id === baseUser.id) || baseUser)
}