import { createStore as _createStore } from "vuex";

export function createStore() {
    return _createStore({
        state: {
            message: "Hello Test Page"
        },
        mutations: {},
        actions: {
            fetchMessage: ({ state }) => {
                console.log("fetch message ...");
                return new Promise(resolve => {
                    setTimeout(() => {
                        state.message = "Vite2 + Route + Store + SSR";
                        resolve();
                    }, 200);
                });
            }
        },
        modules: {}
    });
}
