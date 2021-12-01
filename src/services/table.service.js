import http from "../http-common.js";

class TableDataService {
    getAll() {
        return http.get("/table");
    }

    get(tableNumber) {
        return http.get(`/table/${tableNumber}`);
    }

    create(data) {
        return http.post("/table", data);
    }

    update(tableNumber, data) {
        return http.put(`/table/${tableNumber}`, data);
    }

    delete(tableNumber) {
        return http.delete(`/table/${tableNumber}`);
    }

    findOne(tableNumber) {
        return http.get(`table?tableNumber=${tableNumber}`);
    }
}

export default new TableDataService