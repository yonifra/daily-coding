const defangIp = (ip: string) => {
    return ip.replaceAll('.', '[.]')
}

console.log(defangIp('192.168.0.0')) // Should be 192[.]168[.]0[.]0
