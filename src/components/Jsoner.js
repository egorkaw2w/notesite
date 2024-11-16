class Jsoner {
    constructor({ jsonData }) {
        this.jsonData = jsonData;
    }

    async jsonReader() {
        try {
            const response = await fetch(this.jsonData);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            const data = await response.json();
            return data;
        } catch (error) {
            console.error("Программа закончила своё действие с ошибкой:", error);
            throw error;
        }
    }

    async jsonWriter(newDataMassive) {

    }
}

export default Jsoner;