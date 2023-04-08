export default class DataSource {
    static getComments = async () => {
        const response = await fetch('./DB/comments.json')
        const data = await response.json()
        return data
    }
}