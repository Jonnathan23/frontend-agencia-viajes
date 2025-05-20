import { toast } from "react-toastify"

export class ErrorWithServer extends Error {
    constructor(message = "Error con el servidor") {
        super(message)
        this.name = "ErrorWithServer";
    }

    errorAlert() {
        toast.error(this.message);
    }
}