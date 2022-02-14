const users = [
    {
        name: 'clara',
        hobbies: ['swimming', 'painting', 'writing', 'running']
    },
    {
        name: 'edu',
        hobbies: ['gaming', 'watching films', 'running']
    },
    {
        name: 'rick',
        hobbies: ['running', 'writing', 'watching tv']
    },
    {
        name: 'mar',
        hobbies: ['reading', 'tennis']
    },
]

const modaHobbies = {}

const getModaHobbies = users => {
    users.forEach(h => {
        h.hobbies.map(e => {
            if (modaHobbies[e]) {
                modaHobbies[e] += 1
            } else {
                modaHobbies[e] = 1
            }
        })
    })
    return modaHobbies
}

console.log(getModaHobbies(users));