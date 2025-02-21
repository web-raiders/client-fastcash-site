export function formatDate(date: Date): string {
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'long', day: 'numeric'}
    return new Date(date).toLocaleDateString(undefined, options)
}

export function capitalizeInitial(str: string): string {
    if(typeof str !== "string" || str.length === 0) {
        return str
    }

    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function formatName(name: string): string {
    let result;
    if(name.split('').includes('_')){
        const splitNames = name.replaceAll('_', ' ').split(' ')
        const firstName = splitNames[0].charAt(0).toUpperCase() + splitNames[0].slice(1)
        const lastName = splitNames[1].charAt(0).toUpperCase() + splitNames[1].slice(1)
        result = `${firstName} ${lastName}`
    } else {
        result = name.replaceAll(' ', '_').toLowerCase()
    }
    
    return result
}