export function fetchGroomer() {
    fetch('http://localhost:3001/api/g1/groomers/')
    .then(res => res.json())
    .then(data => console.log(data))
}