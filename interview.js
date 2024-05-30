// 1.) Push some data
// 2.) Pull retrieve data

// Mecahnishm to push and then to retrieve the data

class SQS {
    constructor(connection_string) {
        this.connection_string = connection_string;
        this.connect();
    }

    connect = () => {
        // Connect using the provided string i.e this.connection_string
    }

    addActiveListener = async (limit) => {
        const query = `INSERT INTO active_listeners (limit) VALUES (${limit}) RETURNING listener_id`;
        // After executing the query store the id in listener_id and return it.
        return listener_id;
    }

    getListenerLimit = async (listenerId) => {
        const query = `SELECT limit FROM active_listeners WHERE listener_id = '${listenerId}'`;
        // Store the response in limit and return it.
        return limit;
    }

    pushDataToQueue = async (data) => {
        // Insert Query should return the inserted value so we can send the job_id.
        const query = `INSERT INTO sqs_queue (data) VALUES (${JSON.stringify(data)}) RETURNING job_id`;
        // Now we store the response in jobId and return it
        return jobId;
    }

    sendData = (listener_id, data) => {
        // Using the listener id, send data.
        // Data will be an array of objects here with length depending on the listener limit.
    }

    pullDataFromQueue = async (listenerId) => {
        const limit = await this.getListenerLimit(listenerId);
        const query = `SELECT job_id, data FROM sqs_queue LIMIT ${limit}`;
        // Store the data in response variable.
        const response = [];
        this.sendData(listenerId, response);
    }
}


// Tables (PostgreSQL)

// sqs_queue: {
//     job_id: string,
//     data: jsonb
// }

// active_listeners: {
//     listener_id: string,
//     limit: number
// }