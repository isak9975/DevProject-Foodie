import express from "express"

/// 기본적인 서버 세팅 ///
export function setupApp(app){
    app.use(express.json());

    app.use("/api", (req, res) => {
        res.send("API Root");
    });

    return app;
}